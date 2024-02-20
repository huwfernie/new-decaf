import NavigationBar from '../components/NavigationBar';
import Hero from '../sections/about/Hero';
import Footer from '../sections/shared/Footer';
import Menu from '../sections/shared/Menu';
import { useMenu } from '../hooks/useMenu';

function About() {
  const menu = useMenu();

  return (
    <div className="page-about">
      <NavigationBar menu={menu} />
      <Hero />
      <Footer />
      <Menu menu={menu} />
    </div>
  );
}

export default About;
