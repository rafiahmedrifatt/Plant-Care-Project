import React from 'react';
import { useLoaderData } from 'react-router';

const Update = () => {
    const { category, description, health, lastWateredDate, nextWateringDate, photo, plantName, _id } = useLoaderData()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const dataObj = Object.fromEntries(formData.entries())
        fetch(`http://localhost:3000/update/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataObj)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <form onSubmit={handleSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4 mx-auto">
            <legend className="fieldset-legend text-xl">Update Plants</legend>

            <label className="label">Image URL</label>
            <input type="text" className="input w-full" name='photo' defaultValue={photo} placeholder="My awesome page" />

            <label className="label">Plant Name</label>
            <input type="text" className="input w-full" name='plantName' placeholder='Plants Name' defaultValue={plantName} />

            <label className="label">Category</label>
            <input type="text" className="input w-full" defaultValue={category} name='category' placeholder="Category" list="browsers" />
            <datalist id="browsers">
                <option value="succulent">succulent</option>
                <option value="fern">fern</option>
                <option value="flowering">flowering</option>
            </datalist>

            <label className="label">Description</label>
            <input type="text" placeholder="Description" defaultValue={description} name='description' className="input w-full" />

            <label className="label">Last Watered Date</label>
            <input type="date" name='lastWateredDate' defaultValue={lastWateredDate} className="input w-full" />

            <label className="label">Next Watering Date</label>
            <input type="date" name='nextWateringDate' defaultValue={nextWateringDate} className="input w-full" />

            <label className="label">Health Status</label>
            <input type="text" name='health' defaultValue={health} className="input w-full" placeholder="Health Status" />

            <button type='submit' className='btn btn-primary mt-5'>Update Plant</button>
        </form>
    );
};

export default Update;