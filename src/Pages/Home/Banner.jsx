

const Banner = () => {
    return (

        <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/rsRLHRr/top-view-food-donation-with-copy-space.jpg)' }}>
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-green-500 font-bold">Help Us Fight Hunger</h1>
                    <p className="mb-5">Join us in our mission to eradicate hunger in our community. Your support can make a significant difference in the lives of those in need. Together, we can provide nourishing meals to families facing food insecurity.</p>
                    <button className="btn btn-success font-extrabold text-white">Donate Now</button>
                </div>

            </div>
        </div>

    );
};

export default Banner;