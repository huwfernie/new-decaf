
import NavigationMenu from '../components/NavigationMenu';
import Hero from '../sections/Hero';
import BeanOfTheWeek from '../sections/BeanOfTheWeek';
import WaysToBrew from '../sections/WaysToBrew';
import HallOfFame from '../sections/HallOfFame';
import Footer from '../sections/Footer';

import './App.css';

function App() {
  return (
    <>
      <NavigationMenu />
      <Hero />
      <BeanOfTheWeek />
      <WaysToBrew />
      <HallOfFame />
      <Footer />
    </>
  );
}

export default App;
