

const Banner = () => {
    return (

        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/6sTP4hM/f-1.jpg" className="w-full " />
                <div className="absolute rounded-xl lg:flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Delicious Dining, Unbeatable Prices</h2>
                        <p>Indulge in a culinary experience like no other at our restaurant. We offer a diverse menu with the finest ingredients, prepared by our talented chefs. Savor every bite and make every meal memorable.</p>
                        <div className="mt-4">
                            <button className="btn btn-secondary mr-5">Explore Our Menu</button>

                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/3r97tcs/f-2.jpg" className="w-full " />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Delicious Dining, Unbeatable Prices</h2>
                        <p>Indulge in a culinary experience like no other at our restaurant. We offer a diverse menu with the finest ingredients, prepared by our talented chefs. Savor every bite and make every meal memorable.</p>
                        <div className="mt-4">
                            <button className="btn btn-secondary mr-5">Explore Our Menu</button>

                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/k6CQdkj/f-4.jpg" className="w-full " />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Delicious Dining, Unbeatable Prices</h2>
                        <p>Indulge in a culinary experience like no other at our restaurant. We offer a diverse menu with the finest ingredients, prepared by our talented chefs. Savor every bite and make every meal memorable.</p>
                        <div className="mt-4">
                            <button className="btn btn-secondary mr-5">Explore Our Menu</button>

                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/800b1FB/f-6.jpg" className="w-full " />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Delicious Dining, Unbeatable Prices</h2>
                        <p>Indulge in a culinary experience like no other at our restaurant. We offer a diverse menu with the finest ingredients, prepared by our talented chefs. Savor every bite and make every meal memorable.</p>
                        <div className="mt-4">
                            <button className="btn btn-secondary mr-5">Explore Our Menu</button>

                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

    );
};

export default Banner;