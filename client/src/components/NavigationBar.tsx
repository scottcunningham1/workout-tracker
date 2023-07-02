import { NavLink } from "react-router-dom";
import { appPaths } from "../Routes";
import Container from "./Container";

const NavigationBar = () => {
    return (
        <Container>
            <nav className="h-20 flex items-center">
                <p className="font-bold text-lg">Workout Tracker</p>
                <ul className="flex items-center font-semibold gap-4 ml-auto">
                    <li>
                        <NavLink to={appPaths.home} className={({ isActive }) =>
                            isActive ? "underline" : ""
                        }>Home</NavLink>
                    </li>
                </ul>
            </nav>
        </Container>
    );
};

export default NavigationBar;