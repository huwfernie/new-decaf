import './styles.scss';

function NavigationMenu({ setShowMenu }) {
    return (
        <nav className="navigation">
            <button className="nav-button" onClick={() => setShowMenu((current) => !current)}>Menu</button>
            {/* <span className="viewport-reveal"></span> */}
        </nav>
    );
}

export default NavigationMenu;
