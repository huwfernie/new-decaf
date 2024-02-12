import './styles.scss';
import Section from '../../../components/section';
import { Link } from "react-router-dom";

function Menu({ menu }) {
  const className = menu.isOpen ? "menu visible" : "menu hidden";
  return (
    <Section name={className} onClick={menu.close}>
      <p>Menu</p>
      <ul className="menu-list">
        <li className="list-item"><Link to="/#section-bean-of-the-week">Bean of the Week link</Link></li>
        <li className="list-item"><Link to="/#section-ways-to-brew">Ways to Brew</Link></li>
        <li className="list-item"><Link to="/catalogue">Catalogue</Link></li>
        <li className="list-item">Close</li>
      </ul>
    </Section>
  );
}

export default Menu;
