import React from "react";
import { Link, NavLink } from "react-router";
function Navbar() {
    return (
        <>
            <nav className="flex justify-between items-center bg-[#F6F9FB] text-black px-12 py-4 border-b border-b-gray-200 sticky top-0 z-50">
                {/* Website name/logo,  */}
                <div className="flex gap-4 items-center">
                    <span>
                        <i class="fa-solid fa-book-open-reader text-2xl"></i>
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
                <div className="flex gap-6 items-center font-semibold text-lg">
                    <Link to="/login">Login</Link>
                    <Link className="bg-[#005B9F] text-white px-4 py-2 rounded-xl" to="/register">Register</Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
