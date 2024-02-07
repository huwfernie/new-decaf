import './styles.scss';
import Section from '../../components/section';

function Hero() {
  return (
    <Section name="hero">
      <h1 className="hero-headline">New Decaf</h1>
      <p className="hero-tagline" >Brew Something New</p>
      <picture className="hero-picture">
        <source srcSet="/images/blanc/large.png" media="(min-width: 992px)" />
        <source srcSet="/images/blanc/medium.png" media="(min-width: 768px)" />
        <source srcSet="/images/blanc/small.png" media="(min-width: 576px)" />
        <img src="/images/blanc/xsmall.png" className="hero-image" alt="mug of coffee" />
      </picture>
    </Section>
  );
}

export default Hero;
