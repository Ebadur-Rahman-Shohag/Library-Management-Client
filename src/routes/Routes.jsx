import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllBooks from "../pages/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks";
import AddBook from "../pages/AddBook";
import ProtectedRoute from "../components/ProtectedRoute";
import SinglePage from "../pages/SinglePage";
import UpdatePage from "../pages/UpdatePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "all-books",
                element: <AllBooks />,
                loader: async () => {
                    const response = await fetch("http://localhost:5000/api/v1/books");
                    const data = await response.json();
                    return data;
                },
            },
            {
                path: "add-book",
                element: <ProtectedRoute><AddBook /></ProtectedRoute>,
            },
            {
                path: "borrowed-books",
                element: <ProtectedRoute><BorrowedBooks /></ProtectedRoute>,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "book/:id",
                element: <ProtectedRoute><SinglePage /></ProtectedRoute>,
                loader: async ({ params }) => {
                    const response = await fetch(`http://localhost:5000/api/v1/books/${params.id}`);
                    const data = await response.json();
                    return data;
                },
            },
            {
                path: "update-book/:id",
                element: <ProtectedRoute><UpdatePage /></ProtectedRoute>,

            }
        ],
    },
]);

export default router;
