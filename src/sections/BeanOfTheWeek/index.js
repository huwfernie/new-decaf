import './styles.scss';
import Section from '../../components/section';
import Link from '../../components/Link';

function BeanOfTheWeek() {
  return (
    <Section name="bean-of-the-week">
      <div className="grid">
        <div className="grid-left grid-50">
          <h2>Bean of the Week</h2>
          <p>This Weeks Bean is standard decaf from Tesco</p>
        </div>
        <div className="grid-right grid-50">
          <img src="/images/logo192.png" className="App-logo" alt="bag of coffee beans" />
        </div>
      </div>
      <Link text="Shop Now" icon="external" url="" />
    </Section>
  );
}

export default BeanOfTheWeek;
