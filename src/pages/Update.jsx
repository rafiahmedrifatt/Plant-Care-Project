import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Update = () => {
    const { category, description, health, lastWateredDate, careLevel, nextWateringDate, photo, plantName, _id } = useLoaderData()
    console.log(category);
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const dataObj = Object.fromEntries(formData.entries())

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, update it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/update/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataObj)
                })
                    .then(res => res.json())
                    .then(data => {
                        e.target.reset()
                        if (data.modifiedCount == 1) {
                            swalWithBootstrapButtons.fire({
                                title: "Updated!",
                                text: "Your file has been updated.",
                                icon: "success"
                            });
                        }
                    })

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your file is not updated!)",
                    icon: "error"
                });
            }
        });
    }
    return (
        <form onSubmit={handleSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4 mx-auto">
            <legend className="fieldset-legend text-xl">Update Plants</legend>

            <label className="label">Image URL</label>
            <input type="text" className="input w-full" name='photo' defaultValue={photo} placeholder="My awesome page" />

            <label className="label">Plant Name</label>
            <input type="text" className="input w-full" name='plantName' placeholder='Plants Name' defaultValue={plantName} />

            <label className="label">Category</label>
            <select type="text" className="select w-full" name='category' defaultValue={category} placeholder="Category" list="browsers" >
                <option disabled={true}>Pick a Category</option>
                <option value="succulent">Succulent</option>
                <option value="fern">Fern</option>
                <option value="flowering">Flowering</option>
            </select>

            <label className="label">Description</label>
            <input type="text" placeholder="Description" defaultValue={description} name='description' className="input w-full" />

            <label className="label">Last Watered Date</label>
            <input type="date" name='lastWateredDate' defaultValue={lastWateredDate} className="input w-full" />

            <label className="label">Next Watering Date</label>
            <input type="date" name='nextWateringDate' defaultValue={nextWateringDate} className="input w-full" />

            <label className="label">Care Level</label>
            <select type="text" defaultValue={careLevel} className="select w-full" name='careLevel' placeholder="Category" list="browsers" >
                <option disabled={true}>Select Care Level</option>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="regular">Regular</option>
            </select>

            <label className="label">Health Status</label>
            <input type="text" name='health' defaultValue={health} className="input w-full" placeholder="Health Status" />

            <button type='submit' className='btn btn-primary mt-5'>Update Plant</button>
        </form>
    );
};

export default Update;