import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Home, BarChart2, Users, Settings } from 'lucide-react';
import { AnimatePresence, motion } from "framer-motion";
import { UserRoundCog,CircleEllipsis, ChevronDown, Globe } from "lucide-react";

const Asidebar = ({ adminSidebarOpen, setAdminSidebarOpen }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isG2CDropdownOpen, setIsG2CDropdownOpen] = useState(false);
    const [isReportsDropdownOpen, setIsReportsDropdownOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    const linkClasses = (path) => `
        flex items-center px-6 py-3 mt-3 text-gray-600
        ${currentPath === path ? 'bg-green-400 text-gray-700 font-semibold' : 'hover:bg-orange-400'}
    `;

    return (
        <div 
            className={`${adminSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } fixed inset-y-0 left-0 z-50 w-64 bg-blue-100 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
        >
            <div className="flex items-center justify-between h-16 bg-blue-900 px-4">
                <span className="text-white text-2xl font-semibold">Admin Panel</span>
                <button
                    className="text-white focus:outline-none lg:hidden"
                    onClick={() => setAdminSidebarOpen(false)}
                >
                    <X className="h-6 w-6" />
                </button>
            </div>
            <nav className="mt-5">
                <Link
                    to="/admin/adashboard"
                    className={linkClasses("/admin/adashboard")}
                >
                    <Home className="h-5 w-5 mr-3" />
                    Dashboard
                </Link>
                <Link
                    to="/admin/applicationconsole"
                    className={linkClasses("/admin/applicationconsole")}
                >
                    <BarChart2 className="h-5 w-5 mr-3" />
                    Application Console
                </Link>
                <div className='relative hover:bg-green-200'>
                    {/* G2C Services Dropdown */}
                    <motion.div
                        className='flex items-center ml-6 py-4 mt-3 mb-4 gap-2 text-sm font-medium rounded-lg transition-colors cursor-pointer'
                        onClick={() => setIsG2CDropdownOpen(!isG2CDropdownOpen)}
                    >
                        <div className='flex items-center'>
                            <UserRoundCog size={20} style={{ color: '#666', minWidth: "20px" }} />
                            <AnimatePresence>
                                {isSidebarOpen && (
                                    <motion.span
                                        className='ml-4 whitespace-nowrap text-gray-600'
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                        exit={{ opacity: 0, width: 0 }}
                                        transition={{ duration: 0.2, delay: 0.3 }}
                                    >
                                        App Management
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </div>
                        {isSidebarOpen && (
                            <ChevronDown
                                className={`text-gray-700 transition-transform duration-200 ${isG2CDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                                size={20}
                            />
                        )}
                    </motion.div>
                    <AnimatePresence>
                        {isG2CDropdownOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className='pl-8 overflow-auto max-h-96'  // Added max height and overflow
                            >
                                <Link to="/dashboard/userdetails">
                                    <motion.div className='flex items-center p-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-400 mb-2'>
                                        <CircleEllipsis size={20} style={{ color: '#666', minWidth: "20px" }} />
                                        <AnimatePresence>
                                            {isSidebarOpen && (
                                                <motion.span
                                                    className='ml-4 whitespace-nowrap text-black'
                                                    initial={{ opacity: 0, width: 0 }}
                                                    animate={{ opacity: 1, width: "auto" }}
                                                    exit={{ opacity: 0, width: 0 }}
                                                    transition={{ duration: 0.2, delay: 0.3 }}
                                                >
                                                    User Details
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </Link>
                                <Link to="/dashboard/changeuser">
                                    <motion.div className='flex items-center p-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-400 mb-2'>
                                        <CircleEllipsis size={20} style={{ color: '#666', minWidth: "20px" }} />
                                        <AnimatePresence>
                                            {isSidebarOpen && (
                                                <motion.span
                                                    className='ml-4 whitespace-nowrap text-black'
                                                    initial={{ opacity: 0, width: 0 }}
                                                    animate={{ opacity: 1, width: "auto" }}
                                                    exit={{ opacity: 0, width: 0 }}
                                                    transition={{ duration: 0.2, delay: 0.3 }}
                                                >
                                                    Change User
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </Link>
                                <Link to="/dashboard/formprice">
                                    <motion.div className='flex items-center p-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-400 mb-2'>
                                        <CircleEllipsis size={20} style={{ color: '#666', minWidth: "20px" }} />
                                        <AnimatePresence>
                                            {isSidebarOpen && (
                                                <motion.span
                                                    className='ml-4 whitespace-nowrap text-black'
                                                    initial={{ opacity: 0, width: 0 }}
                                                    animate={{ opacity: 1, width: "auto" }}
                                                    exit={{ opacity: 0, width: 0 }}
                                                    transition={{ duration: 0.2, delay: 0.3 }}
                                                >
                                                    Form Price
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </Link>
                                <Link to="/dashboard/addlinks">
                                    <motion.div className='flex items-center p-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-400 mb-2'>
                                        <CircleEllipsis size={20} style={{ color: '#666', minWidth: "20px" }} />
                                        <AnimatePresence>
                                            {isSidebarOpen && (
                                                <motion.span
                                                    className='ml-4 whitespace-nowrap text-black'
                                                    initial={{ opacity: 0, width: 0 }}
                                                    animate={{ opacity: 1, width: "auto" }}
                                                    exit={{ opacity: 0, width: 0 }}
                                                    transition={{ duration: 0.2, delay: 0.3 }}
                                                >
                                                    Add Links
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </Link>
                                <Link to="/dashboard/addyoutubelinks">
                                    <motion.div className='flex items-center p-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-400 mb-2'>
                                        <CircleEllipsis size={20} style={{ color: '#666', minWidth: "20px" }} />
                                        <AnimatePresence>
                                            {isSidebarOpen && (
                                                <motion.span
                                                    className='ml-4 whitespace-nowrap text-black'
                                                    initial={{ opacity: 0, width: 0 }}
                                                    animate={{ opacity: 1, width: "auto" }}
                                                    exit={{ opacity: 0, width: 0 }}
                                                    transition={{ duration: 0.2, delay: 0.3 }}
                                                >
                                                    Add Youtube Links
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </Link>
                                <Link to="/dashboard/addmemberkit">
                                    <motion.div className='flex items-center p-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-400 mb-2'>
                                        <CircleEllipsis size={20} style={{ color: '#666', minWidth: "20px" }} />
                                        <AnimatePresence>
                                            {isSidebarOpen && (
                                                <motion.span
                                                    className='ml-4 whitespace-nowrap text-black'
                                                    initial={{ opacity: 0, width: 0 }}
                                                    animate={{ opacity: 1, width: "auto" }}
                                                    exit={{ opacity: 0, width: 0 }}
                                                    transition={{ duration: 0.2, delay: 0.3 }}
                                                >
                                                    Add Member Kit
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </Link>
                                <Link to="/dashboard/carousel1">
                                    <motion.div className='flex items-center p-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-400 mb-2'>
                                        <CircleEllipsis size={20} style={{ color: '#666', minWidth: "20px" }} />
                                        <AnimatePresence>
                                            {isSidebarOpen && (
                                                <motion.span
                                                    className='ml-4 whitespace-nowrap text-black'
                                                    initial={{ opacity: 0, width: 0 }}
                                                    animate={{ opacity: 1, width: "auto" }}
                                                    exit={{ opacity: 0, width: 0 }}
                                                    transition={{ duration: 0.2, delay: 0.3 }}
                                                >
                                                    Carousel 1
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </Link>
                                <Link to="/dashboard/carousel2">
                                    <motion.div className='flex items-center p-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-400 mb-2'>
                                        <CircleEllipsis size={20} style={{ color: '#666', minWidth: "20px" }} />
                                        <AnimatePresence>
                                            {isSidebarOpen && (
                                                <motion.span
                                                    className='ml-4 whitespace-nowrap text-black'
                                                    initial={{ opacity: 0, width: 0 }}
                                                    animate={{ opacity: 1, width: "auto" }}
                                                    exit={{ opacity: 0, width: 0 }}
                                                    transition={{ duration: 0.2, delay: 0.3 }}
                                                >
                                                    Carousel 2
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </Link>
                                <Link to="/dashboard/carousel3">
                                    <motion.div className='flex items-center p-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-400 mb-2'>
                                        <CircleEllipsis size={20} style={{ color: '#666', minWidth: "20px" }} />
                                        <AnimatePresence>
                                            {isSidebarOpen && (
                                                <motion.span
                                                    className='ml-4 whitespace-nowrap text-black'
                                                    initial={{ opacity: 0, width: 0 }}
                                                    animate={{ opacity: 1, width: "auto" }}
                                                    exit={{ opacity: 0, width: 0 }}
                                                    transition={{ duration: 0.2, delay: 0.3 }}
                                                >
                                                    Carousel 3
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </Link>
                                <Link to="/dashboard/addourteam">
                                    <motion.div className='flex items-center p-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-400 mb-2'>
                                        <CircleEllipsis size={20} style={{ color: '#666', minWidth: "20px" }} />
                                        <AnimatePresence>
                                            {isSidebarOpen && (
                                                <motion.span
                                                    className='ml-4 whitespace-nowrap text-black'
                                                    initial={{ opacity: 0, width: 0 }}
                                                    animate={{ opacity: 1, width: "auto" }}
                                                    exit={{ opacity: 0, width: 0 }}
                                                    transition={{ duration: 0.2, delay: 0.3 }}
                                                >
                                                    Add Our Team
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <Link
                    to="/admin/reports"
                    className={linkClasses("/admin/reports")}
                >
                    <Users className="h-5 w-5 mr-3" />
                    Reports
                </Link>

                {/* Add 'Go to Website' button */}
                <Link
                    to="/"
                    className={`flex items-center justify-center px-4 py-3 mt-9 text-green-700 font-semibold rounded-lg shadow-md transition-all duration-300 mx-8 ${('/') ? 'bg-green-500 text-white' : 'bg-green-200 text-green-800'
                        } hover:bg-orange-500 hover:text-white hover:shadow-lg transform hover:scale-105`}
                >
                    <Globe className="h-5 w-5 mr-2" />
                    Go to Website
                </Link>

            </nav>
        </div>
    );
};

export default Asidebar;
