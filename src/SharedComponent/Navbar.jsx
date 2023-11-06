import { Link, NavLink } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "../providers/AuthProvider";
const Navbar = () => {

   






    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then()
            .catch()

    }

    const navlinks = <>

        <li ><NavLink to="/" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "green" : "black",
                background: isActive ? "lightgray" : ""

            };
        }}>Home</NavLink></li>
        <li ><NavLink to="/availableFoods" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "green" : "black",
                background: isActive ? "lightgray" : ""

            };
        }}>Available Foods</NavLink></li>
        <li><NavLink to="/myCart" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "orange" : "black",
                textDecoration: isActive ? "underline" : "",
            };
        }}>Add Food</NavLink></li>
        <li><NavLink to="/myCart" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "orange" : "black",
                textDecoration: isActive ? "underline" : "",
            };
        }}>Manage My Foods</NavLink></li>
        <li><NavLink to="/myCart" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "orange" : "black",
                textDecoration: isActive ? "underline" : "",
            };
        }}>My Food Request</NavLink></li>

    </>


    return (
        <div>
            <div className="navbar  bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn  lg:hidden">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="  btn-active  dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                            {
                                navlinks
                            }
                        </ul>
                    </div>
                    <img className="w-[50px] h-[50px]" src="https://i.ibb.co/Kb0gjK8/food-7223086.png" alt="" />
                    <button className="btn btn-ghost normal-case text-xl font-bold text-green-500">FoodUnityHub</button>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navlinks
                        }
                    </ul>
                </div>
                
                <div className="navbar-end">
                    
                    <div className="mr-3 text-black">
                        {user && (
                            <div className="flex items-center">
                                <img
                                    src={user.photoURL}
                                    className="w-6 h-6 mr-2"
                                   
                                />
                                <p>{user.displayName}</p>
                            </div>
                        )}
                    </div>
                    {
                        user ?
                            <button onClick={handleLogout} className="btn">Logout</button>
                            :
                            <Link to='/login'> <button className="btn">Login</button> </Link>
                    }







                </div>
            </div>
        </div>
    );
};

export default Navbar;