import { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";


const TopFood = () => {

    const [topFood, setTopFood] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/orderFood')
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
        <h3>Top Orders:</h3>
        


        {
            topFood.slice(0, 6).map(food => <TopFoodCard
                key={food.id}
                food={food}></TopFoodCard>)
        }
    </div>
    );
};

export default TopFood;