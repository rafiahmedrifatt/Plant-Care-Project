import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { Droplets, Leaf, ArrowUpDown } from 'lucide-react';

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

    const getCareLevel = (level) => {
        switch (level) {
            case '1': return { text: 'Easy', color: 'text-green-600 bg-green-50' };
            case '2': return { text: 'Moderate', color: 'text-yellow-600 bg-yellow-50' };
            case '3': return { text: 'Intense', color: 'text-red-600 bg-red-50' };
            default: return { text: '', color: '' };
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6">
            {/* Header */}
            <div className="mb-6 text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
                    <Leaf className="text-green-500" />
                    Plant Care Guide
                </h1>
                <p className="text-gray-600">Manage and track your plant care routine</p>
            </div>

            {/* Sort Controls */}
            <div className="mb-6 flex justify-center">
                <div className="relative">
                    <select
                        onChange={handleSelect}
                        id='select'
                        type="text"
                        className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 cursor-pointer min-w-48"
                        name='category'
                    >
                        <option>Sort</option>
                        <option value="1">Easy to Intense</option>
                        <option value="-1">Intense to Easy</option>
                    </select>
                    <ArrowUpDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plant Name</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <div className="flex items-center gap-1">
                                    <Droplets className="w-4 h-4" />
                                    Watering Frequency
                                </div>
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Care Level</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            plants.map((plant, index) => {
                                const careLevel = getCareLevel(plant.careLevel);
                                return (
                                    <tr key={plant._id} className="hover:bg-gray-50 transition-colors duration-150">
                                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 font-medium">
                                            {index + 1}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{plant.plantName}</div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {plant.category}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {plant.waterFrequency}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${careLevel.color}`}>
                                                {plant.careLevel === '1' ? "Easy" : (plant.careLevel === '2' ? "Moderate" : (plant.careLevel === "3" ? "Intense" : ""))}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <Link
                                                to={`/plant/${plant._id}`}
                                                className='inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-150 w-full justify-center'
                                            >
                                                View Details
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>

            {/* Footer Info */}
            <div className="mt-6 text-center text-sm text-gray-500">
                Showing {plants.length} plants • Keep your green friends happy! 🌱
            </div>
        </div>
    );
};

export default AllPlants;