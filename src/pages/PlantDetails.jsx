import React from 'react';
import { useLoaderData } from 'react-router';

const PlantDetails = () => {
    const { category, description, health, lastWateredDate, name, nextWateringDate, photo, plantName, _id } = useLoaderData()
    return (
        <div className="card lg:card-side bg-base-100 w-8/12 mx-auto h-[70vh] my-20 shadow-2xl">
            <figure>
                <img
                    src={photo}
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Plant Name: {plantName}</h2>
                <p>Category: {category}</p>
                <p>Description: {description}</p>
                <p>Last Watered Date: {lastWateredDate}</p>
                <p>Next Watering Date: {nextWateringDate}</p>
                <p>Health: {health}</p>
                <p>Owner: {name}</p>

            </div>
        </div>
    );
};

export default PlantDetails;


