/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AvailableFoodsCard = ({food}) => {


    const { foodName, foodImage, donatorImage, donatorName, foodQuantity, pickupLocation, expiredDate, additionalNotes } = food
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={foodImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{foodName}</h2>

                    <div className="flex gap-8 align-middle">
                    <div ><img className="w-[50px] h-[50px]" src={donatorImage} alt="" /></div>
                    <div><p>Name:{ donatorName}</p></div>
                    </div>








                    <p>Food quantity:{foodQuantity}</p>
                    <p>Pick up location:{pickupLocation}</p>
                    <p>Expire date:{expiredDate}</p>

                    <p>{additionalNotes}</p>
                    <div className="card-actions justify-end">
                       <Link to="/singleFoodDetails"> <button className="btn btn-primary"> View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableFoodsCard;

