import './styles.scss';
import Section from '../../components/section';

function Hero() {
  return (
    <Section name="hero">
      <h1 className="hero-headline">New Decaf</h1>
      <p className="hero-tagline" >Brew Something New</p>
      <img src="/temp/hero.jpg" className="hero-image" alt="mug of coffee" />
    </Section>
  );
}

export default Hero;
