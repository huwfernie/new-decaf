import './styles.scss';
import Section from '../../components/section';
import Link from "../../components/Link";

function WaysToBrew() {
  return (
    <Section name="ways-to-brew">
      <div className="grid">
        <div className="grid-left grid-50">
          <img src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/m/o/moka_express.png" className="image" alt="bag of coffee beans" />
        </div>
        <div className="grid-right grid-50">
          <h2>Ways to Brew</h2>
          <h3>Bialetti Moka Express</h3>
          <p>This is the original coffee maker, a symbol of Made in Italy quality, which offers the experience of the true Italian ritual of preparing a delicious cup of coffee.</p>
        </div>
      </div>
      <div className="link-wrapper">
        <Link text="Learn More" icon="external" url="https://en.wikipedia.org/wiki/Moka_pot" />
        <Link text="Buy Now" icon="external" url="https://www.bialetti.com/it_en/moka-express.html" />
      </div>
    </Section>
  );
}

export default WaysToBrew;
