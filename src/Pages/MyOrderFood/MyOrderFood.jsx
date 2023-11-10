import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyOrderFoodCard from "./MyOrderFoodCard";


const MyOrderFood = () => {
    const { user } = useContext(AuthContext);
    const [orderFood, setOrderFood] = useState([]);

    const url = `http://localhost:5000/orderFood?email=${user?.email}`;

    useEffect(() => {

        fetch(url)

            .then(res => res.json())
            .then(data => setOrderFood(data))


    }, [])








    return (
        <div>
            {
                orderFood.map(food => <MyOrderFoodCard
                    key={food._id}
                    food={food}></MyOrderFoodCard>)

            }
            
        </div>
    );
};

export default MyOrderFood;