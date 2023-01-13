import { socialLinks } from '../data';
import Links from './Links';

const Footer = () => {
  return (
    <footer className="section footer">
      <Links navlinks="footer-links" navlink="footer-link" />
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <li key={id}>
              <a href={href} target="_blank" rel="noreferrer" className="footer-icon">
                <i className={`fab fa-${icon}`}></i>
              </a>
            </li>
          );
        })}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
