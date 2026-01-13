import React from "react";

function AddBook() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        data.rating = Number(data.rating);
        console.log(data);
        fetch("http://localhost:5000/api/v1/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })

        e.target.reset();

    }
    return (
        <div className="min-h-screen bg-[#F6F9FB] py-10 px-4">
            <div className="max-w-3xl mx-auto space-y-8">

                {/* Page Header */}
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-gray-900">Add New Book</h1>
                    <p className="text-gray-600">
                        Fill in the details below to add a new book to the library collection.
                    </p>
                </div>

                {/* Main Form Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

                    {/* Card Header */}
                    <div className="mb-8">
                        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                            <i className="fa-solid fa-book-bookmark text-gray-700"></i>
                            Book Details
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            All fields marked with * are required
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Image URL */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Book Cover Image URL *</span>
                            </label>
                            <div className="relative">
                                <input
                                    name="image"
                                    type="url"
                                    placeholder="https://example.com/book-cover.jpg"
                                    className="input input-bordered w-full bg-white pr-12"
                                />
                                <div className="absolute top-0 right-0 h-full px-4 flex items-center justify-center bg-gray-50 border-1 border-gray-200 rounded-r-lg text-gray-500">
                                    <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                </div>
                            </div>
                        </div>

                        {/* Book Title */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Book Title *</span>
                            </label>
                            <input
                                name="title"
                                type="text"
                                placeholder="Enter book title"
                                className="input input-bordered w-full bg-white"
                            />
                        </div>

                        {/* Author Name */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Author Name *</span>
                            </label>
                            <input
                                name="author"
                                type="text"
                                placeholder="Enter author name"
                                className="input input-bordered w-full bg-white"
                            />
                        </div>

                        {/* Row: Category & Quantity */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700">Category *</span>
                                </label>
                                <select name="category" defaultValue="" className="select select-bordered w-full bg-white text-gray-500 font-normal" required>
                                    <option value="" disabled>Select category</option>
                                    <option>Fiction</option>
                                    <option>Non-Fiction</option>
                                    <option>Sci-Fi</option>
                                    <option>Mystery</option>
                                    <option>Biography</option>
                                </select>
                            </div>

                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700">Quantity *</span>
                                </label>
                                <input
                                    name="quantity"
                                    type="number"
                                    placeholder="Enter quantity"
                                    className="input input-bordered w-full bg-white"
                                    min="1"
                                />
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Rating *</span>
                            </label>
                            <div className="flex items-center gap-2">
                                <div className="rating rating-md">
                                    <input value="1" type="radio" name="rating" className="mask mask-star-2 bg-gray-300" />
                                    <input value="2" type="radio" name="rating" className="mask mask-star-2 bg-gray-300" defaultChecked />
                                    <input value="3" type="radio" name="rating" className="mask mask-star-2 bg-gray-300" />
                                    <input value="4" type="radio" name="rating" className="mask mask-star-2 bg-gray-300" />
                                    <input value="5" type="radio" name="rating" className="mask mask-star-2 bg-gray-300" />
                                </div>
                                <span className="text-sm text-gray-500 ml-2">(0.0) Click to rate</span>
                            </div>
                        </div>

                        {/* Short Description */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Short Description *</span>
                            </label>
                            <textarea
                                name="description"
                                className="textarea textarea-bordered h-32 bg-white w-full"
                                placeholder="Enter a brief description of the book..."
                            ></textarea>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 pt-4">
                            <button type="submit" className="btn bg-[#1B3764] hover:bg-[#152b4d] text-white px-8 flex-1 border-none rounded-lg text-base h-12">
                                Add Book
                            </button>
                            <button type="button" className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-800 px-8 rounded-lg text-base h-12">
                                Reset Form
                            </button>
                        </div>

                    </form>
                </div>

                {/* Info Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <h3 className="font-bold text-gray-900 text-lg mb-3">About Adding Books</h3>
                    <div className="space-y-4 text-sm text-gray-600">
                        <p>
                            When adding a new book to our library collection, please ensure all information is accurate and complete. This helps our members find and enjoy the books they're looking for.
                        </p>
                        <p>
                            Books go through a review process before being made available to members. You'll receive a notification once your submission has been approved.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AddBook;
