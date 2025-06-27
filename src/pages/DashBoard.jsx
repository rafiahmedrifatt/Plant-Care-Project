import React, { use } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { AuthContext } from '../context/AuthContext';


const DashBoard = () => {
    const { user } = use(AuthContext);
    console.log(user);

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col">
                {/* Main Content */}
                <div className="flex-1 bg-gray-50">
                    <Outlet />
                </div>
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                <div className="bg-white min-h-full w-80 shadow-xl">
                    {/* Logo Section */}
                    <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-emerald-50">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
                                <p className="text-sm text-gray-600">Management System</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <ul className="menu p-6 space-y-2">
                        <NavLink
                            to="/dashboard"
                            end
                            className={({ isActive }) =>
                                `flex items-center space-x-3 p-4 rounded-xl group w-80 transition-all duration-300 ${isActive
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 hover:text-white'
                                }`
                            }
                        >
                            <span className="font-medium group-hover:text-white">Dashboard</span>
                        </NavLink>

                        <NavLink
                            to="/dashboard/plants"
                            className={({ isActive }) =>
                                `flex items-center space-x-3 p-4 rounded-xl group w-80 transition-all duration-300 ${isActive
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 hover:text-white'
                                }`
                            }
                        >
                            <span className="font-medium group-hover:text-white">All Plants</span>
                        </NavLink>

                        <NavLink
                            to="/dashboard/addPlants"
                            className={({ isActive }) =>
                                `flex items-center space-x-3 p-4 rounded-xl group w-80 transition-all duration-300 ${isActive
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 hover:text-white'
                                }`
                            }
                        >
                            <span className="font-medium group-hover:text-white">Add Plants</span>
                        </NavLink>

                        <NavLink
                            to={`/dashboard/myPlants/${user?.email}`}
                            className={({ isActive }) =>
                                `flex items-center space-x-3 p-4 rounded-xl group w-80 transition-all duration-300 ${isActive
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 hover:text-white'
                                }`
                            }
                        >
                            <span className="font-medium group-hover:text-white">My Plants</span>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;