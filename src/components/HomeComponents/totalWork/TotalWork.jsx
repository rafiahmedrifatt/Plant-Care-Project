import React from 'react';
import CountUp from 'react-countup';

const TotalWork = () => {
    return (
        <div
            className="relative bg-cover bg-center h-[65vh] text-white mt-10"
            style={{
                backgroundImage:
                    "url('https://i.postimg.cc/Y0wChZbn/jake-nackos-C2-PCa6-Dhl-YE-unsplash.jpg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12 h-full max-w-6xl mx-auto">
                {/* Text Section */}
                <div className="max-w-md text-center md:text-left">
                    <p className="text-sm uppercase tracking-wider text-green-200 mb-2">Our Facts</p>
                    <h1 className="text-3xl md:text-4xl font-bold leading-snug">
                        We Provide Professional Suggestions for Your Beautiful Gardens and Landscape
                    </h1>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                    {[
                        {
                            img: "https://i.postimg.cc/qRPBYRYZ/1.jpg",
                            end: 886,
                            label: "Projects Completed",
                        },
                        {
                            img: "https://i.postimg.cc/TYCM510M/2.jpg",
                            end: 192,
                            label: "Team Members",
                        },
                        {
                            img: "https://i.postimg.cc/DyWdLYdv/3.jpg",
                            end: 209,
                            label: "Awards Won",
                        },
                        {
                            img: "https://i.postimg.cc/qBDxtdKD/4.jpg",
                            end: 19229,
                            label: "Satisfied Customers",
                        },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <img
                                src={item.img}
                                alt={item.label}
                                className="w-20 h-20 rounded-full object-cover shadow-md mb-3 border-2 border-white"
                            />
                            <CountUp className="text-3xl font-semibold" end={item.end} duration={3} />
                            <p className="text-sm mt-1 text-gray-200">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default TotalWork;