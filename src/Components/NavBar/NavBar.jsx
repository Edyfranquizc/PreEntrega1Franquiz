import { Link, NavLink } from "react-router-dom";
import { CartWidget } from '../CartWidget/CartWidget';
import logo from '/game-overfavicon(5).svg';
import './NavBar.css'


export const NavBar = () => {
    return (
        <div className='navbar'>
            <img src={logo} className="logo-game" alt="game-logo"/>
            <ul className='links'>
            <li><NavLink className={({isActive}) => isActive ? 'active' : 'links' }to='/'>Inicio</NavLink></li>
            <li>
            <Link to="/category/Notebook">Notebook </Link>
            </li>
            <li>
            <Link to="/category/KitGamer">Kit Gamer</Link>
            </li>
            <li><CartWidget/></li>
            </ul>
            
        </div>
            
    )
}

