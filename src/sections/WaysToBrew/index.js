import './styles.scss';
import Section from '../../components/section';
import Link from "../../components/Link";

function WaysToBrew({ data }) {
  const { headline, body, learnUrl, buyUrl, image } = data;

  return (
    <Section name="ways-to-brew">
      <div className="grid">
        <div className="grid-left grid-50">
          <img src={ image } className="image" alt="bag of coffee beans" />
        </div>
        <div className="grid-right grid-50">
          <h2>Ways to Brew</h2>
          <h3>{ headline }</h3>
          <p>{ body }</p>
        </div>
      </div>
      <div className="link-wrapper">
        <Link text="Learn More" icon="external" url={ learnUrl } />
        <Link text="Buy Now" icon="external" url={ buyUrl } />
      </div>
    </Section>
  );
}

export default WaysToBrew;
