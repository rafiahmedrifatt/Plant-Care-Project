import React from 'react';

const AddPlants = () => {
    const handlePlantSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const objFormData = Object.fromEntries(formData.entries())
        fetch("http://localhost:3000/plants", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objFormData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <form onSubmit={handlePlantSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4 mx-auto">
            <legend className="fieldset-legend">ADD PLANTS</legend>

            <label className="label">Image URL</label>
            <input type="text" className="input w-full" name='photo' placeholder="My awesome page" />

            <label className="label">Plant Name</label>
            <input type="text" className="input w-full" name='plantName' placeholder="my-awesome-page" />

            <label className="label">Category</label>
            <input type="text" className="input w-full" name='category' placeholder="Category" list="browsers" />
            <datalist id="browsers">
                <option value="succulent"></option>
                <option value="fern"></option>
                <option value="flowering"></option>
            </datalist>

            <label className="label">Description</label>
            <input type="text" placeholder="Description" name='description' className="input w-full" />

            <label className="label">Last Watered Date</label>
            <input type="date" name='lastWateredDate' className="input w-full" />

            <label className="label">Next Watering Date</label>
            <input type="date" name='nextWateringDate' className="input w-full" />

            <label className="label">Health Status</label>
            <input type="text" name='health' className="input w-full" placeholder="Health Status" />

            <label className="label" >Email</label>
            <input type="email" className="input w-full" name='email' value="rafiahmed0471@gmail.com" readOnly />

            <label className="label" >Name</label>
            <input type="text" className="input w-full" name='name' value="rafi ahmed rifat" readOnly />

            <button type='submit' className='btn btn-primary mt-5'>Add Plant</button>
        </form>
    );
};

export default AddPlants;