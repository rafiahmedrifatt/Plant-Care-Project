import React, { useState } from 'react';
import { Heart, Wind, Brain, Home, Star, ArrowRight, Sparkles } from 'lucide-react';

const PlantBenefitsSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const benefits = [
        {
            icon: Wind,
            title: 'Air Purification',
            description: 'Plants naturally filter toxins and pollutants from indoor air, creating a cleaner breathing environment.',
            details: 'NASA studies show that common houseplants can remove up to 87% of air toxins within 24 hours.',
            color: 'blue'
        },
        {
            icon: Brain,
            title: 'Mental Wellness',
            description: 'Being around plants reduces stress, anxiety, and promotes better focus and concentration.',
            details: 'Studies indicate that indoor plants can reduce stress levels by up to 15% and improve productivity.',
            color: 'purple'
        },
        {
            icon: Heart,
            title: 'Physical Health',
            description: 'Plants increase humidity levels and can help reduce respiratory problems and dry skin.',
            details: 'Indoor plants can increase humidity by 10%, helping prevent dry skin and respiratory issues.',
            color: 'red'
        },
        {
            icon: Home,
            title: 'Beautiful Spaces',
            description: 'Transform any room into a vibrant, welcoming space with natural beauty and life.',
            details: 'Plants add natural texture, color, and create focal points that enhance interior design.',
            color: 'green'
        }
    ];

    const stats = [
        { number: '87%', label: 'Air Toxins Removed', subtext: 'within 24 hours' },
        { number: '15%', label: 'Stress Reduction', subtext: 'in workplace settings' },
        { number: '10%', label: 'Humidity Increase', subtext: 'for healthier air' },
        { number: '25%', label: 'Productivity Boost', subtext: 'with office plants' }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: 'text-blue-600 bg-blue-50 group-hover:bg-blue-100',
            purple: 'text-purple-600 bg-purple-50 group-hover:bg-purple-100',
            red: 'text-red-600 bg-red-50 group-hover:bg-red-100',
            green: 'text-green-600 bg-green-50 group-hover:bg-green-100'
        };
        return colors[color] || colors.green;
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <Sparkles className="h-8 w-8 text-green-600 mr-3 animate-pulse" />
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Why Plants Matter
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover the incredible benefits that plants bring to your life, home, and well-being.
                        More than just decoration, plants are natural healers for mind, body, and soul.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        const isHovered = hoveredCard === index;

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className="group relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                            >
                                <div className={`inline-flex p-4 rounded-2xl mb-6 transition-all duration-300 ${getColorClasses(benefit.color)}`}>
                                    <IconComponent className="h-8 w-8" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {benefit.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {benefit.description}
                                </p>

                                <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                    <p className="text-sm text-gray-500 font-medium border-t border-gray-100 pt-4">
                                        {benefit.details}
                                    </p>
                                </div>

                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowRight className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <div className="bg-gray-50 rounded-3xl p-12 mb-16">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Science-Backed Benefits
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Research from leading institutions proves the positive impact of plants on our daily lives
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="mb-4">
                                    <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                                        {stat.number}
                                    </div>
                                    <div className="text-lg font-semibold text-gray-900 mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {stat.subtext}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Featured Quote */}
                <div className="text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white">
                    <div className="max-w-4xl mx-auto">
                        <Star className="h-12 w-12 mx-auto mb-6 text-yellow-300" />
                        <blockquote className="text-2xl md:text-3xl font-medium mb-6 leading-relaxed">
                            "In every walk with nature, one receives far more than they seek.
                            Bringing plants into your home is bringing life itself indoors."
                        </blockquote>
                        <div className="flex items-center justify-center space-x-8">
                            <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors duration-300 hover:shadow-lg">
                                Start Your Plant Collection
                            </button>
                            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-green-600 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlantBenefitsSection;