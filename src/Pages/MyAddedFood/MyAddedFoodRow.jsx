// import { Link } from "react-router-dom";



import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MyAddedFoodRow = ({ food }) => {

    







   
    const { foodImage, foodName, price} = food;
    return (
        <div>


            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={foodImage} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{foodName}</h2>


                    <p>Price:${price}</p>


                    <div className="card-actions justify-end">
                        <Link to={`/updateItem/${food._id}`} ><button className="btn btn-primary"> Update</button></Link>


                        
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyAddedFoodRow;