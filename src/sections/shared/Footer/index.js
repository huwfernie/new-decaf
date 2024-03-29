import './styles.scss';
import Section from '../../../components/section';
import Link from '../../../components/Link';

function Footer({ children }) {
  return (
    <Section name="footer">
      <div className="grid">
        <div className="grid-left grid-50">
          <img src="/images/footer/footer-logo.png" className="footer-logo" alt="bag of coffee beans" />
        </div>
        <div className="grid-right grid-50">
          <ul>
            <li><Link text="How" icon="none" url="https://www.horshamcoffeeroaster.co.uk/blogs/news/decaffeinated-coffee-beans" /></li>
            <li><Link text="Why" icon="none" url="https://baristaandco.com/blogs/news/5-health-benefits-drinking-decaf-coffee" /></li>
            <li><Link text="Catalogue" icon="none" url="/catalogue" /></li>
            <li><Link text="About" icon="none" url="/about" /></li>
            {/* <li><Link text="Join" icon="none" url="/join" /></li> */}
            {/* <li><Link text="Contact" icon="none" url="/contatct" /></li> */}
          </ul>
        </div>
      </div>
      <ul className="legal">
        { children }
      </ul>
    </Section>
  );
}

export default Footer;
