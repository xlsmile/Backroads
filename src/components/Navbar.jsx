import logo from '../images/logo.svg';
import { socialLinks } from '../data';
import Links from './Links';

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
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <a className="nav-icon" href={href} target="_blank" rel="noreferrer">
                  <i className={`fab fa-${icon}`} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
