import { socialLinks } from '../data';

const Icons = ({ navIcons, navIcon }) => {
  return (
    <ul className={navIcons}>
      {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <li key={id}>
            <a href={href} target="_blank" rel="noreferrer" className={navIcon}>
              <i className={`fab fa-${icon}`}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Icons;
