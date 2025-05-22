import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const MyPlant = () => {
    const myPlantsData = useLoaderData()
    const [myPlants, setMyPlants] = useState(myPlantsData)
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/plant/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount == 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                        }
                    })
                const filteredPlant = myPlants.filter(plant => plant._id !== id);
                setMyPlants(filteredPlant)
            }
        });
    }
    return (
        <div className="overflow-x-auto my-10">
            <table className="table">
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
                        myPlants.map(plant => <tr key={plant._id}>
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
                                <button onClick={() => handleDelete(plant._id)} className="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyPlant;