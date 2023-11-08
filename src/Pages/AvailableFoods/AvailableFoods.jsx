
import { useEffect, useState } from "react";
import AvailableFoodsCard from "./AvailableFoodsCard";
import PageTitle from "../../SharedComponent/PageTitle";

const AvailableFoods = () => {



    const [allFoods, setAllFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allFoods')
            .then(res => res.json())
            .then(data => setAllFoods(data));
    }, []

    )
    return (
        <div>
            <PageTitle title="TableTrove | All food items"></PageTitle>
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