import { Link } from "react-router-dom";
import Banner from "./Banner";
import FeaturedFoods from "./FeaturedFoods/FeaturedFoods";

import PageTitle from "../../SharedComponent/PageTitle";


const Home = () => {
    return (
        <div>
            <PageTitle title="TableTrove | Home"></PageTitle>
            <Banner></Banner>
            
            <FeaturedFoods></FeaturedFoods>

            <Link to="/availableFoods"><button className="btn btn-primary">Show all</button></Link>
        </div>
    );
};

export default Home;