import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyAddedFoodRow from "./MyAddedFoodRow";
import PageTitle from "../../SharedComponent/PageTitle";


const MyAddedFood = () => {



    const { user } = useContext(AuthContext);
    const [userFood, setUserFood] = useState([]);
    const url = `https://assignment-11-server-self.vercel.app/allFoods?email=${user?.email}`;


    useEffect(() => {

        fetch(url)

            .then(res => res.json())
            .then(data => setUserFood(data))


    }, [])


    return (
       <div>
         <PageTitle title="TableTrove | User Added item"></PageTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto pb-24 pt-24">
            
                        {

                            userFood.map(food => <MyAddedFoodRow
                                key={food._id}
                                food={food}


                            
                            
                            >

                            </MyAddedFoodRow>)

                        }



        </div>
       </div>
    );
};

export default MyAddedFood;