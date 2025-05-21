import React from 'react';
import Lottie from "lottie-react";
import loader from "./loader.json"

const Loader = () => {
    return <Lottie animationData={loader} loop={true} className='flex justify-center items-center h-[100vh] w-[100vw]' />;;
};

export default Loader;