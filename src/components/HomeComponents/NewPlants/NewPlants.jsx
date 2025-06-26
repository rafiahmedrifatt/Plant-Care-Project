import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { Eye, User, Heart, Leaf } from 'lucide-react';


const NewPlants = ({ dataPromise }) => {
    const newTreesData = use(dataPromise)
    const [plants, setPlants] = useState(newTreesData)
    if (plants.length > 6) {
        const slicedPlants = plants.slice(0, 6)
        setPlants(slicedPlants)
    }
    return (
        <>
            <h1 className='text-4Zxl text-center font-bold mb-10 -mt-10'>New Trees</h1>
            <div className='w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    plants.map(data =>
                        <div key={data._id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                            {/* Gradient overlay for visual depth */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            <div className="md:flex">
                                {/* Image Section */}
                                <div className="relative md:w-48 h-48 md:h-auto overflow-hidden">
                                    <img
                                        src={data.photo}
                                        alt={data.plantName || "Plant image"}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Image overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 p-6">
                                    {/* Header */}
                                    <div className="mb-4">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-200">
                                                {data.plantName}
                                            </h3>
                                            <Leaf className="w-5 h-5 text-green-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                                        </div>

                                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 font-medium">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                {data.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center text-gray-600">
                                            <User className="w-4 h-4 mr-2 text-gray-400" />
                                            <span className="text-sm">
                                                Added by <span className="font-medium text-gray-900">{data.name || 'Rafi Ahmed Rifat'}</span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <div className="flex items-center justify-between">
                                        <a
                                            href={`plant/${data._id}`}
                                            className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-green-700 hover:to-emerald-700 transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                            aria-label={`View details for ${data.plantName}`}
                                        >
                                            <Eye className="w-4 h-4 mr-2" />
                                            View Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </>
    );
};

export default NewPlants;