import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="bg-white text-center pt-[100px]">
            {/* <h2 className="text-[40px] text-red-500 font-bold ">Oops! 404 not found</h2> */}
            <img className="w-[700px] h-[500px] ml-[400px]" src="https://i.ibb.co/pf5qb2K/Na-Nov-26.jpg" alt="" />
        </div>
        <Link to='/' className="btn btn-primary mt-6 mx-[710px]"><button>Go to home</button></Link>
        </div>
    );
};

export default ErrorPage;