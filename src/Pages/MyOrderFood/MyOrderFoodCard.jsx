/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const MyOrderFoodCard = ({food}) => {

    const { foodName, price, buyingDate } = food;

    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
               
                <div className="card-body">
                    <h2 className="card-title">{foodName}</h2>

                    <p>Added time:{buyingDate}</p>


                    <p>Price:${price}</p>


                    <div className="card-actions justify-end">
                        <Link ><button className="btn btn-primary"> Update</button></Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyOrderFoodCard;