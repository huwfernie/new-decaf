import './styles.scss';
import Section from '../../components/section';

function Footer() {
  return (
    <Section name="footer">
      <div className="grid">
        <div className="grid-left grid-50">
          <h4>New Decaf</h4>
          <img src="/images/logo192.png" className="App-logo" alt="bag of coffee beans" />
        </div>
        <div className="grid-right grid-50">
          <ul>
            <li><a href="https://www.horshamcoffeeroaster.co.uk/blogs/news/decaffeinated-coffee-beans">How</a></li>
            <li><a href="https://baristaandco.com/blogs/news/5-health-benefits-drinking-decaf-coffee">Why</a></li>
            {/* <li><a href="/catalogue">Catalogue</a></li> */}
            {/* <li><a href="/about">About</a></li> */}
            {/* <li><a href="/join">Join</a></li> */}
            {/* <li><a href="/contatct">Contact</a></li> */}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Footer;
