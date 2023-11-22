import { useContext } from "react";
import PageTitle from "../../SharedComponent/PageTitle";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const AddItem = () => {

    const { user } = useContext(AuthContext);

    const handleAddFoodItem = (e) => {

        e.preventDefault();
        const form = e.target;

        const foodName = form.foodName.value;
        const foodImageURL = form.foodImageURL.value;

        const makerEmail = form.makerEmail.value;
        
        const makerName = form.makerName.value;
        const price = form.price.value;
        const foodOrigin = form.foodOrigin.value;

        const description = form.description.value;
        const foodQuantity = form.foodQuantity.value;
        const foodCategory = form.foodCategory.value;



        const userAddedFood = {
            foodName: foodName,

            foodImage: foodImageURL,
            makerEmail: makerEmail,
            makerName: makerName,
            
            price: price,
            foodOrigin: foodOrigin,
            description: description,
            foodQuantity: foodQuantity,
            foodCategory: foodCategory
        }


        console.log(userAddedFood);

        fetch('https://assignment-11-server-self.vercel.app/allFoods', {
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
                    text: 'New food item added',
                    icon: 'success',
                    confirmButtonText: 'Go back'
                })

                form.reset();



            });



    }








    return (
        <div>
            <PageTitle title="TableTrove | Add item"></PageTitle>



            


            <form onSubmit={handleAddFoodItem}

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
                            Maker email
                        </label>
                        <input
                            className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                            name="makerEmail"
                            type="text"
                            defaultValue={user.email}
                            readOnly
                        />


                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"

                        >
                            Maker name
                        </label>
                        <input
                            className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                            name="makerName"
                            type="text"
                            defaultValue={user.displayName}
                            readOnly
                        />


                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"

                        >
                            Price
                        </label>
                        <input
                            className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                            name="price"
                            type="number"
                            required

                        />
                    </div>



                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"

                        >
                            Food Origin(Country)
                        </label>
                        <input
                            className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                            name="foodOrigin"
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
                            Food Category
                        </label>
                        <input
                            className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                            name="foodCategory"
                            type="text"
                            required

                        />
                    </div>

                </div>


                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"

                    >
                        A short description of the food item
                    </label>
                    <textarea
                        className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                        name="description"
                        rows="4"
                        required
                        placeholder="(for example: ingredients, making procedure, etc. )"

                    ></textarea>
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"

                    >
                        Food Quantity
                    </label>
                    <input
                        className="w-full py-2 px-3 text-black leading-tight border rounded focus:outline-none focus:shadow-outline"
                        name="foodQuantity"
                        type="number"
                        required


                    />
                </div>

               




                <div className="flex items-center justify-between">
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 mx-auto px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add Food Item
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddItem;