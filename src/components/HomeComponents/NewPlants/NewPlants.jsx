import React, { use, useState } from 'react';
import { Link } from 'react-router';

const NewPlants = ({ dataPromise }) => {
    const newTreesData = use(dataPromise)
    const [plants, setPlants] = useState(newTreesData)
    if (plants.length > 6) {
        const slicedPlants = plants.slice(0, 6)
        setPlants(slicedPlants)
    }
    console.log(plants);
    return (
        <>
            <h1 className='text-2xl text-center font-bold my-10'>New Trees</h1>
            <div className='w-8/12 mx-auto grid grid-cols-2 gap-10'>
                {
                    plants.map(data =>
                        <div key={data._id} className="card card-side bg-base-100 shadow-sm">
                            <figure className='w-[50%]'>
                                <img
                                    src={data.photo}
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.plantName}</h2>
                                <p>{data.category}</p>
                                <p>{data.lastWateredDate}</p>
                                <p>{data.nextWateringDate}</p>
                                <p>{data.health}</p>
                                <Link to={`plant/${data._id}`}>details</Link>
                            </div>
                        </div>)
                }
            </div>
        </>
    );
};

export default NewPlants;