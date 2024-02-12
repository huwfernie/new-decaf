import './styles.scss';

function NavigationMenu({ menu }) {
    return (
        <nav className="navigation">
            <button className="nav-button" onClick={menu.toggle}>Menu</button>
            {/* <span className="viewport-reveal"></span> */}
        </nav>
    );
}

export default NavigationMenu;
