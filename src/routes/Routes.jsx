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
            },
            {
                path: "update-book/:id",
                element: <ProtectedRoute><UpdatePage /></ProtectedRoute>,
            }
        ],
    },
]);

export default router;
