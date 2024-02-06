import './styles.scss';
import Section from '../../components/section';
import Link from '../../components/Link';

function BeanOfTheWeek() {
  return (
    <Section name="bean-of-the-week">
      <div className="grid">
        <div className="grid-left grid-50">
          <h2>Bean of the Week</h2>
          <h3>Decaf Coffee Beans from Lavazza</h3>
          <p>A well-balanced, aromatic blend. Experience an unforgettable, full-bodied flavour. The ideal blend if you want to avoid caffeine without giving up the luxury of Italian coffee.</p>
          <div className="link-wrapper">
            <Link text="Link" icon="external" url="https://www.lavazza.co.uk/en/coffee-beans/dek" />
          </div>
        </div>
        <div className="grid-right grid-50">
          <img
          src="https://www.lavazza.co.uk/content/dam/lavazza-athena/b2c/pdp-pag-prodotto/coffee/hero-product-banner/2-main-asset-coffee/decaffeinato/2744-d-decaffeinato-beans.png"
          className="image"
          alt="bag of coffee beans" />
        </div>
      </div>
    </Section>
  );
}

export default BeanOfTheWeek;
