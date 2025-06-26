import React, { useState } from 'react';
import { Leaf, TreePine, Flower, Sprout, Trash2, Edit, Eye } from 'lucide-react';

const PlantsDashboard = () => {
    // Demo data - replace with your API call
    const [plants, setPlantsData] = useState([
        {
            id: 1,
            name: 'Monstera Deliciosa',
            category: 'Indoor',
            type: 'Tropical',
            price: '$25.99',
            stock: 15,
            status: 'Available',
            dateAdded: '2024-01-15'
        },
        {
            id: 2,
            name: 'Snake Plant',
            category: 'Indoor',
            type: 'Succulent',
            price: '$18.50',
            stock: 23,
            status: 'Available',
            dateAdded: '2024-01-20'
        },
        {
            id: 3,
            name: 'Peace Lily',
            category: 'Indoor',
            type: 'Flowering',
            price: '$22.00',
            stock: 8,
            status: 'Low Stock',
            dateAdded: '2024-01-22'
        },
        {
            id: 4,
            name: 'Rose Bush',
            category: 'Outdoor',
            type: 'Flowering',
            price: '$35.99',
            stock: 12,
            status: 'Available',
            dateAdded: '2024-01-25'
        },
        {
            id: 5,
            name: 'Lavender',
            category: 'Outdoor',
            type: 'Herb',
            price: '$16.75',
            stock: 0,
            status: 'Out of Stock',
            dateAdded: '2024-01-28'
        },
        {
            id: 6,
            name: 'Basil',
            category: 'Herb',
            type: 'Culinary',
            price: '$12.99',
            stock: 30,
            status: 'Available',
            dateAdded: '2024-02-01'
        },
        {
            id: 7,
            name: 'Fiddle Leaf Fig',
            category: 'Indoor',
            type: 'Tree',
            price: '$45.00',
            stock: 5,
            status: 'Low Stock',
            dateAdded: '2024-02-03'
        },
        {
            id: 8,
            name: 'Aloe Vera',
            category: 'Indoor',
            type: 'Succulent',
            price: '$14.99',
            stock: 18,
            status: 'Available',
            dateAdded: '2024-02-05'
        }
    ]);

    // Calculate stats from the data
    const totalPlants = plants.length;
    const availablePlants = plants.filter(p => p.status === 'Available').length;
    const lowStockPlants = plants.filter(p => p.status === 'Low Stock').length;
    const outOfStockPlants = plants.filter(p => p.status === 'Out of Stock').length;

    const handleDelete = (plantId) => {
        if (window.confirm('Are you sure you want to delete this plant?')) {
            setPlantsData(plants.filter(plant => plant.id !== plantId));
        }
    };

    const StatBox = ({ title, value, icon, color, bgColor }) => (
        <div className={`${bgColor} rounded-lg p-6 shadow-sm border border-gray-200`}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
                    <p className="text-2xl font-bold text-gray-900">{value}</p>
                </div>
                <div className={`${color} p-3 rounded-full`}>
                    <icon className="w-6 h-6 text-white" />
                </div>
            </div>
        </div>
    );

    const getStatusBadge = (status) => {
        const statusStyles = {
            'Available': 'bg-green-100 text-green-800',
            'Low Stock': 'bg-yellow-100 text-yellow-800',
            'Out of Stock': 'bg-red-100 text-red-800'
        };

        return (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
                {status}
            </span>
        );
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Plants Dashboard</h1>
                <p className="text-gray-600">Manage your plant inventory</p>
            </div>

            {/* Stats Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatBox
                    title="Total Plants"
                    value={totalPlants}
                    icon={Leaf}
                    color="bg-green-500"
                    bgColor="bg-white"
                />
                <StatBox
                    title="Available"
                    value={availablePlants}
                    icon={Sprout}
                    color="bg-blue-500"
                    bgColor="bg-white"
                />
                <StatBox
                    title="Low Stock"
                    value={lowStockPlants}
                    icon={TreePine}
                    color="bg-yellow-500"
                    bgColor="bg-white"
                />
                <StatBox
                    title="Out of Stock"
                    value={outOfStockPlants}
                    icon={Flower}
                    color="bg-red-500"
                    bgColor="bg-white"
                />
            </div>

            {/* Plants Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">All Plants</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Plant Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Category
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Type
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Stock
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date Added
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {plants.map((plant) => (
                                <tr key={plant.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                                <Leaf className="w-4 h-4 text-green-600" />
                                            </div>
                                            <div className="text-sm font-medium text-gray-900">{plant.name}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {plant.category}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {plant.type}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                                        {plant.price}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {plant.stock}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {getStatusBadge(plant.status)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {new Date(plant.dateAdded).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex items-center space-x-2">
                                            <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="text-gray-600 hover:text-gray-900 p-1 rounded">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(plant.id)}
                                                className="text-red-600 hover:text-red-900 p-1 rounded"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {plants.length === 0 && (
                    <div className="text-center py-12">
                        <Leaf className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No plants found</h3>
                        <p className="text-gray-600">Get started by adding your first plant.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlantsDashboard;