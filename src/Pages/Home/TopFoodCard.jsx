/* eslint-disable react/prop-types */

const TopFoodCard = ({food}) => {
    const { foodName, price, orderQuantity} = food;


    return (
        <div>
            <div  className="card w-96 bg-base-100 shadow-xl bg-[url('https://i.ibb.co/Nn4qB2C/top-view-delicious-food-pack.jpg')] bg-cover bg-center ">
         
               <div className="card-body">
                   <h2 className="card-title">{foodName}</h2>

                   <p>Order quantity:{orderQuantity}</p>


                   <p>Price:${price}</p>


                   
               </div>
           </div>
        </div>
    );
};

export default TopFoodCard;