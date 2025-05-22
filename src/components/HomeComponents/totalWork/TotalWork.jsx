import React from 'react';

const TotalWork = () => {
    return (
        <div className='bg-[url(https://i.postimg.cc/Y0wChZbn/jake-nackos-C2-PCa6-Dhl-YE-unsplash.jpg)] h-[65vh] bg-brightness-50 text-white'>
            <div className='flex flex-col md:flex-row items-end w-[65vw] mx-auto h-[60vh] justify-center'>
                <div className='mb-10'>
                    <p className='text-sm'>Our Facts</p>
                    <h1 className='text-3xl font-semibold md:w-[90%]'>We Provide Professional Suggestions for your beautiful gardens and landscape</h1>
                </div>
                <div className='grid grid-cols-4 gap-10 text-center'>
                    <div className='flex flex-col gap-1'>
                        <img src="https://i.postimg.cc/qRPBYRYZ/1.jpg" className='rounded-xl w-35' alt="" />
                        <h1 className='text-xl'>886</h1>
                        <p className='text-xs mb-5'>Project Completed</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <img src="https://i.postimg.cc/TYCM510M/2.jpg" className='rounded-xl w-25' alt="" />
                        <h1 className='text-xl'>132</h1>
                        <p className='text-xs mb-5'>Team Members</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <img src="https://i.postimg.cc/DyWdLYdv/3.jpg" className='rounded-xl w-25' alt="" />
                        <h1 className='text-xl'>206</h1>
                        <p className='text-xs mb-5'>Award Won</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <img src="https://i.postimg.cc/qBDxtdKD/4.jpg" className='rounded-xl w-25' alt="" />
                        <h1 className='text-xl'>19912</h1>
                        <p className='text-xs mb-5'>Satisfied Customer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalWork;