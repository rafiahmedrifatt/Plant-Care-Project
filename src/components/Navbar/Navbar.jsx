import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Tooltip } from 'react-tooltip';
import { motion } from "framer-motion"
import { Link, NavLink } from 'react-router';
import Logo from '../Logo/Logo';

const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/allPlants", label: "All Plants" },
        { to: "/addPlants", label: "Add Plants" },
        { to: "/aboutUs", label: "About Us" },
        ...(user && user.email ? [{ to: `/myPlants/${user?.email}`, label: "My Plants" }] : [])
    ]

    const handleLogOut = () => {
        logOut()
    }

    const toggleTheme = () => {
        setTheme(theme === 'light' ? "dark" : 'light')
    }

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Logo />
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex gap-5">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive
                                        ? 'text-green-600 border-b-2 border-green-600'
                                        : 'text-gray-700 hover:text-green-600'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right Side - Theme Toggle & Auth */}
                    <div className="flex items-center space-x-4">

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                        >
                            {theme === 'light' ? (
                                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </button>

                        {/* User Section */}
                        {user ? (
                            <div className="flex items-center space-x-3">
                                {/* User Avatar */}
                                <div
                                    id="user-avatar"
                                    className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
                                >
                                    <img
                                        src={user.photoURL || "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"}
                                        alt="User"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <Tooltip
                                    anchorSelect="#user-avatar"
                                    content={user.displayName || user.email}
                                    place="bottom"
                                />

                                {/* Logout Button */}
                                <button
                                    onClick={handleLogOut}
                                    className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="hidden md:flex gap-5">
                                <Link
                                    to="/login"
                                    className="p-3 text-sm text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors duration-200"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="p-3 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                                >
                                    Register
                                </Link>
                            </div>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-gray-700"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${isActive
                                            ? 'text-green-600 bg-green-50'
                                            : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}

                            {/* Mobile Auth Buttons */}
                            {!user && (
                                <div className="pt-4 space-y-2">
                                    <NavLink
                                        to="/login"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block w-full px-3 py-2 text-center text-green-600 border border-green-600 rounded-md hover:bg-green-50"
                                    >
                                        Login
                                    </NavLink>
                                    <NavLink
                                        to="/register"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block w-full px-3 py-2 text-center bg-green-600 text-white rounded-md hover:bg-green-700"
                                    >
                                        Register
                                    </NavLink>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;