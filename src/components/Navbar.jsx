import logo from '../images/logo.svg';
import Links from './Links';
import Icons from './Icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <Links navlinks="nav-links" navlink="nav-link" />
        <Icons navIcons="nav-icons" navIcon="nav-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
