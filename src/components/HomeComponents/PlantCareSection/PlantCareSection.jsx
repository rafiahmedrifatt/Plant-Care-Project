import React, { useState } from 'react';
import { Droplets, Sun, Scissors, Heart, ChevronRight, Leaf } from 'lucide-react';

const PlantCareSection = () => {
    const [activeTab, setActiveTab] = useState('watering');

    const careCategories = {
        watering: {
            icon: Droplets,
            title: 'Watering',
            color: 'blue',
            tips: [
                'Check soil moisture with your finger before watering',
                'Water deeply but less frequently for stronger roots',
                'Use room temperature water to avoid shocking plants',
                'Ensure proper drainage to prevent root rot'
            ]
        },
        lighting: {
            icon: Sun,
            title: 'Lighting',
            color: 'yellow',
            tips: [
                'Most houseplants prefer bright, indirect light',
                'Rotate plants weekly for even growth',
                'Move plants closer to windows in winter',
                'Watch for signs of too much or too little light'
            ]
        },
        pruning: {
            icon: Scissors,
            title: 'Pruning',
            color: 'green',
            tips: [
                'Remove dead or yellowing leaves regularly',
                'Pinch growing tips to encourage bushier growth',
                'Use clean, sharp tools to prevent disease',
                'Prune during active growing season for best results'
            ]
        },
        care: {
            icon: Heart,
            title: 'General Care',
            color: 'pink',
            tips: [
                'Maintain consistent temperature and humidity',
                'Fertilize during growing season (spring/summer)',
                'Repot when roots outgrow the container',
                'Quarantine new plants for 2 weeks'
            ]
        }
    };

    const getColorClasses = (color, active = false) => {
        const colors = {
            blue: active ? 'bg-blue-500 text-white' : 'text-blue-600 hover:bg-blue-50',
            yellow: active ? 'bg-yellow-500 text-white' : 'text-yellow-600 hover:bg-yellow-50',
            green: active ? 'bg-green-500 text-white' : 'text-green-600 hover:bg-green-50',
            pink: active ? 'bg-pink-500 text-white' : 'text-pink-600 hover:bg-pink-50'
        };
        return colors[color] || colors.green;
    };

    return (
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <Leaf className="h-8 w-8 text-green-600 mr-3" />
                        <h2 className="text-4xl font-bold text-gray-800">Plant Care Essentials</h2>
                    </div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Master the fundamentals of plant care with our expert tips and guidance.
                        Happy plants make happy homes!
                    </p>
                </div>

                {/* Interactive Tabs */}
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {Object.entries(careCategories).map(([key, category]) => {
                            const IconComponent = category.icon;
                            const isActive = activeTab === key;

                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${getColorClasses(category.color, isActive)}`}
                                >
                                    <IconComponent className="h-5 w-5 mr-2" />
                                    {category.title}
                                </button>
                            );
                        })}
                    </div>

                    {/* Content Area */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500">
                        {Object.entries(careCategories).map(([key, category]) => {
                            const IconComponent = category.icon;

                            return (
                                <div
                                    key={key}
                                    className={`transition-all duration-500 ${activeTab === key ? 'opacity-100 visible' : 'opacity-0 invisible absolute'
                                        }`}
                                >
                                    <div className="flex items-center mb-6">
                                        <div className={`p-3 rounded-full mr-4 ${getColorClasses(category.color, true)}`}>
                                            <IconComponent className="h-8 w-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800">{category.title} Tips</h3>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        {category.tips.map((tip, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group"
                                            >
                                                <ChevronRight className="h-5 w-5 text-green-500 mr-3 mt-0.5 group-hover:translate-x-1 transition-transform" />
                                                <p className="text-gray-700 leading-relaxed">{tip}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your Plant Journey?</h3>
                        <p className="text-gray-600 mb-6">
                            Join thousands of plant parents who've transformed their homes with our expert guidance.
                        </p>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Explore Our Plant Collection
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlantCareSection;