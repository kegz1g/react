import { createBrowserRouter } from "react-router-dom"
import CatalogPage from "../pages/CatalogPage"
import HomePage from "../pages/Homepage"
import UserPage from "../pages/UserPage"
import FavouritePage from "../pages/FavouritePage"
import Root from "../pages/Root"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/catalog",
                element: <CatalogPage />,
            },
            {
                path: "/user",
                element: <UserPage />,
            },
            {
                path: "/favourite",
                element: <FavouritePage />,
            },
          
        ]
    }
])

export default router