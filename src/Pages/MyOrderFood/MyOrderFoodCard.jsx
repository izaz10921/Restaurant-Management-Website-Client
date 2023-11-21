/* eslint-disable react/prop-types */



const MyOrderFoodCard = ({food,handleDelete}) => {

    const { _id,foodName, price, buyingDate } = food;

    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl bg-[url('https://i.ibb.co/Nn4qB2C/top-view-delicious-food-pack.jpg')] bg-cover bg-center">
               
                <div className="card-body">
                    <h2 className="card-title">{foodName}</h2>

                    <p>Added time:{buyingDate}</p>


                    <p>Price:${price}</p>


                    <div className="card-actions justify-end">
                       <button onClick={() => handleDelete(_id)} className="btn btn-error text-white"> Delete</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyOrderFoodCard;