import { Link } from "react-router-dom";
import Banner from "./Banner";
import FeaturedFoods from "./FeaturedFoods/FeaturedFoods";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <FeaturedFoods></FeaturedFoods>

            <Link to="/availableFoods"><button className="btn btn-primary">Show all</button></Link>
        </div>
    );
};

export default Home;