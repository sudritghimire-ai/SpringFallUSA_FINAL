import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import avatarImg from "../assets/images/avatar.png";
import { useLogoutUserMutation } from '../redux/features/auth/authAPI';
import { logout } from '../redux/features/auth/authSlice';

const navLists = [
    { name: "Home", path: '/' },
    { name: "Privacy and Policy", path: '/privacy-policy' }
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const [logoutUser] = useLogoutUserMutation();
    const dispatch = useDispatch();
    const location = useLocation(); // Get the current location

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                dispatch(logout());
            })
            .catch((error) => {
                console.error("Logout failed", error);
            });
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Determine if the navbar should be fixed or not based on the current path
    const isFixedNavbar = location.pathname.includes('/blogs/');

    return (
        <header className={`bg-white py-6 shadow-md ${isFixedNavbar ? 'fixed top-0 left-0 right-0 z-50' : ''} font-sans`}>
            <nav className='container mx-auto flex justify-between items-center px-5'>
                {/* Logo + Brand Name */}
                <a href='/' className="flex items-center space-x-3">
                    <img src='/logo.jpeg' alt='Logo' className='h-12' />
                    <span className="text-xl sm:text-2xl text-[#2C3E50] font-semibold tracking-wide">
                        SpringFallUSA
                    </span>
                </a>

                {/* Desktop Navigation */}
                <ul className='hidden sm:flex space-x-10 items-center'>
                    {navLists.map((list, index) => (
                        <li key={index}>
                            <NavLink
                                to={list.path}
                                className={({ isActive }) => isActive ? "text-[#1E73BE] font-semibold" : "text-gray-700 hover:text-[#1E73BE] transition-all duration-300"}
                                onClick={closeMenu}
                            >
                                {list.name}
                            </NavLink>
                        </li>
                    ))}

                    {user ? (
                        <li className='flex items-center gap-4'>
                            {user.role === "admin" && (
                                <img src={avatarImg} alt='Admin Avatar' className='w-12 h-12 rounded-full' />
                            )}
                            <Link to='/dashboard'>
                                <button className='bg-[#1E73BE] text-white py-2 px-5 rounded-full hover:bg-[#145A8C] transition-all duration-300'>
                                    Dashboard
                                </button>
                            </Link>
                        </li>
                    ) : (
                        <li>
                            <NavLink to='/login' className="py-2 px-4 rounded text-[#1E73BE] hover:bg-[#e6f1ff] transition-all duration-300">
                                Log In
                            </NavLink>
                        </li>
                    )}
                </ul>

                {/* Hamburger Menu Icon */}
                <div className='sm:hidden'>
                    <button
                        onClick={toggleMenu}
                        className='flex items-center px-3 py-4 bg-[#fafafa] rounded-full text-sm text-gray-500 hover:text-gray-900'>
                        {isMenuOpen ? <AiOutlineCloseCircle className='text-3xl' /> : <CgMenuGridO className='text-3xl' />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <ul className='sm:hidden flex flex-col items-center bg-white border-t-2 py-6'>
                    {navLists.map((list, index) => (
                        <li key={index} className='py-3'>
                            <NavLink
                                to={list.path}
                                className={({ isActive }) => isActive ? "text-[#1E73BE] font-semibold" : "text-gray-700 hover:text-[#1E73BE] transition-all duration-300"}
                                onClick={closeMenu}
                            >
                                {list.name}
                            </NavLink>
                        </li>
                    ))}

                    {user ? (
                        <li className='py-4 flex flex-col items-center'>
                            {user.role === "admin" && (
                                <img src={avatarImg} alt='Admin Avatar' className='w-12 h-12 rounded-full mb-2' />
                            )}
                            <Link to='/dashboard' onClick={closeMenu}>
                                <button className='bg-[#1E73BE] text-white py-2 px-5 rounded-full hover:bg-[#145A8C] transition-all duration-300'>
                                    Dashboard
                                </button>
                            </Link>
                        </li>
                    ) : (
                        <li className='py-3'>
                            <NavLink to='/login' onClick={closeMenu} className="text-[#1E73BE] hover:bg-[#e6f1ff] py-2 px-4 rounded transition-all duration-300">
                                Log In
                            </NavLink>
                        </li>
                    )}
                </ul>
            )}
        </header>
    );
};

export default Navbar;
