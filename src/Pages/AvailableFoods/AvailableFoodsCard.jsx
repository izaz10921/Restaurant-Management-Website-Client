/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AvailableFoodsCard = ({food}) => {


    const {_id, foodName,foodCategory, foodImage,  foodQuantity, price } = food
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={foodImage}  /></figure>
                <div className="card-body">
                    <h2 className="card-title">{foodName}</h2>

                    








                    <p>Food quantity:{foodQuantity}</p>
                    <p>Category:{foodCategory}</p>
                    <p>Price:${price}</p>

                    
                    <div className="card-actions justify-end">
                    <Link to={`/singleFoodDetails/${_id}`}><button className="btn btn-primary"> View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableFoodsCard;

