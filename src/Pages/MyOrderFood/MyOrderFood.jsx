import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyOrderFoodCard from "./MyOrderFoodCard";
import PageTitle from "../../SharedComponent/PageTitle";
import Swal from "sweetalert2";



const MyOrderFood = () => {
    const { user } = useContext(AuthContext);
    const [orderFood, setOrderFood] = useState([]);

    const url = `https://assignment-11-server-self.vercel.app/orderFood?email=${user?.email}`;

    useEffect(() => {

        fetch(url)

            .then(res => res.json())
            .then(data => setOrderFood(data))


    }, [])


    const handleDelete = (id) => {
        Swal.fire({
          title: 'Are you sure?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'Cancel',
          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://assignment-11-server-self.vercel.app/orderFood/${id}`, {
              method: 'DELETE',
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: 'Success!',
                    text: 'Deleted successfully',
                    icon: 'success',
                    confirmButtonText: 'Go back',
                  });
                  const remaining = orderFood.filter((food) => food._id !== id);
                  setOrderFood(remaining);
                }
              });
          }
        });
      };
      








    return (
       <div>
         <PageTitle title="TableTrove | My order"></PageTitle>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto pb-24 pt-28">
            {
                orderFood.map(food => <MyOrderFoodCard
                    key={food._id}
                    food={food}
                    handleDelete={handleDelete}></MyOrderFoodCard>)

            }
            
        </div>
       </div>
    );
};

export default MyOrderFood;