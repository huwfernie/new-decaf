import './styles.scss';
import Section from '../../components/section';
import Card from "../../components/Card"

function HallOfFame() {
  return (
    <Section name="hall-of-fame">
      <h2 className="section-headline">Hall of Fame</h2>
      <div className="grid">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Section>
  );
}

export default HallOfFame;
