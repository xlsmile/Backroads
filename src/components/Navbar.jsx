import logo from '../images/logo.svg';
import { pagesLinks, socialLinks } from '../data';

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

        <ul className="nav-links" id="nav-links">
          {pagesLinks.map((link) => (
            <li key={link.id}>
              <a className="nav-link" href={link.href}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a className="nav-icon" href={link.href} target="_blank" rel="noreferrer">
                <i className={`fab fa-${link.name}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
