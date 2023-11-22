
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
        fetch(`https://assignment-11-server-self.vercel.app/allFoods?search=${search}`)
            .then(res => res.json())
            .then(data => setAllFoods(data));
    }, [search]

    )



    return (
        <div>
            <PageTitle title="TableTrove | All food items"></PageTitle>
            <form onSubmit={handleSearch} className="flex items-center justify-center ">
                <div className="flex items-center pb-10 pt-10  ">
                    <div className="">
                        <input
                            className="w-full py-3 px-3 text-black leading-tight border-2 hover:border-pink-500 rounded focus:outline-none focus:shadow-outline"
                            name="search"
                            type="text"
                        />
                    </div>
                    <div className="">
                        <input type="submit" value="Search" className="bg-pink-500 hover:bg-pink-700 text-white font-bold mx-auto  rounded focus:outline-none focus:shadow-outline btn" />
                    </div>
                </div>
            </form>




            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto pb-24">


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