import React, { useState } from "react";
import { Link } from "react-router";

function AllBooks() {
    const [viewType, setViewType] = useState("card"); // 'card' or 'table'

    // Mock data for UI visualization
    const books = [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            category: "Classic",
            rating: 4.8,
            quantity: 12,
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            category: "Classic",
            rating: 4.9,
            quantity: 8,
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
        },
        {
            id: 3,
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            category: "Fantasy",
            rating: 4.7,
            quantity: 15,
            image: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
        },
        {
            id: 4,
            title: "Pride and Prejudice",
            author: "Jane Austen",
            category: "Romance",
            rating: 4.6,
            quantity: 10,
            image: "https://upload.wikimedia.org/wikipedia/commons/1/17/PrideAndPrejudiceTitlePage.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-[#F6F9FB] py-10 px-4">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* Header & Title */}
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">All Books</h1>
                        <p className="text-gray-600 mt-1">Browse our complete collection of {books.length} books</p>
                    </div>
                </div>

                {/* Filter Bar */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4 items-center justify-between">

                    {/* Search - Wide */}
                    <div className="relative flex-1 w-full">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input
                            type="text"
                            placeholder="Search by title or author..."
                            className="input w-full pl-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 transition-colors h-12 text-base rounded-lg"
                        />
                    </div>

                    {/* Filters Right Side */}
                    <div className="flex items-center gap-3 w-full md:w-auto">

                        {/* Custom Category Select */}
                        <div className="relative">
                            <select className="select bg-gray-50 border-gray-200 w-full md:w-48 pl-10 h-12 text-base font-normal text-gray-700 focus:outline-none focus:border-blue-500 rounded-lg appearance-none">
                                <option>All Categories</option>
                                <option>Fiction</option>
                                <option>Non-Fiction</option>
                                <option>Sci-Fi</option>
                            </select>
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                <i className="fa-solid fa-sliders"></i>
                            </span>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                <i className="fa-solid fa-chevron-down text-xs"></i>
                            </span>
                        </div>

                        {/* View Toggles - Separated */}
                        <div className="flex gap-2">
                            <button
                                className={`btn btn-square h-12 w-12 rounded-lg border-gray-200 ${viewType === 'card' ? 'bg-[#1B3764] text-white hover:bg-[#152b4d] border-none' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
                                onClick={() => setViewType('card')}
                            >
                                <i className="fa-solid fa-border-all text-lg"></i>
                            </button>
                            <button
                                className={`btn btn-square h-12 w-12 rounded-lg border-gray-200 ${viewType === 'table' ? 'bg-[#1B3764] text-white hover:bg-[#152b4d] border-none' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
                                onClick={() => setViewType('table')}
                            >
                                <i className="fa-solid fa-list text-lg"></i>
                            </button>
                        </div>

                    </div>
                </div>

                {/* Content Area */}
                {viewType === 'card' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        {books.map((book) => (
                            <div key={book.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 group">
                                <div className="relative h-64 overflow-hidden bg-gray-100">
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold text-gray-700 shadow-sm">
                                        {book.category}
                                    </div>
                                </div>

                                <div className="p-5 space-y-3">
                                    <div className="space-y-1">
                                        <h3 className="font-bold text-gray-900 text-lg leading-tight line-clamp-1" title={book.title}>
                                            {book.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm">{book.author}</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1 text-yellow-400 text-sm">
                                            <i className="fa-solid fa-star"></i>
                                            <span className="text-gray-600 font-medium ml-1">{book.rating}</span>
                                        </div>
                                        <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                                            {book.quantity} available
                                        </span>
                                    </div>

                                    <div className="pt-3 flex gap-2">
                                        <Link to={`/book/${book.id}`} className="flex-1 btn btn-sm bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700 font-medium normal-case">
                                            Details
                                        </Link>
                                        <Link to={`/update-book/${book.id}`} className="flex-1 btn btn-sm bg-[#1B3764] hover:bg-[#152b4d] text-white border-none font-medium normal-case">
                                            Update
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-200">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-gray-50 text-gray-600">
                                <tr>
                                    <th>Book</th>
                                    <th>Category</th>
                                    <th>Rating</th>
                                    <th>Quantity</th>
                                    <th className="text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map(book => (
                                    <tr key={book.id} className="hover:bg-gray-50">
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={book.image} alt={book.title} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-gray-900">{book.title}</div>
                                                    <div className="text-sm opacity-50">{book.author}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ghost badge-sm">{book.category}</span>
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-1 text-yellow-500 text-xs">
                                                <i className="fa-solid fa-star"></i>
                                                {book.rating}
                                            </div>
                                        </td>
                                        <td className="text-sm font-medium text-gray-600">{book.quantity}</td>
                                        <td className="text-right">
                                            <Link to={`/book/${book.id}`} className="btn btn-ghost btn-xs">Details</Link>
                                            <Link to={`/update-book/${book.id}`} className="btn btn-ghost btn-xs text-blue-600">Update</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

            </div>
        </div>
    );
}

export default AllBooks;
