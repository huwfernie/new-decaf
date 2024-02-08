import './styles.scss';

function NavigationMenu({ setShowMenu }) {
    return (
        <nav className="navigation">
            <span onClick={() => setShowMenu((current) => !current)}>Menu</span>
            <span className="viewport-reveal"></span>
        </nav>
    );
}

export default NavigationMenu;
