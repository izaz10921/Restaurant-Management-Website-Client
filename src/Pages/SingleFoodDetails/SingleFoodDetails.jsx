import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";



const SingleFoodDetails = () => {


    const handleFoodRequest = (e) => {

        e.preventDefault();
        const form = e.target;

        const foodName = form .foodName.value;
        const id= form .id.value;
        const donorEmail= form .donorEmail.value;
        const userEmail = form .userEmail.value;
        const donatorName = form .donatorName.value;
        const pickupLocation = form .pickupLocation.value;
        const expiredDate = form .expiredDate.value;
        const requestDate = form .requestDate.value;
        const additionalNotes = form .additionalNotes.value;
        const donationMoney = form .donationMoney.value;

        const requestedFood = {foodName:foodName,
            id:id,
            donorEmail:donorEmail,
            userEmail:userEmail,
            donatorName:donatorName,
            pickupLocation:pickupLocation,
            expiredDate:expiredDate,
            requestDate:requestDate,
            additionalNotes:additionalNotes ,donationMoney:donationMoney}
            console.log(requestedFood);

            fetch('http://localhost:5000/requestFood',{
                method:'POST',
                headers:{
                    'content-type':'application/json'

                },
                body:JSON.stringify(requestedFood)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })










    }
    const {user}=useContext(AuthContext);
    const food = useLoaderData();
    const { donatorName,donorEmail, pickupLocation, foodImage, foodName, foodQuantity, expiredDate, id } = food;


    return (

        <div>


            <div>


                <h2>Donor information:</h2>
                <p>Name:{donatorName}</p>
                <p>Food Pickup Location:{pickupLocation}</p>
            </div>

            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={foodImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{foodName}</h2>



                        <p>Food quantity:{foodQuantity}</p>

                        <p>Expire date:{expiredDate}</p>


                        <div className="card-actions justify-end">
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn  btn-primary" onClick={() => document.getElementById('my_modal_4').showModal()}>Food request</button>
                            <dialog id="my_modal_4" className="modal">
                                <div className="modal-box w-11/12 max-w-5xl">

                                    <div><img  className="w-[15opx] h-[150px] mx-auto" src={foodImage} alt="" /></div>

                                    <form onSubmit={handleFoodRequest}

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
                                                    Food id
                                                </label>
                                                <input
                                                    className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                                                    name="id"
                                                    type="text"
                                                    defaultValue={id}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="mb-4">
                                                <label
                                                    className="block text-gray-700 text-sm font-bold mb-2"

                                                >
                                                    Donor email
                                                </label>
                                                <input
                                                    className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                                                    name="donorEmail"
                                                    type="text"
                                                    defaultValue={donorEmail}
                                                    
                                                    readOnly
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    className="block text-gray-700 text-sm font-bold mb-2"

                                                >
                                                    User email
                                                </label>
                                                <input
                                                    className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                                                    name="userEmail"
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
                                                    Donor name
                                                </label>
                                                <input
                                                    className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                                                    name="donatorName"
                                                    type="text"
                                                    defaultValue={donatorName}
                                                    readOnly
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    className="block text-blue-700 text-sm font-bold mb-2"

                                                >
                                                    Pick up location
                                                </label>
                                                <input
                                                    className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                                                    name="pickupLocation"
                                                    type="text"
                                                    defaultValue={pickupLocation}
                                                    readOnly
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="mb-4">
                                                <label
                                                    className="block text-gray-700 text-sm font-bold mb-2"

                                                >
                                                    Expire date
                                                </label>
                                                <input
                                                    className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                                                    name="expiredDate"
                                                    type="date"
                                                    defaultValue={expiredDate}
                                                    readOnly
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    className="block text-blue-700 text-sm font-bold mb-2"

                                                >
                                                    Request date
                                                </label>
                                                <input
                                                    className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                                                    name="requestDate"
                                                    type="date"

                                                />
                                            </div>
                                        </div>


                                        <div className="mb-4">
                                            <label
                                                className="block text-blue-700 text-sm font-bold mb-2"

                                            >
                                                Additional Notes
                                            </label>
                                            <textarea
                                                className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                                                name="additionalNotes"
                                                rows="4"
                                                required

                                            ></textarea>
                                        </div>

                                        <div className="mb-4">
                                            <label
                                                className="block text-blue-700 text-sm font-bold mb-2"

                                            >
                                                Donation Money
                                            </label>
                                            <input
                                                className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                                                name="donationMoney"
                                                type="number"
                                                required
                                               
                                                
                                            />
                                        </div>




                                        <div className="flex items-center justify-between">
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-auto px-4 rounded focus:outline-none focus:shadow-outline"
                                                type="submit"
                                            >
                                                Apply request
                                            </button>
                                        </div>
                                    </form>














                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button, it will close the modal */}
                                            <button className="btn btn-error text-white font-bold">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>







        </div>




    );

};

export default SingleFoodDetails;
