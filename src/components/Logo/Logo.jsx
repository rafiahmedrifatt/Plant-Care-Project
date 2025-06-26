import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to='/'>
            <svg height="50" width="200" className="fill-current text-green-500">
                <text x="0" y="40" fontFamily="Verdana" fontSize="35" fontWeight="bold">
                    PLANT
                </text>
                <text x="105" y="40" fontFamily="Verdana" fontSize="35" fill="gray">
                    CARE
                </text>
            </svg>
        </Link>

    );
};

export default Logo;