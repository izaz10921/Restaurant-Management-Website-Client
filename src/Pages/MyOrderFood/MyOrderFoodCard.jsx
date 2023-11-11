/* eslint-disable react/prop-types */



const MyOrderFoodCard = ({food,handleDelete}) => {

    const { _id,foodName, price, buyingDate } = food;

    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
               
                <div className="card-body">
                    <h2 className="card-title">{foodName}</h2>

                    <p>Added time:{buyingDate}</p>


                    <p>Price:${price}</p>


                    <div className="card-actions justify-end">
                       <button onClick={() => handleDelete(_id)} className="btn btn-primary"> Delete</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyOrderFoodCard;