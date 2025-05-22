import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllPlants = () => {
    const plantsData = useLoaderData()

    return (
        <div className="overflow-x-auto md:w-[70vw] mx-auto my-10">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Plant Name</th>
                        <th>Category</th>
                        <th>Watering Frequency</th>
                        <th>Care Level</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        plantsData.map((plant, index) =>
                            <tr key={plant._id}>
                                <td>{index + 1}</td>
                                <td>{plant.plantName}</td>
                                <td>{plant.category}</td>
                                <td>{plant.waterFrequency}</td>
                                <td>{plant.careLevel}</td>
                                <td><Link to={`/plant/${plant._id}`} className='btn btn-success w-full'>Details</Link></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllPlants;