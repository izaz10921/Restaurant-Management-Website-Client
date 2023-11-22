import { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";


const TopFood = () => {

    const [topFood, setTopFood] = useState([]);


    useEffect(() => {
        fetch('https://assignment-11-server-self.vercel.app/orderFood')
            .then(res => res.json())
            .then(data => {
                // Sort the data in descending order by orderQuantity
                const sortedData = data.sort((a, b) => b.orderQuantity - a.orderQuantity);
                setTopFood(sortedData);
            });
    }, []

    )
    return (
        <div>
            <p className="text-center text-3xl text-pink-500 font-bold mb-6 pt-24">Top ordered food</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto pb-24 ">
        
        


        {
            topFood.slice(0, 6).map(food => <TopFoodCard
                key={food.id}
                food={food}></TopFoodCard>)
        }
    </div>
        </div>
    );
};

export default TopFood;