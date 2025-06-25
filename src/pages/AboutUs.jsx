import React, { useState, useEffect } from 'react';
import { Leaf, Users, Calendar, Heart, Smartphone, Bell, BarChart3, Shield } from 'lucide-react';

export default function AboutUs() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const features = [
        {
            icon: <Leaf className="w-6 h-6" />,
            title: "Smart Plant Database",
            description: "Access thousands of plant species with detailed care instructions"
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            title: "Custom Care Plans",
            description: "Personalized schedules for watering, fertilizing, and maintenance"
        },
        {
            icon: <Bell className="w-6 h-6" />,
            title: "Smart Reminders",
            description: "Never forget to care for your plants with intelligent notifications"
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Growth Tracking",
            description: "Monitor your plants' progress with photos and health metrics"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Community Hub",
            description: "Connect with fellow plant enthusiasts and share experiences"
        },
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Mobile Friendly",
            description: "Manage your garden anywhere with our responsive platform"
        }
    ];

    const stats = [
        { number: "50K+", label: "Happy Plant Parents" },
        { number: "2M+", label: "Plants Cared For" },
        { number: "500+", label: "Plant Species" },
        { number: "95%", label: "Success Rate" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
            {/* Mission Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                            <div className="flex items-center mb-6">
                                <Heart className="w-8 h-8 text-red-500 mr-3" />
                                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                We believe everyone deserves to experience the joy of growing healthy, thriving plants.
                                Our platform combines cutting-edge technology with botanical expertise to make plant care
                                accessible, enjoyable, and successful for gardeners of all skill levels.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                From busy professionals to dedicated horticulturists, we're here to help you build
                                your green oasis and connect with a community that shares your passion for plants.
                            </p>
                        </div>
                    </div>

                    <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-xl">
                            <h3 className="text-2xl font-bold mb-6">Why Choose PlantCare Hub?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <Shield className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                                    <span>Science-backed care recommendations from botanical experts</span>
                                </li>
                                <li className="flex items-start">
                                    <Users className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                                    <span>Supportive community of plant enthusiasts ready to help</span>
                                </li>
                                <li className="flex items-start">
                                    <Smartphone className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                                    <span>Intuitive interface designed for plant lovers, by plant lovers</span>
                                </li>
                                <li className="flex items-start">
                                    <BarChart3 className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                                    <span>Advanced tracking tools to monitor your plants' journey</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Everything You Need to <span className="text-green-600">Grow</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our comprehensive platform provides all the tools and knowledge you need
                        to become a confident and successful plant parent.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${600 + index * 100}ms` }}
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 ml-4">{feature.title}</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Growing Together</h2>
                        <p className="text-xl text-green-100">Join thousands of plant enthusiasts worldwide</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`text-center transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
                                style={{ transitionDelay: `${1000 + index * 200}ms` }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                                <div className="text-green-100 text-lg">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}