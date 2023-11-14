import { NavLink } from "react-router-dom";
import './NavBar.css'
const NavBar = () => {
    return (
        <nav className="NavBar">
            <NavLink to='/cookies'>Cookies</NavLink>
            <NavLink to='/chips'>Chips</NavLink>
            <NavLink to='/candy'>Candy</NavLink>
        </nav>
    )
}
export default NavBar;