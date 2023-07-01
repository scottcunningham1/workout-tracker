import { NavLink } from "react-router-dom";
import { appPaths } from "../Routes";

const NavigationBar = () => {
    return (
        <nav className="h-20 flex items-center px-4 sm:px-6">
            <p className="font-bold text-lg">Workout Tracker</p>
            <ul className="flex items-center font-semibold gap-4 ml-auto">
                <li>
                    <NavLink to={appPaths.home} className={({ isActive }) =>
                        isActive ? "underline" : ""
                    }>Home</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;