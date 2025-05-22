import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const AddPlants = () => {
    const { user } = use(AuthContext)
    console.log(user?.email);
    const handlePlantSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const objFormData = Object.fromEntries(formData.entries())
        console.log(objFormData);
        fetch("http://localhost:3000/plants", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objFormData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    e.target.reset()
                    Swal.fire({
                        title: "Good job!",
                        text: "You have added your plant!",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <form onSubmit={handlePlantSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-full md:w-lg border p-4 mx-auto my-10">
            <legend className="fieldset-legend">ADD PLANTS</legend>

            <label className="label">Image URL</label>
            <input type="text" className="input w-full" name='photo' placeholder="My awesome page" />

            <label className="label">Plant Name</label>
            <input type="text" className="input w-full" name='plantName' placeholder="my-awesome-page" />

            <label className="label">Category</label>
            <select type="text" className="select w-full" name='category' >
                <option disabled={true}>Pick a Category</option>
                <option value="succulent">Succulent</option>
                <option value="fern">Fern</option>
                <option value="flowering">Flowering</option>
            </select>

            <label className="label">Description</label>
            <input type="text" placeholder="Description" name='description' className="input w-full" />

            <label className="label">Last Watered Date</label>
            <input type="date" name='lastWateredDate' className="input w-full" />

            <label className="label">Next Watering Date</label>
            <input type="date" name='nextWateringDate' className="input w-full" />

            <label className="label">Care Level</label>
            <select type="text" defaultValue="Select Care Level" className="select w-full" name='careLevel' placeholder="Category" list="browsers" >
                <option disabled={true}>Select Care Level</option>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="regular">Regular</option>
            </select>

            <label className="label">Water Frequency</label>
            <select type="text" className="select w-full" name='waterFrequency' >
                <option disabled={true}>Select Water Frequency</option>
                <option value="everyday">Everyday</option>
                <option value="every 2 days">Every 2 days</option>
                <option value="every 3 days">Every 3 days</option>
            </select>

            <label className="label">Health Status</label>
            <input type="text" name='health' className="input w-full" placeholder="Health Status" />

            <label className="label" >Email</label>
            <input type="email" className="input w-full" name='email' value={user?.email} readOnly />

            <label className="label">Name</label>
            <input type="text" className="input w-full" name='name' defaultValue={user?.displayName} />

            <button type='submit' className='btn btn-primary mt-5'>Add Plant</button>
        </form>
    );
};

export default AddPlants;