import Links from './Links';
import Icons from './Icons';

const Footer = () => {
  return (
    <footer className="section footer">
      <Links navlinks="footer-links" navlink="footer-link" />
      <Icons navIcons="footer-icons" navIcon="footer-icon" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
