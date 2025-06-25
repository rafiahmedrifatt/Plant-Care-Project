import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div>
            <Link
                to="/"
                className="flex items-center gap-0 hover:opacity-80 transition-opacity duration-200"
            >
                <img
                    src="https://i.ibb.co/ZzVdFT4z/Adobe-Express-file.png"
                    alt="Plant Care Logo"
                    className="h-20 w-20 pt-1 object-contain"
                />
            </Link>
        </div>
    );
};

export default Logo;