import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SingleFoodDetails = () => {
    const { user } = useContext(AuthContext);
    const food = useLoaderData();
    const { makerName, makerEmail, description, foodOrigin, foodImage, foodName, foodCategory, price, _id } = food;

    const isOrderButtonDisabled = makerEmail === user.email;

    return (
        <div>
            <div>
                <p>Made by:{makerName}</p>
            </div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={foodImage} alt="Food" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{foodName}</h2>
                        <p>Food Category:{foodCategory}</p>
                        <p>Price:${price}</p>
                        <p>Food Origin: {foodOrigin}</p>
                        <p>Description:{description}</p>
                        <Link to={`/orderFood/${_id}`}>
                            <button
                                className="btn btn-secondary"
                                disabled={isOrderButtonDisabled}
                            >
                                {isOrderButtonDisabled ? "Order Disabled" : "Order"}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFoodDetails;
