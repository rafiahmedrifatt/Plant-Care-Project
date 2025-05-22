import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Tooltip } from 'react-tooltip';
import { motion } from "framer-motion"
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    const navLinks =
        <>
            <motion.a initial={{ scale: 0 }} animate={{ scale: 1 }}><NavLink to="/">Home</NavLink></motion.a>
            <motion.a whileTap={{ scale: 0.8 }}><NavLink to="/allPlants">All Plants</NavLink></motion.a>
            <motion.a whileTap={{ scale: 0.8 }}><NavLink to="/addPlants">Add Plants</NavLink></motion.a>
            {
                user && user.email ? <motion.a whileTap={{ scale: 0.8 }}><NavLink to={`/myPlants/${user?.email}`}>My Plants</NavLink></motion.a> : ""
            }
        </>

    const handleLogOut = () => {
        logOut()
    }

    return (
        <div className="navbar shadow-sm h-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <Link to='/' className='text-xl font-extrabold'>Plant Tracker</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className='flex items-center gap-5'>
                        <a
                            id="my-tooltip-anchor"
                        >
                            <motion.div

                                className="avatar"
                            >
                                <div className="w-12 rounded-full">
                                    <img src={user.photoURL ? user.photoURL : "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"} />
                                </div>
                            </motion.div>
                        </a>
                        <Tooltip
                            anchorSelect="#my-tooltip-anchor"
                            content={user.displayName ? user.displayName : user.email}
                            place="left"
                        />

                        <motion.button
                            whileTap={{ scale: 0.8 }}
                            onClick={handleLogOut}
                            className='btn btn-success'
                        >
                            <motion.a
                                whileTap={{ scale: 0.8 }}
                                whileHover={{ scale: 0.8 }}
                            >
                                Register
                            </motion.a>
                        </motion.button>
                    </div> :
                        <motion.div

                            className='btn btn-success'
                        >
                            <motion.a
                                whileTap={{ scale: 0.8 }}
                                whileHover={{ scale: 0.8 }}
                            >
                                <NavLink className='py-5' to="/login">Login</NavLink>
                            </motion.a> | <motion.a
                                whileTap={{ scale: 0.8 }}
                                whileHover={{ scale: 0.8 }}
                            >
                                <NavLink className='py-5' to="/register">Register</NavLink>
                            </motion.a>
                        </motion.div>
                }
            </div>

        </div>
    );
};

export default Navbar;
