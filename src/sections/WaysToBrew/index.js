import './styles.scss';
import Section from '../../components/section';
import Link from "../../components/Link";

function WaysToBrew() {
  return (
    <Section name="ways-to-brew">
      <div className="grid">
        <div className="grid-left grid-50">
          <img src="/images/logo192.png" className="App-logo" alt="bag of coffee beans" />
        </div>
        <div className="grid-right grid-50">
          <h2>Ways to Brew</h2>
          <h3>Mocha Pot</h3>
          <p>An Italian classic</p>
        </div>
      </div>
      <Link text="Learn More" icon="external" url="" />
      <Link text="Buy Now" icon="external" url="" />
    </Section>
  );
}

export default WaysToBrew;
