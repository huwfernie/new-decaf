import './styles.scss';
import Section from '../../components/section';
import Link from '../../components/Link';
import Picture from '../../components/Picture';

function BeanOfTheWeek({ data }) {
  const { headline, body, linkUrl, image } = data;
  return (
    <Section name="bean-of-the-week">
      <div className="grid">
        <div className="grid-left grid-50">
          <h2>Bean of the Week</h2>
          <h3>{headline}</h3>
          <p>{body}</p>
          <div className="link-wrapper">
            <Link text="Link" icon="external" url={linkUrl} />
          </div>
        </div>
        <div className="grid-right grid-50">
          <Picture image={image} altText="bag of coffee beans" />
        </div>
      </div>
    </Section>
  );
}

export default BeanOfTheWeek;
