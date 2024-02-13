import './styles.scss';
import Section from '../../../components/section';
// import Picture from '../../../components/Picture';

function Hero() {
  return (
    <Section name="hero">
      <h1 className="hero-headline">Catalogue</h1>
      <p className="hero-tagline">Every bean we've ever seen.</p>
    </Section>
  );
}

export default Hero;
