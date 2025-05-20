import React from 'react';
import { useLoaderData } from 'react-router';

const PlantDetails = () => {
    const { category, description, health, lastWateredDate, name, nextWateringDate, photo, plantName, _id } = useLoaderData()
    return (
        <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src={photo}
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{plantName}</h2>
                <p>{category}</p>
                <p>{description}</p>
                <p>{lastWateredDate}</p>
                <p>{nextWateringDate}</p>
                <p>{health}</p>
                <p>{name}</p>
            </div>
        </div>
    );
};

export default PlantDetails;


