import './styles.scss';
import Section from '../../components/section';

function Hero() {
  return (
    <Section name="hero">
      <h1 className="hero-headline">New Decaf</h1>
      <img src="/images/logo192.png" className="hero-image" alt="logo" />
      <p className="hero-tagline" >Brew Something New</p>
    </Section>
  );
}

export default Hero;
