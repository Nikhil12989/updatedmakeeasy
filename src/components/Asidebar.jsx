import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { X, Home, BarChart2, Users, Settings } from 'lucide-react';
import { AnimatePresence, motion } from "framer-motion"
import { UserRoundCog, CircleEllipsis,  ChevronDown,  } from "lucide-react"



const Asidebar = ({ adminSidebarOpen, setAdminSidebarOpen }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isG2CDropdownOpen, setIsG2CDropdownOpen] = useState(false)
  const [isReportsDropdownOpen, setIsReportsDropdownOpen] = useState(false);
  return (
    <div
      className={`${
        adminSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="flex items-center justify-between h-16 bg-gray-900 px-4">
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
          className="flex items-center px-6 py-2 text-gray-700 bg-gray-200"
        >
          <Home className="h-5 w-5 mr-3" />
          Dashboard
        </Link>
        <Link
          to="/admin/applicationconsole"
          className="flex items-center px-6 py-2 mt-2 text-gray-600 hover:bg-gray-200"
        >
          <BarChart2 className="h-5 w-5 mr-3" />
          Application Console 
        </Link>
        <div className='relative'>
                        {/* G2C Services Dropdown */}
                        <motion.div
                            className='flex items-center ml-6 py-4 mt-3 mb-4 gap-2 text-sm font-medium rounded-lg transition-colors   cursor-pointer'
                            onClick={() => setIsG2CDropdownOpen(!isG2CDropdownOpen)}
                        >
                            <div className='flex items-center'>
                                <UserRoundCog size={20} style={{ color: '#666', minWidth: "20px" }} />
                                <AnimatePresence>
                                    {isSidebarOpen && (
                                        <motion.span
                                            className='ml-4 whitespace-nowrap text-gray-700'
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: "auto" }}
                                            exit={{ opacity: 0, width: 0 }}
                                            transition={{ duration: 0.2, delay: 0.3 }}
                                        >
                                            App Managment
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
                                    className='pl-8 overflow-hidden'>
                                    <Link to="/dashboard/userdetails">
                                        <motion.div className='flex items-center p-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-400 mb-2'>
                                            <CircleEllipsis size={20} style={{ color: '#666', minWidth: "20px" }} />
                                            <AnimatePresence>
                                                {isSidebarOpen && (
                                                    <motion.span
                                                        className='ml-4 whitespace-nowrap text-white'
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
                                                        className='ml-4 whitespace-nowrap text-white'
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
                                                        className='ml-4 whitespace-nowrap text-white'
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
                                                        className='ml-4 whitespace-nowrap text-white'
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
                                                        className='ml-4 whitespace-nowrap text-white'
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
                                                        className='ml-4 whitespace-nowrap text-white'
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
                                                        className='ml-4 whitespace-nowrap text-white'
                                                        initial={{ opacity: 0, width: 0 }}
                                                        animate={{ opacity: 1, width: "auto" }}
                                                        exit={{ opacity: 0, width: 0 }}
                                                        transition={{ duration: 0.2, delay: 0.3 }}
                                                    >
                                                        carousel 1
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
                                                        className='ml-4 whitespace-nowrap text-white'
                                                        initial={{ opacity: 0, width: 0 }}
                                                        animate={{ opacity: 1, width: "auto" }}
                                                        exit={{ opacity: 0, width: 0 }}
                                                        transition={{ duration: 0.2, delay: 0.3 }}
                                                    >
                                                        carousel 2
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
                                                        className='ml-4 whitespace-nowrap text-white'
                                                        initial={{ opacity: 0, width: 0 }}
                                                        animate={{ opacity: 1, width: "auto" }}
                                                        exit={{ opacity: 0, width: 0 }}
                                                        transition={{ duration: 0.2, delay: 0.3 }}
                                                    >
                                                        carousel 2
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
                                                        className='ml-4 whitespace-nowrap text-white'
                                                        initial={{ opacity: 0, width: 0 }}
                                                        animate={{ opacity: 1, width: "auto" }}
                                                        exit={{ opacity: 0, width: 0 }}
                                                        transition={{ duration: 0.2, delay: 0.3 }}
                                                    >
                                                        Add Our team
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
          className="flex items-center px-6 py-2 mt-2 text-gray-600 hover:bg-gray-200"
        >
          <Users className="h-5 w-5 mr-3" />
          reports
        </Link>
      </nav>
    </div>
  );
};

export default Asidebar;
