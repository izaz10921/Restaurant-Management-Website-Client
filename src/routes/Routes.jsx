import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import SingleFoodDetails from "../Pages/SingleFoodDetails/SingleFoodDetails";
import AddItem from "../Pages/AddItem/AddItem";
import OrderFood from "../Pages/OrderFood/OrderFood";
import MyAddedFood from "../Pages/MyAddedFood/MyAddedFood";
import MyOrderFood from "../Pages/MyOrderFood/MyOrderFood";
import UpdateItem from "../Pages/MyAddedFood/UpdateItem";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:"/singleFoodDetails/:id",
          element:<PrivateRoute><SingleFoodDetails></SingleFoodDetails></PrivateRoute>,
          loader:({params})=> fetch(`https://assignment-11-server-self.vercel.app/allFoods/${params.id}`)
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
          loader:({params})=> fetch(`https://assignment-11-server-self.vercel.app/allFoods/${params.id}`)
        },
        {
          path:"/myOrderFood",
          element:<PrivateRoute><MyOrderFood></MyOrderFood></PrivateRoute>
        },
        {
          path:"/updateItem/:id",
          element:<PrivateRoute><UpdateItem></UpdateItem></PrivateRoute>,
          loader: ({ params }) =>
          fetch(`https://assignment-11-server-self.vercel.app/allFoods/${params.id}`)
        }


      ]
    },
  ]);


  export default router;