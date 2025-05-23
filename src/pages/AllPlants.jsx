import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const AllPlants = () => {
    const plantsData = useLoaderData();
    const [plants, setPlants] = useState(plantsData)
    const handleSelect = () => {
        const id = document.getElementById("select")
        console.log(typeof id?.value);
        fetch(`https://plant-care-server-kappa.vercel.app/plants/${parseFloat(id?.value)}`)
            .then(res => res.json())
            .then(data => setPlants(data))

    }


    return (
        <div className="overflow-x-auto md:w-[70vw] mx-auto my-10">
            <select onChange={handleSelect} id='select' type="text" className="select w-50 md:my-10" name='category'>
                <option>Sort</option>
                <option value="1">Easy to Intense</option>
                <option value="-1">Intense to Easy</option>
            </select>
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
                        plants.map((plant, index) =>
                            <tr key={plant._id}>
                                <td>{index + 1}</td>
                                <td>{plant.plantName}</td>
                                <td>{plant.category}</td>
                                <td>{plant.waterFrequency}</td>
                                <td>{plant.careLevel === '1' ? "Easy" : (plant.careLevel === '2' ? "Moderate" : (plant.careLevel === "3" ? "Intense" : ""))}</td>
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