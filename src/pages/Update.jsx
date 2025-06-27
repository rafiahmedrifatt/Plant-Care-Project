import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Update = () => {
    const { category, description, health, lastWateredDate, careLevel, waterFrequency, nextWateringDate, photo, plantName, _id } = useLoaderData()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formElement = e.target;
        const formData = new FormData(formElement)
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
                fetch(`https://plant-care-server-kappa.vercel.app/update/${_id}`, {
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
                                text: "Your plant has been updated successfully.",
                                icon: "success"
                            });
                        }
                    })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your plant information was not updated.",
                    icon: "error"
                });
            }
        });
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
                        <span className="text-green-500">🌱</span>
                        Update Plant
                    </h1>
                    <p className="text-gray-600">Modify your plant's information and care details</p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                    <div onSubmit={handleSubmit} className="space-y-6">
                        {/* Plant Image Section */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <span>📸</span>
                                Plant Image URL
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                name='photo'
                                defaultValue={photo}
                                placeholder="Enter image URL"
                            />
                        </div>

                        {/* Plant Name Section */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <span>🏷️</span>
                                Plant Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                name='plantName'
                                placeholder='Enter plant name'
                                defaultValue={plantName}
                            />
                        </div>

                        {/* Category and Care Level Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    <span>🌿</span>
                                    Category
                                </label>
                                <select
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white"
                                    name='category'
                                    defaultValue={category}
                                >
                                    <option disabled>Pick a Category</option>
                                    <option value="succulent">Succulent</option>
                                    <option value="fern">Fern</option>
                                    <option value="flowering">Flowering</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    <span>⭐</span>
                                    Care Level
                                </label>
                                <select
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white"
                                    name='careLevel'
                                    defaultValue={careLevel}
                                >
                                    <option disabled>Select Care Level</option>
                                    <option value="1">🟢 Easy</option>
                                    <option value="2">🟡 Moderate</option>
                                    <option value="3">🔴 Regular</option>
                                </select>
                            </div>
                        </div>

                        {/* Description Section */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <span>📝</span>
                                Description
                            </label>
                            <textarea
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none h-24"
                                placeholder="Describe your plant..."
                                defaultValue={description}
                                name='description'
                            />
                        </div>

                        {/* Watering Schedule Section */}
                        <div className="border-t pt-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <span>💧</span>
                                Watering Schedule
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Last Watered Date
                                    </label>
                                    <input
                                        type="date"
                                        name='lastWateredDate'
                                        defaultValue={lastWateredDate}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Next Watering Date
                                    </label>
                                    <input
                                        type="date"
                                        name='nextWateringDate'
                                        defaultValue={nextWateringDate}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 mt-4">
                                <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    <span>🔄</span>
                                    Water Frequency
                                </label>
                                <select
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white"
                                    name='waterFrequency'
                                    defaultValue={waterFrequency}
                                >
                                    <option disabled>Select Water Frequency</option>
                                    <option value="everyday">💧 Everyday</option>
                                    <option value="every 2 days">💧💧 Every 2 days</option>
                                    <option value="every 3 days">💧💧💧 Every 3 days</option>
                                </select>
                            </div>
                        </div>

                        {/* Health Status Section */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <span>🌡️</span>
                                Health Status
                            </label>
                            <input
                                type="text"
                                name='health'
                                defaultValue={health}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                placeholder="e.g., Healthy, Needs attention, Thriving"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type='submit'
                                className='w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-lg'
                                onClick={handleSubmit}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                                Update Plant Information
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="text-center mt-6">
                    <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                        <span>💡</span>
                        Make sure all information is accurate before updating
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Update;