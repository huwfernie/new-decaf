import './styles.scss';
import Section from '../../../components/section';

function Hero() {
  return (
    <Section name="hero">
      <h1 className="hero-headline">About New Decaf</h1>
      <p className="hero-tagline">This is a side project from Huw. For code, see github - <a href="https://github.com/huwfernie/new-decaf">GitHub</a>, for other bits or contact, see <a href="https://linkedin.com/in/huwfernie">LinkedIn</a></p>
    </Section>
  );
}

export default Hero;
