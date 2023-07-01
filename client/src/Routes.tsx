import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";

export const appPaths = {
    home: "/",
}

const AppRoutes = () => (
    <Routes>
        <Route path={appPaths.home} element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
);

export default AppRoutes;