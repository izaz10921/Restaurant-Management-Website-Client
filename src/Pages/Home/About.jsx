

const About = () => {
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src="https://i.ibb.co/zSGptxK/f-7.jpg" className="w-3/4 rounded-lg shadow-2xl" />
                    <img src="https://i.ibb.co/TcRBrkf/f-8.jpg" className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h3 className='text-3xl text-pink-500 font-bold'>About us</h3>
                    <h1 className="text-5xl font-bold">Crafting Culinary Excellence</h1>
                    <p className="py-3 pb-2">Indulge in a dining experience like no other at TableTrove. With a qualified team and years of experience, we bring you a menu crafted with passion and precision.</p>
                    <p className="py-6">Discover a world of flavors, where each dish tells a story and each bite is an adventure. Join us in our commitment to quality and let your taste buds explore a symphony of tastes and textures.</p>
                    <button className="btn btn-secondary">Explore more</button>
                </div>

            </div>
        </div>
    );
};

export default About;