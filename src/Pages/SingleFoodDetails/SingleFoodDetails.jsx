import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
// import Swal from "sweetalert2";


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
                if(data.insertedId){
                   alert('service booked')
                }
               



            });










    }
    const {user}=useContext(AuthContext);
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
