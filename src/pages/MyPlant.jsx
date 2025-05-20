import React from 'react';
import { useLoaderData } from 'react-router';

const MyPlant = () => {
    const myPlantsData = useLoaderData()
    console.log(myPlantsData);
    return (
        <div>
            <h1>this is myPlants</h1>
        </div>
    );
};

export default MyPlant;