import React, { use } from 'react';
import { User, Calendar, Mail, MapPin, Leaf, Plus } from 'lucide-react';
import DashBoard from '../../pages/DashBoard';
import { AuthContext } from '../../context/AuthContext';
import { format } from "date-fns";
import { useLoaderData } from 'react-router';

const DashBoardData = () => {
    const data = useLoaderData()
    console.log(data);
    const { user } = use(AuthContext)


    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
                <p className="text-gray-600">Your plant collection overview</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Total Plants Card */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Total Plants</p>
                            <p className="text-3xl font-bold text-green-600">{data.length}</p>
                            <p className="text-sm text-green-600 mt-1">Your entire collection</p>
                        </div>
                        <div className="p-3 bg-green-100 rounded-lg">
                            <Leaf className="w-8 h-8 text-green-600" />
                        </div>
                    </div>
                </div>

            </div>

            {/* User Info Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">User Information</h2>

                <div className="flex flex-col lg:flex-row items-start gap-6">
                    {/* Profile Picture */}
                    <div className="flex-shrink-0">
                        <img
                            src={user?.photoURL}
                            className="w-24 h-24 rounded-full object-cover border-4 border-gray-100"
                        />
                    </div>

                    {/* User Details */}
                    <div className="flex-1 space-y-4">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">{user?.displayName}</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 text-gray-600">
                                <Mail className="w-5 h-5" />
                                <span>{user?.email}</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-600">
                                <Calendar className="w-5 h-5" />
                                <span>Joined {format(Date(user?.metadata.creationTime), " dd MMM yyyy")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardData;