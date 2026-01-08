import React from "react";
import { NavLink } from "react-router";
function Navbar() {
    return (
        <>
            <nav className="flex justify-between items-center bg-[#F5F9FB] text-black px-12 py-4 border-b border-b-gray-200">
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
                    <button>Register</button>
                    <button>Login</button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
