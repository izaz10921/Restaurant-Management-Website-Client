
import { useEffect, useState } from "react";
import AvailableFoodsCard from "./AvailableFoodsCard";
const AvailableFoods = () => {



    const [allFoods,setAllFoods] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/allFoods')
        .then(res => res.json())
        .then(data => setAllFoods(data));
    },[]

    )
    return (
        <div>
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