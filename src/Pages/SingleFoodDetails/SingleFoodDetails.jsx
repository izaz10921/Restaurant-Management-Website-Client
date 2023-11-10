
import { Link, useLoaderData } from "react-router-dom";




const SingleFoodDetails = () => {


    
    const food = useLoaderData();
    const { makerName,description, foodOrigin, foodImage, foodName, foodCategory, price, _id } = food;


    return (

        <div>


            <div>


                
                <p>Made by:{ makerName}</p>
                
            </div>

            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={foodImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{foodName}</h2>



                        <p>Food Category:{foodCategory}</p>

                        <p>Price:${price}</p>
                        <p>Food Origin: {foodOrigin}</p>
                        <p>Description:{description}</p>
                        <Link to={`/orderFood/${_id}`}><button className="btn btn-secondary">Order</button></Link>


                       
                    </div>
                </div>
            </div>







        </div>




    );

};

export default SingleFoodDetails;
