import './styles.scss';
import Section from '../../components/section';
import Picture from '../../components/Picture';

function Hero() {
  const heroImage = {
    base: "/images/blanc/xsmall.png",
    versions: ["xsmall", "small", "medium", "large"]
  }
  return (
    <Section name="hero">
      <h1 className="hero-headline">New Decaf</h1>
      <p className="hero-tagline" >Brew Something New</p>
      <Picture image={heroImage} altText="mug of coffee" />
    </Section>
  );
}

export default Hero;
