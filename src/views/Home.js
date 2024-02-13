import NavigationBar from '../components/NavigationBar';
import Hero from '../sections/home/Hero';
import BeanOfTheWeek from '../sections/home/BeanOfTheWeek';
import Manifesto from '../sections/home/Manifesto';
import WaysToBrew from '../sections/home/WaysToBrew';
import HallOfFame from '../sections/home/HallOfFame';
import Footer from '../sections/shared/Footer';
import Menu from '../sections/shared/Menu';
import { useHashScroll } from "../hooks/useHashScroll";
import { useMenu } from "../hooks/useMenu";
import { pageData } from '../sections/home/data';

function App() {
  useHashScroll();
  const menu = useMenu();

  return (
    <div className="page-home">
      <NavigationBar menu={menu} />
      <Hero />
      <Manifesto />
      <BeanOfTheWeek data={pageData.beanOfTheWeek} />
      <WaysToBrew data={pageData.waysToBrew} />
      <HallOfFame data={pageData.hallOfFame} />
      <Footer>
        <li className="legal-item"><strong>Hero Image:</strong>https://www.illy.com/en-ww/coffee/decaffeinated-coffee</li>
        <li className="legal-item"><strong>Bean of the Week Image:</strong>{pageData.beanOfTheWeek.linkUrl}</li>
        <li className="legal-item"><strong>Ways to Brew Image:</strong>{pageData.waysToBrew.buyUrl}</li>
        <li className="legal-item"><strong>Hall of fame 1:</strong>{pageData.hallOfFame[0].url}</li>
        <li className="legal-item"><strong>Hall of fame 2:</strong>{pageData.hallOfFame[1].url}</li>
        <li className="legal-item"><strong>Hall of fame 3:</strong>{pageData.hallOfFame[2].url}</li>
        <li className="legal-item"><strong>Hall of fame 4:</strong>{pageData.hallOfFame[3].url}</li>
        <li className="legal-item"><strong>Favicon:</strong><a href="https://www.flaticon.com/free-icons/coffee" title="coffee icons">Coffee icons created by Freepik - Flaticon</a></li>
      </Footer>
      <Menu menu={menu} />
    </div>
  );
}

export default App;
