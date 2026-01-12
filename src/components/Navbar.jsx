import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../context/AuthContect";
import { useContext } from "react";

function Navbar() {
    const { name, email, user, logoutUser } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);

    console.log(name, email);

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isModalOpen]);

    const handleLogout = () => {
        logoutUser().then(() => {
            console.log("User logged out successfully");
            navigate('/login');
        }).catch((error) => {
            console.error("Error logging out user:", error);
        });
    }

    return (
        <>
            <nav className="flex justify-between items-center bg-[#F6F9FB] text-black px-12 py-4 border-b border-b-gray-200 sticky top-0 z-50">
                {/* Website name/logo,  */}
                <div className="flex gap-4 items-center">
                    <span>
                        <i className="fa-solid fa-book-open-reader text-2xl"></i>
                    </span>
                    <h1 className="text-2xl">BookNest</h1>
                </div>
                {/* navlinks */}
                <div className="flex gap-6 items-center font-semibold text-lg">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/all-books">All Books</NavLink>
                    <NavLink to="/add-book">Add Book</NavLink>
                    <NavLink to="/borrowed-books">Borrowed Books</NavLink>
                </div>
                {/* login and register */}
                {user ? (
                    <div className="relative" ref={modalRef}>
                        <div
                            className="avatar cursor-pointer"
                            onClick={() => setIsModalOpen(!isModalOpen)}
                        >
                            <div className="h-12 w-12 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </div>

                        {/* User Profile Modal */}
                        {isModalOpen && (
                            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                                {/* User Info Section */}
                                <div className="px-4 py-3 border-b border-gray-200">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full overflow-hidden">
                                            <img
                                                src={user.photoURL}
                                                alt="User Avatar"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-gray-900 text-sm">{user.displayName}</p>
                                            <p className="text-xs text-gray-500">{user.email}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Menu Items */}
                                <div className="py-2">
                                    {/* Profile */}
                                    <button className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left">
                                        <i className="fa-regular fa-user text-gray-600 w-5"></i>
                                        <span className="text-gray-700 text-sm font-medium">Profile</span>
                                    </button>

                                    {/* Settings */}
                                    <button className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left">
                                        <i className="fa-solid fa-gear text-gray-600 w-5"></i>
                                        <span className="text-gray-700 text-sm font-medium">Settings</span>
                                    </button>

                                    {/* Log out */}
                                    <button onClick={handleLogout} className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left">
                                        <i className="fa-solid fa-arrow-right-from-bracket text-gray-600 w-5"></i>
                                        <span className="text-gray-700 text-sm font-medium">Log out</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex gap-6 items-center font-semibold text-lg">
                        <Link to="/login">Login</Link>
                        <Link className="bg-[#005B9F] text-white px-4 py-2 rounded-xl" to="/register">Register</Link>
                    </div >
                )
                }
            </nav >
        </>
    );
}

export default Navbar;
