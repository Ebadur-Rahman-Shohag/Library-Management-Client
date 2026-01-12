import React from "react";

function BorrowedBooks() {
    // Mock data to match the image
    const borrowedBooks = [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            category: "Novel",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
            borrowedDate: "1/15/2024",
            returnBy: "2/15/2024",
            isOverdue: true,
        },
        {
            id: 2,
            title: "Dune",
            author: "Frank Herbert",
            category: "Sci-Fi",
            image: "https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg",
            borrowedDate: "1/20/2024",
            returnBy: "2/20/2024",
            isOverdue: true,
        },
        {
            id: 3,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            category: "Novel",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
            borrowedDate: "1/25/2024",
            returnBy: "2/25/2024",
            isOverdue: true,
        }
    ];

    return (
        <div className="min-h-screen bg-[#F6F9FB] py-10 px-4">
            <div className="max-w-5xl mx-auto space-y-6">

                {/* Header */}
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold text-gray-900">Borrowed Books</h1>
                    <p className="text-gray-600">You have <span className="font-semibold text-gray-900">{borrowedBooks.length} books</span> currently borrowed</p>
                </div>

                {/* Book List */}
                <div className="space-y-4">
                    {borrowedBooks.map((book) => (
                        <div key={book.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row gap-6 items-start">

                            {/* Book Image */}
                            <div className="w-full md:w-32 h-44 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 w-full space-y-4">

                                {/* Top Row: Info & Action */}
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md uppercase tracking-wide border border-gray-200">
                                                {book.category}
                                            </span>
                                            {book.isOverdue && (
                                                <span className="px-2 py-1 bg-red-50 text-red-600 text-xs font-semibold rounded-md uppercase tracking-wide border border-red-100">
                                                    Overdue
                                                </span>
                                            )}
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900">{book.title}</h2>
                                        <p className="text-gray-500 font-medium">{book.author}</p>
                                    </div>

                                    <button className="btn btn-outline border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 font-medium normal-case gap-2 px-6">
                                        <i className="fa-solid fa-rotate-left text-sm text-gray-400"></i>
                                        Return Book
                                    </button>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gray-100 w-full"></div>

                                {/* Details Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                    {/* Borrowed Date */}
                                    <div className="flex items-start gap-3">
                                        <div className="h-10 w-10 text-gray-400 flex items-center justify-center">
                                            <i className="fa-regular fa-calendar text-xl"></i>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Borrowed</p>
                                            <p className="text-sm font-semibold text-gray-700 mt-0.5">{book.borrowedDate}</p>
                                        </div>
                                    </div>

                                    {/* Return By Date */}
                                    <div className="flex items-start gap-3">
                                        <div className="h-10 w-10 text-gray-400 flex items-center justify-center">
                                            <i className="fa-regular fa-calendar-check text-xl"></i>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Return By</p>
                                            <p className={`text-sm font-semibold mt-0.5 ${book.isOverdue ? 'text-red-500' : 'text-gray-700'}`}>
                                                {book.returnBy}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Pages (Mock Data) */}
                                    <div className="flex items-start gap-3">
                                        <div className="h-10 w-10 text-gray-400 flex items-center justify-center">
                                            <i className="fa-solid fa-book-open text-xl"></i>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Pages</p>
                                            <p className="text-sm font-semibold text-gray-700 mt-0.5">386</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default BorrowedBooks;