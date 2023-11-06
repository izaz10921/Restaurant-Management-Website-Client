import { useEffect, useState } from "react";
import FeaturedFoodsCard from "./FeaturedFoodsCard";


const FeaturedFoods = () => {

    const [allFoods,setAllFoods] = useState([]);
    

    useEffect(()=> {
        fetch('http://localhost:5000/allFoods')
        .then(res => res.json())
        .then(data => setAllFoods(data));
    },[]

    )




    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            

            {
                allFoods.slice(0, 6).map(food => <FeaturedFoodsCard
                key={food.id}
                food={food}>

                </FeaturedFoodsCard>)
            }


        </div>
    );
};

export default FeaturedFoods;