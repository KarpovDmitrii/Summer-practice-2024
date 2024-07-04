import logo from '../assets/marvel-logo.png';
import './header.scss';
import { NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__content">
          <img src={logo} alt="" className="header__logo" />
          <nav id="navigation" className="header__links">
            <NavLink to="/characters" className="header__link">
              Characters
            </NavLink>
            <NavLink to="/comics" className="header__link">
              Comics
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};
