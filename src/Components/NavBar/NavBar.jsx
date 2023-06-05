import { CartWidget } from '../CartWidget/CartWidget';
import logo from '/game-overfavicon(5).svg';
import './NavBar.css'


export const NavBar = () => {
    return (
        <div className='navbar'>
            <img src={logo} className="logo-game" alt="game-logo"/>
            <ul className='links'>
                <li className='active'>Incio</li>
                <li>Noteboock</li>
                <li>KitGamer</li>
                <li><CartWidget/></li>
            </ul>
            
        </div>
            
    )
}
