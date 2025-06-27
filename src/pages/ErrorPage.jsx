import React from 'react';

const ErrorPage = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    const handleGoHome = () => {
        window.location.href = '/';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
            <div className="max-w-6xl w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Image */}
                    <div className="order-2 lg:order-1 flex justify-center">
                        <div className="relative">
                            <img
                                src="https://i.ibb.co/3ZCJ6xC/6325254.jpg"
                                alt="Lost in the garden"
                                className="w-full max-w-md h-auto drop-shadow-2xl"
                            />
                            {/* Decorative elements around image */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full opacity-60 animate-bounce"></div>
                            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-emerald-500 rounded-full opacity-40 animate-pulse"></div>
                            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-300 rounded-full opacity-50 animate-ping"></div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="order-1 lg:order-2 text-center lg:text-left">
                        <div className="space-y-6">

                            {/* Error Badge */}
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                404 Error
                            </div>

                            {/* Main Heading */}
                            <div>
                                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                                    Whoops!
                                </h1>
                                <h2 className="text-2xl lg:text-3xl font-semibold text-green-700 mb-6">
                                    This page has gone to seed
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                                    It looks like the page you're looking for has wandered off into the wild.
                                    Don't worry though - we'll help you get back to cultivating your green dreams!
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button
                                    onClick={handleGoHome}
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    Return to Garden
                                </button>

                                <button
                                    onClick={handleGoBack}
                                    className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Go Back
                                </button>
                            </div>

                            {/* Help Section */}
                            <div className="pt-8 border-t border-green-200">
                                <h3 className="text-sm font-medium text-gray-500 mb-3">Popular sections:</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-white text-green-700 px-4 py-2 rounded-full text-sm border border-green-200 hover:bg-green-50 cursor-pointer transition-colors">
                                        🌱 Indoor Plants
                                    </span>
                                    <span className="bg-white text-green-700 px-4 py-2 rounded-full text-sm border border-green-200 hover:bg-green-50 cursor-pointer transition-colors">
                                        🌿 Plant Care
                                    </span>
                                    <span className="bg-white text-green-700 px-4 py-2 rounded-full text-sm border border-green-200 hover:bg-green-50 cursor-pointer transition-colors">
                                        🏡 Garden Design
                                    </span>
                                    <span className="bg-white text-green-700 px-4 py-2 rounded-full text-sm border border-green-200 hover:bg-green-50 cursor-pointer transition-colors">
                                        📞 Support
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-300 rounded-full opacity-15 animate-bounce"></div>
                <div className="absolute top-1/2 right-10 w-16 h-16 bg-green-300 rounded-full opacity-10 animate-ping"></div>
            </div>
        </div>
    );
};

export default ErrorPage;