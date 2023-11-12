
import { useEffect, useState } from "react";
import AvailableFoodsCard from "./AvailableFoodsCard";
import PageTitle from "../../SharedComponent/PageTitle";

const AvailableFoods = () => {
    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        console.log(searchText);
        setSearch(searchText);
    }



    const [allFoods, setAllFoods] = useState([]);
    const [search, setSearch] = useState('');

    console.log(allFoods);

    useEffect(() => {
        fetch(`http://localhost:5000/allFoods?search=${search}`)
            .then(res => res.json())
            .then(data => setAllFoods(data));
    }, [search]

    )



    return (
        <div>
            <PageTitle title="TableTrove | All food items"></PageTitle>

            <form onSubmit={handleSearch}>
                <div className="mb-4">

                    <input
                        className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                        name="search"
                        type="text"


                    />
                </div>

                <input type="submit" value="Search" className="btn" />

            </form>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


                {
                    allFoods.map(food => <AvailableFoodsCard
                        key={food.id}
                        food={food}

                    ></AvailableFoodsCard>)
                }


            </div>
        </div>
    );
};

export default AvailableFoods;