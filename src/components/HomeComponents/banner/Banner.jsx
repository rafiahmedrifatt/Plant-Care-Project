import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full h-[90vh] text-white">


            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full bg-[url(https://i.postimg.cc/BvZ2X45t/freddie-marriage-Ucf-KYTan-LU-unsplash.jpg)] bg-cover bg-center h-[75vh]">
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center z-10">
                    <a href="#slide4" className="btn btn-circle text-white">❮</a>
                    <div className='w-[50%] text-center flex flex-col gap-4'>
                        <h1 className='text-5xl font-extrabold drop-shadow-2xl leading-tight'>
                            Your Garden's Smartest Companion
                        </h1>
                        <p className='text-lg leading-relaxed drop-shadow-lg bg-black/20 px-6 py-4 rounded-lg'>
                            Monitor plant health in real time, receive expert-backed care advice, and explore a wide range of plant species to grow a thriving, vibrant green space.
                        </p>
                    </div>
                    <a href="#slide2" className="btn btn-circle text-white">❯</a>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full bg-[url(https://i.postimg.cc/t70gPtL2/vadim-kaipov-8-ZELrod-Sv-Tc-unsplash.jpg)] bg-cover bg-center h-[75vh]">
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center z-10">
                    <a href="#slide1" className="btn btn-circle text-white">❮</a>
                    <div className='w-[50%] text-center flex flex-col gap-4'>
                        <h1 className='text-5xl font-extrabold drop-shadow-2xl leading-tight'>
                            Healthy Plants, Happy Spaces
                        </h1>
                        <p className='text-lg leading-relaxed drop-shadow-lg bg-black/20 px-6 py-4 rounded-lg'>
                            From spotting early signs of disease to recommending the perfect plant variety for your lifestyle—our tracker keeps your plants flourishing and your home lush.
                        </p>
                    </div>
                    <a href="#slide3" className="btn btn-circle text-white">❯</a>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full bg-[url(https://i.postimg.cc/TPTpC0hs/chris-lawton-cfl3-Fij-Ygl-M-unsplash.jpg)] bg-cover bg-center h-[75vh]">
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center z-10">
                    <a href="#slide2" className="btn btn-circle text-white">❮</a>
                    <div className='w-[50%] text-center flex flex-col gap-4'>
                        <h1 className='text-5xl font-extrabold drop-shadow-2xl leading-tight'>
                            From Soil to Bloom
                        </h1>
                        <p className='text-lg leading-relaxed drop-shadow-lg bg-black/20 px-6 py-4 rounded-lg'>
                            Track every stage of your plant's journey. bg-cover ideal plant types, monitor growth, and follow custom care plans for a flourishing home garden.
                        </p>
                    </div>
                    <a href="#slide4" className="btn btn-circle text-white">❯</a>
                </div>
            </div>

            {/* Slide 4 */}
            <div id="slide4" className="carousel-item relative w-full bg-[url(https://i.postimg.cc/zXSLW4Gh/priscilla-du-preez-JCZ2p-E-Szpw-unsplash.jpg)] bg-cover bg-center h-[75vh]">
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center z-10">
                    <a href="#slide3" className="btn btn-circle text-white">❮</a>
                    <div className='w-[50%] text-center flex flex-col gap-4'>
                        <h1 className='text-5xl font-extrabold drop-shadow-2xl leading-tight'>
                            Grow Green, Stay Clean
                        </h1>
                        <p className='text-lg leading-relaxed drop-shadow-lg bg-black/20 px-6 py-4 rounded-lg'>
                            Track your plant's health with precision. Get personalized care tips, water schedules, and bg-cover the best varieties for your environment—all in one smart tool.
                        </p>
                    </div>
                    <a href="#slide1" className="btn btn-circle text-white">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;