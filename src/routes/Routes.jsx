import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import SingleFoodDetails from "../Pages/SingleFoodDetails/SingleFoodDetails";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFood from "../Pages/ManageMyFood/ManageMyFood";
import AddItem from "../Pages/AddItem/AddItem";
import OrderFood from "../Pages/OrderFood/OrderFood";
import MyAddedFood from "../Pages/MyAddedFood/MyAddedFood";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/availableFoods",
            element:<AvailableFoods></AvailableFoods>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
          path:"/singleFoodDetails/:id",
          element:<PrivateRoute><SingleFoodDetails></SingleFoodDetails></PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/allFoods/${params.id}`)
        },
        {
          path:"/addFood",
          element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
          path:"/myAddedFood",
          element:<PrivateRoute><MyAddedFood></MyAddedFood></PrivateRoute>
        },
        {
          path:"/addItem",
          element:<PrivateRoute><AddItem></AddItem></PrivateRoute>
        },
        {
          path:"/orderFood/:id",
          element:<PrivateRoute><OrderFood></OrderFood></PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/allFoods/${params.id}`)
        }


      ]
    },
  ]);


  export default router;