import './styles.scss';
import Section from '../../../components/section';
import Picture from '../../../components/Picture';

function Hero() {
  const heroImage = {
    base: "/images/hero/xsmall.png",
    versions: ["xsmall", "small", "medium", "large", "xlarge"]
  }
  return (
    <Section name="hero">
      <h1 className="hero-headline">New Decaf</h1>
      <p className="hero-tagline" >Brew Something New</p>
      <div className="picture-wrapper">
        <Picture image={heroImage} altText="mug of coffee" />
      </div>
    </Section>
  );
}

export default Hero;
