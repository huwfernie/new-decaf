import './styles.scss';
import Section from '../../components/section';
import logo from "./logo.svg";

function Hero() {
  return (
    <Section name="hero">
      <h1>New Decaf</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Brew Something New</p>
    </Section>
  );
}

export default Hero;
