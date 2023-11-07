import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const ManageMyFood = () => {

    const {user} = useContext(AuthContext);

    const [userFood,setUserFood] = useState([]);

    const url = `http://localhost:5000/allFoods?email=${user?.email}`;

    useEffect (() => {

        fetch(url)

        .then(res => res.json())
        .then(data => setUserFood(data)) 







    },[])








    return (
        <div>
            <h3>mange {userFood.length}</h3>
        </div>
    );
};

export default ManageMyFood;