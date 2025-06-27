import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn, google, setLoading } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        console.log("clicked");
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email);
        signIn(email, password)
            .then(() => navigate(location.state ? location.state : '/'))
            .catch(() => {
                setLoading(false)
                Swal.fire({
                    icon: "error",
                    title: "Oops... invalid credential",
                    text: "Email or Password is not Correct!"
                })
            })
    }

    const handleGoogleLogin = () => {
        google().then(() => {
            setLoading(false)
            navigate(location.state ? location.state : '/')
        })
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
            <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md">
                <div className="bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="w-12 h-12 bg-gray-900 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                Welcome Back
                            </h2>
                            <p className="text-gray-600 text-sm">Sign in to your account</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                                    name='email'
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                                    name='password'
                                    placeholder="Enter your password"
                                />
                            </div>

                            {/* Forgot Password */}
                            <div className="text-right">
                                <a className="text-sm text-gray-600 hover:text-gray-900 font-medium hover:underline transition-colors duration-200">
                                    Forgot password?
                                </a>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-gray-900/30"
                            >
                                Login
                            </button>

                            {/* Register Link */}
                            <p className="text-center text-gray-600 text-sm">
                                Don't have account? {' '}
                                <Link
                                    className='text-gray-900 font-medium hover:underline border-b-2 border-green-700 transition-colors duration-200'
                                    to="/register"
                                >
                                    Register Now
                                </Link>
                            </p>
                        </form>

                        {/* Divider */}
                        <div className="flex items-center my-6">
                            <div className="flex-1 border-t border-gray-200"></div>
                            <span className="px-4 text-sm text-gray-500">or</span>
                            <div className="flex-1 border-t border-gray-200"></div>
                        </div>

                        {/* Google Login */}
                        <button
                            onClick={handleGoogleLogin}
                            className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 border border-gray-300 rounded-lg transition-all duration-200 flex items-center justify-center gap-3 hover:shadow-md transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-gray-200/50"
                        >
                            <svg aria-label="Google logo" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <g>
                                    <path d="m0 0H512V512H0" fill="#fff"></path>
                                    <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                    <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                    <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                    <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                                </g>
                            </svg>
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;