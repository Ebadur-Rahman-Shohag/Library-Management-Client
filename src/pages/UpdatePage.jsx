import React from "react";
import { Link } from "react-router";

function UpdatePage() {
    return (
        <div className="min-h-screen bg-[#F6F9FB] py-10 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Back Link */}
                <div className="mb-6">
                    <Link to="/all-books" className="flex items-center gap-2 text-gray-600 font-medium hover:text-black transition-colors">
                        <i className="fa-solid fa-arrow-left"></i>
                        Back to All Books
                    </Link>
                </div>

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Update Book</h1>
                    <p className="text-gray-600 mt-1">Edit the details of "Gone Girl"</p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                    {/* Card Header */}
                    <div className="mb-8 pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-2 font-bold text-gray-900 text-lg">
                            <i className="fa-regular fa-pen-to-square"></i>
                            Edit Book Details
                        </div>
                        <p className="text-gray-500 text-sm mt-1">Update the book information below</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">
                        {/* Image URL */}
                        <div className="form-control w-full">
                            <label className="label px-0">
                                <span className="label-text font-bold text-gray-900">Book Cover Image URL</span>
                            </label>
                            <input
                                type="text"
                                defaultValue="/thriller-mystery-book-cover-dark.jpg"
                                className="input input-bordered w-full bg-white border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
                            />
                        </div>

                        {/* Title */}
                        <div className="form-control w-full">
                            <label className="label px-0">
                                <span className="label-text font-bold text-gray-900">Book Title</span>
                            </label>
                            <input
                                type="text"
                                defaultValue="Gone Girl"
                                className="input input-bordered w-full bg-white border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
                            />
                        </div>

                        {/* Author */}
                        <div className="form-control w-full">
                            <label className="label px-0">
                                <span className="label-text font-bold text-gray-900">Author Name</span>
                            </label>
                            <input
                                type="text"
                                defaultValue="Gillian Flynn"
                                className="input input-bordered w-full bg-white border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
                            />
                        </div>

                        {/* Category */}
                        <div className="form-control w-full">
                            <label className="label px-0">
                                <span className="label-text font-bold text-gray-900">Category</span>
                            </label>
                            <select className="select select-bordered w-full bg-white border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700 font-normal">
                                <option>Thriller</option>
                                <option>Fiction</option>
                                <option>Mystery</option>
                            </select>
                        </div>

                        {/* Rating */}
                        <div className="form-control w-full">
                            <label className="label px-0">
                                <span className="label-text font-bold text-gray-900">Rating</span>
                            </label>
                            <div className="flex items-center gap-2">
                                <div className="flex text-yellow-400 text-sm">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <span className="text-gray-400 text-sm">(4.2)</span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-4 mt-8">
                            <button type="submit" className="btn bg-[#1E508F] hover:bg-[#163a66] text-white border-none flex-1 text-base font-medium normal-case">Update Book</button>
                            <button type="button" className="btn bg-white border-gray-300 hover:bg-gray-50 text-gray-700 text-base font-medium normal-case px-6">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdatePage;