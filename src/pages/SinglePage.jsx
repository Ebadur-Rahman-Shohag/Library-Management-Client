import React from "react";
import { Link } from "react-router";
import { useLoaderData } from "react-router";

function SinglePage() {
    const book = useLoaderData();
    console.log(book);
    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            {/* Back Button */}
            <div className="mb-8">
                <Link to="/all-books" className="flex items-center gap-2 text-gray-700 font-medium hover:text-black transition-colors">
                    <i className="fa-solid fa-arrow-left"></i>
                    Back to All Books
                </Link>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
                {/* Left Column: Book Cover */}
                <div className="w-full md:w-1/3 flex justify-center md:block">
                    <div className="p-4 h-full bg-white/50 rounded-2xl shadow-sm border border-gray-100 max-w-sm">
                        <img
                            src={book.image}
                            alt="Book Cover"
                            className="w-full h-full rounded-lg shadow-md object-cover aspect-[2/3]"
                        />
                    </div>
                </div>

                {/* Right Column: Book Details */}
                <div className="w-full md:w-2/3 flex flex-col gap-6">
                    {/* Tags */}
                    <div className="flex gap-3">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                            {book.genre}
                        </span>
                        <span className="px-3 py-1 bg-green-50 text-green-700 border border-green-200 text-sm font-medium rounded-full">
                            Available
                        </span>
                    </div>

                    {/* Title and Author */}
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">{book.title}</h1>
                        <p className="text-lg text-gray-600">by {book.author}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400 text-sm">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <span className="text-gray-500 text-sm">{book.rating}</span>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <h2 className="font-bold text-gray-900">Description</h2>
                        <p className="text-gray-600 leading-relaxed">
                            {book.description}
                        </p>
                    </div>

                    {/* Book Information Card */}
                    <div className="grid grid-cols-2 gap-y-6 gap-x-12 p-6 bg-white border border-gray-200 rounded-xl mt-2 w-full lg:w-4/5">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-bold text-gray-900">ISBN</h3>
                            <div className="flex items-center gap-2 text-gray-600">
                                <i className="fa-solid fa-hashtag text-xs"></i>
                                <span className="font-medium text-black">{book.isbn}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-bold text-gray-900">Published</h3>
                            <div className="flex items-center gap-2 text-gray-600">
                                <i className="fa-regular fa-calendar text-xs"></i>
                                <span className="font-medium text-black">{book.published}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-bold text-gray-900">Pages</h3>
                            <div className="flex items-center gap-2 text-gray-600">
                                <i className="fa-regular fa-file-lines text-xs"></i>
                                <span className="font-medium text-black">{book.pages}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-bold text-gray-900">Available</h3>
                            <div className="flex items-center gap-2 text-gray-600">
                                <i className="fa-solid fa-book-open text-xs"></i>
                                <span className="font-medium text-black">{book.available} copies</span>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 mt-4 w-full lg:w-4/5">
                        <button className="flex-1 bg-[#1E508F] hover:bg-[#163a66] text-white font-medium py-3 rounded-md transition-colors">
                            Borrow This Book
                        </button>
                        <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors">
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePage;
