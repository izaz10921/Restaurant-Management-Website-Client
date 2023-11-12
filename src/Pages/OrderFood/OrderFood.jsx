import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const OrderFood = () => {
    const [allFoods, setAllFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allFoods')
            .then(res => res.json())
            .then(data => setAllFoods(data));
    }, []

    )





    const handleOrderFood = (e) => {

        e.preventDefault();
        const form = e.target;
        const foodName = form .foodName.value;
        const price= form .price.value;
        const buyerName= form .buyerName.value;
        const buyerEmail = form .buyerEmail.value;
        const buyingDate = form .buyingDate.value;
        const orderQuantity = form .orderQuantity.value;



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
       

        const orderFood = {foodName:foodName,
            price:price,
            buyerName:buyerName,
            buyerEmail:buyerEmail,
            buyingDate:buyingDate,
            orderQuantity:orderQuantity}
            console.log(orderFood);

            fetch('http://localhost:5000/orderFood',{
                method:'POST',
                headers:{
                    'content-type':'application/json'

                },
                body:JSON.stringify(orderFood)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
               
                if(data.insertedId){
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
    const { foodName, price } = food;


    const { user } = useContext(AuthContext);
    return (
        <div>

            <p className="text-center">Order food</p>
            
            <form onSubmit={handleOrderFood}

                className="bg-white shadow-md max-w-4xl mx-auto rounded px-8 py-8 sm:py-6 lg:py-10 mb-4"
            >

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"

                        >
                            Food name
                        </label>
                        <input
                            className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                            name="foodName"
                            type="text"
                            defaultValue={foodName}

                            readOnly
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"

                        >
                            Food price
                        </label>
                        <input
                            className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
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
                            className="block text-gray-700 text-sm font-bold mb-2"

                        >
                            Buyer Name
                        </label>
                        <input
                            className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                            name="buyerName"
                            type="text"
                            defaultValue={user.displayName}


                            readOnly
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"

                        >
                            Buyer email
                        </label>
                        <input
                            className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
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
                            className="block text-gray-700 text-sm font-bold mb-2"

                        >
                            Buying Date
                        </label>
                        <input
                            className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                            name="buyingDate"
                            type="date"


                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"

                        >
                            Order Quantity
                        </label>
                        <input
                            className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                            name="orderQuantity"
                            type="number"

                          
                        />
                    </div>

                </div>




                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-auto px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Purchase Food
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OrderFood;