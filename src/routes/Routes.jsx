import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";

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
                path: "/about",
                element: <h1>About</h1>,
            },
        ],
    },
]);

export default router;
