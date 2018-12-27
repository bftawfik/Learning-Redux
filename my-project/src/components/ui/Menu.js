import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faHome, faTable } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/Menu.scss'

const Menu = () =>
    <nav className="menu">
        <NavLink to="/" activeClassName="selected">
            <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink to="/add-day" activeClassName="selected">
            <FontAwesomeIcon icon={faCalendarPlus} />
        </NavLink>
        <NavLink to="/list-days" activeClassName="selected">
            <FontAwesomeIcon icon={faTable} />
        </NavLink>
    </nav>

export default Menu
