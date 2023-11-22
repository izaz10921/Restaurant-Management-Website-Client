import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import PageTitle from "../../SharedComponent/PageTitle";


const OrderFood = () => {
    const [allFoods, setAllFoods] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server-self.vercel.app/allFoods')
            .then(res => res.json())
            .then(data => setAllFoods(data));
    }, []

    )





    const handleOrderFood = (e) => {

        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const price = form.price.value;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const buyingDate = form.buyingDate.value;
        const orderQuantity = form.orderQuantity.value;



        const availableFood = allFoods.find(food => food.foodName === foodName);
        const availableFoodQuantity = availableFood ? availableFood.foodQuantity : 0;

        if (parseInt(orderQuantity, 10) > availableFoodQuantity) {
            Swal.fire({
                title: 'Error!',
                text: 'Available food quantity limit reached',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return; // Don't proceed with the order if quantity limit is exceeded
        }


        const orderFood = {
            foodName: foodName,
            price: price,
            buyerName: buyerName,
            buyerEmail: buyerEmail,
            buyingDate: buyingDate,
            orderQuantity: orderQuantity
        }
        console.log(orderFood);

        fetch('https://assignment-11-server-self.vercel.app/orderFood', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(orderFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New order added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }



            });


    }

    const food = useLoaderData();
    const { foodImage, foodName, price } = food;


    const { user } = useContext(AuthContext);
    return (
       <div>
         <PageTitle title="TableTrove | Order food"></PageTitle>
        <div style={{ backgroundImage: `url(${foodImage})` }}
            className="bg-cover bg-center h-screen">



            <div className="">
                <form onSubmit={handleOrderFood}

                    className="h-screen bg-opacity-10 backdrop-filter backdrop-blur-sm bg-white bg-clip-padding backdrop-saturate-150  p-6 "
                >
                    <p className="text-center text-white text-2xl font-bold mb-6">Order food</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"

                            >
                                Food name
                            </label>
                            <input


                                className="w-full py-2 px-3  text-black leading-tight border-2 hover:border-pink-500 rounded focus:outline-none focus:shadow-outline"
                                name="foodName"
                                type="text"
                                defaultValue={foodName}

                                readOnly
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"

                            >
                                Food price
                            </label>
                            <input
                                className="w-full py-2 px-3 text-black leading-tight border-2 hover:border-pink-500 rounded focus:outline-none focus:shadow-outline"
                                name="price"
                                type="number"
                                defaultValue={price}

                                readOnly
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"

                            >
                                Buyer Name
                            </label>
                            <input
                                className="w-full py-2 px-3 text-black leading-tight border-2 hover:border-pink-500 rounded focus:outline-none focus:shadow-outline"
                                name="buyerName"
                                type="text"
                                defaultValue={user.displayName}


                                readOnly
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"

                            >
                                Buyer email
                            </label>
                            <input
                                className="w-full py-2 px-3 text-black leading-tight border-2 hover:border-pink-500 rounded focus:outline-none focus:shadow-outline"
                                name="buyerEmail"
                                type="text"
                                defaultValue={user.email}

                                readOnly
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"

                            >
                                Buying Date
                            </label>
                            <input
                                className="w-full py-2 px-3 text-black border-2 hover:border-pink-500 leading-tight  rounded focus:outline-none focus:shadow-outline"
                                name="buyingDate"
                                type="date"


                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"

                            >
                                Order Quantity
                            </label>
                            <input
                                className="w-full py-2 px-3 text-black leading-tight border-2 hover:border-pink-500 rounded focus:outline-none focus:shadow-outline"
                                name="orderQuantity"
                                type="number"


                            />
                        </div>

                    </div>




                    <div className="flex items-center justify-between">
                        <button
                            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 mx-auto px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Purchase Food
                        </button>
                    </div>
                </form>
            </div>
        </div>
       </div>
    );
};

export default OrderFood;