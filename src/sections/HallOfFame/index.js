import './styles.scss';
import Section from '../../components/section';
import Card from "../../components/Card"

function HallOfFame({ data }) {
  return (
    <Section name="hall-of-fame">
      <h2 className="section-headline">Hall of Fame</h2>
      <div className="grid">
        {data.map((item, index) => {
          return (
            <Card
              title={item.headline}
              imageUrl={item.image}
              cardText={item.body}
              linkUrl={item.url}
              key={index}
            />
          )
        })}
      </div>
    </Section>
  );
}

export default HallOfFame;
