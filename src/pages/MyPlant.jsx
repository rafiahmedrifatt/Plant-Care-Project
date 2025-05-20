import React from 'react';
import { Link, useLoaderData } from 'react-router';

const MyPlant = () => {
    const myPlantsData = useLoaderData()
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Next Watering Date</th>
                        <th>Last Watered Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myPlantsData.map(plant => <tr key={plant._id}>
                            <td >
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={plant.photo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{plant.plantName}</div>
                                        <div className="text-sm opacity-50">{plant.category}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {plant.nextWateringDate}
                            </td>
                            <td>{plant.lastWateredDate}</td>
                            <th>
                                <Link to={`/update/${plant._id}`} className="btn btn-ghost btn-xs">Update</Link>
                                <button className="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyPlant;