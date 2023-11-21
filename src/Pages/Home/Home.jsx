
import Banner from "./Banner";


import PageTitle from "../../SharedComponent/PageTitle";
import TopFood from "./TopFood";
import About from "./About";
import Team from "./Team";


const Home = () => {
    return (
        <div>
            <PageTitle title="TableTrove | Home"></PageTitle>
            <Banner></Banner>
            <TopFood></TopFood>
            
            <About></About>
            
            <Team></Team>
            
            

            
        </div>
    );
};

export default Home;