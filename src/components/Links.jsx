import { pageLinks } from '../data';

const Links = ({ navlinks, navlink }) => {
  return (
    <ul className={navlinks} id="nav-links">
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a className={navlink} href={href}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
