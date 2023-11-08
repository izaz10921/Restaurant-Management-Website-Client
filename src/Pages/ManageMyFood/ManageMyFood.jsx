import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ManageMyFoodRow from "./ManageMyFoodRow";


const ManageMyFood = () => {

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
            
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                        <th>
                                <label>
                                    
                                </label>
                            </th>
                            <th>Food details</th>
                            <th>Donor details</th>
                            <th>Expire date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            userFood.map(food => <ManageMyFoodRow
                            key={food._id}
                            food={food}
                            
                            
                            
                            ></ManageMyFoodRow>)

                        }



                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default ManageMyFood;