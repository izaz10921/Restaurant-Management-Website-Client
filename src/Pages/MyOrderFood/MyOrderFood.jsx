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


    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/orderFood/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = orderFood.filter(food => food._id !== id);
                        setOrderFood(remaining);
                    }
                })
        }
    }








    return (
        <div>
            {
                orderFood.map(food => <MyOrderFoodCard
                    key={food._id}
                    food={food}
                    handleDelete={handleDelete}></MyOrderFoodCard>)

            }
            
        </div>
    );
};

export default MyOrderFood;