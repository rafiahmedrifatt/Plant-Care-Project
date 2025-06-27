import React, { use, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    console.log(error);
    const { createUser, setLoading, update, google } = use(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const data = new FormData(form)
        const { name, email, password, photoUrl, } = Object.fromEntries(data.entries())
        const userDataForDB = { email, name, photoUrl }
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (password.length < 6) {
            setError('Password Needs to be more then 6 character')
            setLoading(false)
            return;
        } else if (!passwordRegex.test(password)) {
            setLoading(false)
            setError('Must contain uppercase, lowercase letters, and be at least 6 characters long')
            return;
        } else {
            setError("")
            createUser(email, password)
                .then(() => {
                    fetch('https://plant-care-server-kappa.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(userDataForDB)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                navigate("/")
                                update(name, photoUrl).then(() => {
                                    Swal.fire({
                                        icon: "success",
                                        title: "Success",
                                        text: "You have registered successfully",
                                    });
                                })
                            }
                        })
                })
                .catch(() => {
                    setLoading(false)
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Email Already in use!",
                    });
                })
        }
    }

    const handleGoogleSignup = () => {
        google().then(() => {
            setLoading(false)
            navigate('/')
        }).catch(() => {
            setLoading(false)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Google signup failed!",
            });
        })
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm lg:max-w-md p-6 sm:p-8">
                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
                    <p className="text-gray-600 text-sm">Join us to get started</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name='name'
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-sm"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name='email'
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-sm"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Photo URL Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Profile Photo URL
                        </label>
                        <input
                            type="text"
                            name='photoUrl'
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-sm"
                            placeholder="Enter photo URL"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name='password'
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-sm"
                            placeholder="Create a password"
                            required
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            Must contain uppercase, lowercase letters, and be at least 6 characters
                        </p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                            <p className="text-red-600 text-sm">{error}</p>
                        </div>
                    )}

                    {/* Register Button */}
                    <button
                        type='submit'
                        className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 font-medium text-sm mt-6"
                    >
                        Create Account
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <span className="px-4 text-gray-500 text-sm">or</span>
                    <div className="flex-1 border-t border-gray-300"></div>
                </div>

                {/* Google Signup Button */}
                <button
                    onClick={handleGoogleSignup}
                    className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 font-medium text-sm flex items-center justify-center gap-3"
                >
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <g>
                            <path d="m0 0H512V512H0" fill="#fff"></path>
                            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                        </g>
                    </svg>
                    Sign up with Google
                </button>

                {/* Login Link */}
                <div className="text-center mt-6">
                    <p className="text-gray-600 text-sm">
                        Already have an account?{' '}
                        <Link
                            className="text-green-700 hover:text-green-800 font-medium border-b-2 border-green-700 hover:border-green-800 transition-colors duration-200"
                            to="/login"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;