import './styles.scss';
import Section from '../../components/section';
import Link from '../../components/Link';

function Footer({ data }) {
  return (
    <Section name="footer">
      <div className="grid">
        <div className="grid-left grid-50">
          <img src="/temp/footer-logo.png" className="footer-logo" alt="bag of coffee beans" />
        </div>
        <div className="grid-right grid-50">
          <ul>
            <li><Link text="How" icon="none" url="https://www.horshamcoffeeroaster.co.uk/blogs/news/decaffeinated-coffee-beans" /></li>
            <li><Link text="Why" icon="none" url="https://baristaandco.com/blogs/news/5-health-benefits-drinking-decaf-coffee" /></li>
            {/* <li><Link text="Catalogue" icon="none" url="/catalogue" /></li> */}
            {/* <li><Link text="About" icon="none" url="/about" /></li> */}
            {/* <li><Link text="Join" icon="none" url="/join" /></li> */}
            {/* <li><Link text="Contact" icon="none" url="/contatct" /></li> */}
          </ul>
        </div>
      </div>
      <ul className="legal">
        <li className="legal-item"><strong>Hero Image:</strong>https://www.illy.com/en-ww/coffee/decaffeinated-coffee</li>
        <li className="legal-item"><strong>Bean of the Week Image:</strong>{data.beanOfTheWeek.linkUrl}</li>
        <li className="legal-item"><strong>Ways to Brew Image:</strong>{data.waysToBrew.buyUrl}</li>
        <li className="legal-item"><strong>Hall of fame 1:</strong>{data.hallOfFame[0].url}</li>
        <li className="legal-item"><strong>Hall of fame 2:</strong>{data.hallOfFame[1].url}</li>
        <li className="legal-item"><strong>Hall of fame 3:</strong>{data.hallOfFame[2].url}</li>
        <li className="legal-item"><strong>Hall of fame 4:</strong>{data.hallOfFame[3].url}</li>
      </ul>
    </Section>
  );
}

export default Footer;
