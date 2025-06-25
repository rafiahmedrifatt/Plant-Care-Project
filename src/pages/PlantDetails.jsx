import React from 'react';
import { useLoaderData } from 'react-router';

const PlantDetails = () => {
    const { category, description, health, lastWateredDate, name, nextWateringDate, photo, plantName, _id } = useLoaderData()
    return (
        <div className="card lg:card-side bg-gradient-to-br from-green-50 to-emerald-50 w-10/12 xl:w-8/12 mx-auto min-h-[70vh] my-20 shadow-2xl border border-green-100 overflow-hidden hover:shadow-3xl transition-all duration-300">
            <figure className="lg:w-1/2 relative overflow-hidden">
                <img
                    src={photo}
                    alt={plantName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-5 -right-5">
                    <div className={`badge ${health === 'Healthy' ? 'badge-success' : health === 'Moderate' ? 'badge-warning' : 'badge-error'} badge-lg font-semibold`}>
                        {health}
                    </div>
                </div>
            </figure>

            <div className="card-body lg:w-1/2 p-8 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h2 className="card-title text-3xl font-bold text-gray-800 leading-tight">
                        {plantName}
                    </h2>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                        <span className="text-green-600 font-semibold">🌿 Category:</span>
                        <span className="text-gray-700 font-medium">{category}</span>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h3 className="font-semibold text-blue-800 mb-2">📝 Description</h3>
                        <p className="text-gray-700 leading-relaxed">{description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-amber-600">💧</span>
                                <span className="font-semibold text-amber-800">Last Watered</span>
                            </div>
                            <p className="text-gray-700 text-sm">{lastWateredDate}</p>
                        </div>

                        <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-cyan-600">⏰</span>
                                <span className="font-semibold text-cyan-800">Next Watering</span>
                            </div>
                            <p className="text-gray-700 text-sm">{nextWateringDate}</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200 mt-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                                <span className="text-purple-600 font-bold">👤</span>
                            </div>
                            <div>
                                <p className="text-sm text-purple-600 font-medium">Plant Owner</p>
                                <p className="font-semibold text-purple-800">{name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails;


