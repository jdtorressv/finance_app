import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../Pages /HomePage/Homepage";
import SearchPage from "../Pages /SearchPage/SearchPage";
import CompanyPage from "../Pages /CompanyPage/CompanyPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Homepage /> },
            { path: "search", element: <SearchPage /> },
            { path: "company/:ticker", element: <CompanyPage /> }
        ]
    },
    {
    }
])