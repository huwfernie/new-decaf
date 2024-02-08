import './styles.scss';
import Section from '../../components/section';

function Menu({ showMenu, setShowMenu }) {
  const className = showMenu ? "menu visible" : "menu hidden";
  return (
    <Section name={className} onClick={() => setShowMenu(false)}>
      <p>Menu</p>
      <ul className="menu-list">
        <li className="list-item"><a href="#section-bean-of-the-week">Bean of the Week</a></li>
        <li className="list-item"><a href="#section-ways-to-brew">Ways to Brew</a></li>
        <li className="list-item"><a href="/catalogue">Catalogue</a></li>
        <li className="list-item">Close</li>
      </ul>
    </Section>
  );
}

export default Menu;
