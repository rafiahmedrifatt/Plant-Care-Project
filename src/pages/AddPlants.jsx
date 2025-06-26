import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { Leaf, Camera, Calendar, Droplets, Heart, User, Mail, Plus } from 'lucide-react';

const AddPlants = () => {
    const { user } = use(AuthContext)
    console.log(user?.email);

    const handlePlantSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const objFormData = Object.fromEntries(formData.entries())
        console.log(objFormData);
        fetch("https://plant-care-server-kappa.vercel.app/plants", {
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
        <div className="max-w-2xl mx-auto p-4 md:p-6">
            {/* Header */}
            <div className="mb-8 text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
                    <Plus className="text-green-500" />
                    Add New Plant
                </h1>
                <p className="text-gray-600">Add a new plant to your collection and start tracking its care</p>
            </div>

            {/* Form */}
            <form onSubmit={handlePlantSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8 space-y-6">
                {/* Plant Information Section */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 pb-2 border-b border-gray-200">
                        <Leaf className="w-5 h-5 text-green-500" />
                        Plant Information
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                                <Camera className="w-4 h-4" />
                                Image URL
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                name='photo'
                                placeholder="Enter image URL for your plant"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Plant Name</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                name='plantName'
                                placeholder="e.g. Snake Plant"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                            <select
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                name='category'
                            >
                                <option disabled={true}>Pick a Category</option>
                                <option value="succulent">Succulent</option>
                                <option value="fern">Fern</option>
                                <option value="flowering">Flowering</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <input
                                type="text"
                                placeholder="Brief description of your plant"
                                name='description'
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                            />
                        </div>
                    </div>
                </div>

                {/* Care Schedule Section */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 pb-2 border-b border-gray-200">
                        <Calendar className="w-5 h-5 text-blue-500" />
                        Care Schedule
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Last Watered Date</label>
                            <input
                                type="date"
                                name='lastWateredDate'
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Next Watering Date</label>
                            <input
                                type="date"
                                name='nextWateringDate'
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Care Level</label>
                            <select
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                name='careLevel'
                            >
                                <option disabled={true}>Select Care Level</option>
                                <option value="1">Easy</option>
                                <option value="2">Moderate</option>
                                <option value="3">Regular</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                                <Droplets className="w-4 h-4" />
                                Water Frequency
                            </label>
                            <select
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                name='waterFrequency'
                            >
                                <option disabled={true}>Select Water Frequency</option>
                                <option value="everyday">Everyday</option>
                                <option value="every 2 days">Every 2 days</option>
                                <option value="every 3 days">Every 3 days</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                                <Heart className="w-4 h-4" />
                                Health Status
                            </label>
                            <input
                                type="text"
                                name='health'
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                placeholder="e.g. Healthy, Needs attention, Thriving"
                            />
                        </div>
                    </div>
                </div>

                {/* Owner Information Section */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 pb-2 border-b border-gray-200">
                        <User className="w-5 h-5 text-purple-500" />
                        Owner Information
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                                <Mail className="w-4 h-4" />
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
                                name='email'
                                value={user?.email || ''}
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                name='name'
                                defaultValue={user?.displayName || ''}
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <button
                        type='submit'
                        className='w-full md:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center gap-2'
                    >
                        <Plus className="w-5 h-5" />
                        Add Plant to Collection
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPlants;