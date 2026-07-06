import { createBrowserRouter } from "react-router-dom";

import DebtorsPage from "../pages/DebtorsPage/DebtorsPage";
import DebtorPage from "../pages/DebtorPage/DebtorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DebtorsPage />
    },
    {
        path: "/debtor/:id",
        element: <DebtorPage />
    }
]);