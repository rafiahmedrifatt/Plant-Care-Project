import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllPlants = () => {
    const plantsData = useLoaderData()

    return (
        <div className="overflow-x-auto w-[70vw] mx-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Plant Name</th>
                        <th>Category</th>
                        <th>Watering Frequency</th>
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
                                <td>Blue</td>
                                <td><Link to={`/plant/${plant._id}`} className='btn btn-accent w-full'>Details</Link></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllPlants;