import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import PageTitle from "../../SharedComponent/PageTitle";


const AddFood = () => {

    const handleAddFood = (e) => {

        e.preventDefault();
        const form = e.target;

        const foodName = form.foodName.value;
        const foodImageURL = form.foodImageURL.value;

        const donorEmail = form.donorEmail.value;
        const donorPhotoURL = form.donorPhotoURL.value;
        const donatorName = form.donatorName.value;
        const pickupLocation = form.pickupLocation.value;
        const expiredDate = form.expiredDate.value;

        const additionalNotes = form.additionalNotes.value;
        const foodQuantity = form.foodQuantity.value;
        const foodStatus= form.foodStatus.value;



        const userAddedFood = {
            foodName: foodName,

            foodImage: foodImageURL,
            donorEmail: donorEmail,
            donatorName: donatorName,
            donatorImage: donorPhotoURL,
            pickupLocation: pickupLocation,
            expiredDate: expiredDate,
            additionalNotes: additionalNotes,
            foodQuantity: foodQuantity,
            foodStatus:foodStatus
        }


        console.log(userAddedFood);

        fetch('http://localhost:5000/allFoods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(userAddedFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: 'Success!',
                    text: 'New food added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })



            });



    }

    const { user } = useContext(AuthContext);
    return (
        <div>
            <PageTitle title="TableTrove | Blog"></PageTitle>
           


            <form onSubmit={handleAddFood}

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
                            required


                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"

                        >
                            Food image URL
                        </label>
                        <input
                            className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                            name="foodImageURL"
                            type="text"
                            required

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
                            defaultValue={user.email}
                            readOnly
                        />


                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"

                        >
                            Donor photo URL
                        </label>
                        <input
                            className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                            name="donorPhotoURL"
                            type="text"
                            defaultValue={user.photoURL}
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
                            defaultValue={user.displayName}
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
                            required

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
                            required

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
                        Food Quantity (no. of person to be served)
                    </label>
                    <input
                        className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                        name="foodQuantity"
                        type="number"
                        required


                    />
                </div>

                <div className="form-control mb-4">
                    <div className="input-group">
                    <label
                        className="block text-blue-700 text-sm font-bold mb-2 mr-2 mt-2"

                    >
                        Food status
                    </label>

                        <select className="select select-bordered w-1/2  text-black leading-tight border rounded focus:outline-none focus:shadow-outline " name="foodStatus" type="text" defaultValue="Available" >
                            <option disabled selected >Set status</option>
                            <option>Available</option>
                            <option>Pending</option>
                            <option>Delivered</option>
                            
                        </select>

                    </div>
                </div>




                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-auto px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add Food
                    </button>
                </div>
            </form>

        </div>
    );
};

export default AddFood;