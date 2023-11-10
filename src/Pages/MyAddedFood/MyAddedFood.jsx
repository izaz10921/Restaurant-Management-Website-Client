import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyAddedFoodRow from "./MyAddedFoodRow";


const MyAddedFood = () => {



    const { user } = useContext(AuthContext);
    const [userFood, setUserFood] = useState([]);
    const url = `http://localhost:5000/allFoods?email=${user?.email}`;


    useEffect(() => {

        fetch(url)

            .then(res => res.json())
            .then(data => setUserFood(data))


    }, [])


    return (
        <div>
            
                        {

                            userFood.map(food => <MyAddedFoodRow
                                key={food._id}
                                food={food}


                            
                            
                            >

                            </MyAddedFoodRow>)

                        }



        </div>
    );
};

export default MyAddedFood;