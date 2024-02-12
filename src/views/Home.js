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

const appData = {
  beanOfTheWeek: {
    headline: "Decaf Coffee Beans from Lavazza",
    body: "A well-balanced, aromatic blend. Experience an unforgettable, full-bodied flavour. The ideal blend if you want to avoid caffeine without giving up the luxury of Italian coffee.",
    linkUrl: "https://www.lavazza.co.uk/en/coffee-beans/dek",
    image: {
      old: "https://www.lavazza.co.uk/content/dam/lavazza-athena/b2c/pdp-pag-prodotto/coffee/hero-product-banner/2-main-asset-coffee/decaffeinato/2744-d-decaffeinato-beans.png",
      base: "/images/bean_of_the_week/xsmall.png",
      versions: ["xsmall", "small", "medium", "large"]
    }
  },
  waysToBrew: {
    headline: "Bialetti Moka Express",
    body: "This is the original coffee maker, a symbol of Made in Italy quality, which offers the experience of the true Italian ritual of preparing a delicious cup of coffee.",
    learnUrl: "https://en.wikipedia.org/wiki/Moka_pot",
    buyUrl: "https://www.bialetti.com/it_en/moka-express.html",
    image: {
      old: "https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/m/o/moka_express.png",
      base: "/images/ways_to_brew/xsmall.png",
      versions: ["xsmall", "small", "medium", "large"]
    }
  },
  hallOfFame: [
    {
      headline: "Bialetti Moka Deka Decaffeinated Ground Coffee",
      body: "Bialetti's Moka Deka decaffeinated ground coffee has a pleasant aroma and a strong structure, giving you the flavour and pleasure of a real espresso. The medium roasting gives this coffee delicious aromatic notes of cereals and toasted bread. It's perfectly suited to Bialetti's Moka coffee maker and is traditionally roasted in Italy.",
      url: "https://www.johnlewis.com/bialetti-moka-deka-decaffeinated-ground-coffee-250g/p5112688",
      image: {
        old: "/images/external/bialetti_decaf.jpeg",
        base: "/images/hall_of_fame/bialetti_deka_xsmall.png",
        versions: ["xsmall", "small", "medium", "large", "xlarge"]
      }
    },
    {
      headline: "Six 'til Midnight Swiss Water Decaf (Organic)",
      body: "It's not often that you get a decaf that can fool the coffee geek in your life - but this one might just do it. It's rich, full bodied and has some distinct notes of dark fruits. It produces a rich crema as an espresso and is a real all rounder.",
      url: "https://katacoffeeroasters.co.uk/products/copy-of-peru-david-guevara-armijos",
      image: {
        old: "/images/external/six_till_midnight_decaf.webp",
        base: "/images/hall_of_fame/kata_xsmall.png",
        versions: ["xsmall", "small", "medium", "large", "xlarge"]
      }
    },
    {
      headline: "Decaf Coffee",
      body: "This decaf coffee is packed with flavour and smoothness, with notes of maple syrup, green grape and dark chocolate caramel. This coffee is made using the chemical-free C02 water method with beans from Peru. We love this delicious coffee for the flavour without the caffeine.",
      url: "https://volcanocoffeeworks.com/products/decaf-coffee",
      image: {
        old: "/images/external/volcano_decaf.webp",
        base: "/images/hall_of_fame/volcano_xsmall.png",
        versions: ["xsmall", "small", "medium", "large", "xlarge"]
      }
    },
    {
      headline: "GRIND",
      body: "This decaf is the best we've ever had. Processed using the Natural EA method, meaning its good for the environment whilst preserving the coffee's original flavours.",
      url: "https://grind.co.uk/products/taster-pack-coffee",
      image: {
        old: "/images/external/grind_decaf.webp",
        base: "/images/hall_of_fame/grind_xsmall.png",
        versions: ["xsmall", "small", "medium", "large", "xlarge"]
      }
    }
  ]
}

function App() {
  useHashScroll();
  const menu = useMenu();

  return (
    <div className="page-home">
      <NavigationBar menu={menu} />
      <Hero />
      <Manifesto />
      <BeanOfTheWeek data={appData.beanOfTheWeek} />
      <WaysToBrew data={appData.waysToBrew} />
      <HallOfFame data={appData.hallOfFame} />
      <Footer>
        <li className="legal-item"><strong>Hero Image:</strong>https://www.illy.com/en-ww/coffee/decaffeinated-coffee</li>
        <li className="legal-item"><strong>Bean of the Week Image:</strong>{appData.beanOfTheWeek.linkUrl}</li>
        <li className="legal-item"><strong>Ways to Brew Image:</strong>{appData.waysToBrew.buyUrl}</li>
        <li className="legal-item"><strong>Hall of fame 1:</strong>{appData.hallOfFame[0].url}</li>
        <li className="legal-item"><strong>Hall of fame 2:</strong>{appData.hallOfFame[1].url}</li>
        <li className="legal-item"><strong>Hall of fame 3:</strong>{appData.hallOfFame[2].url}</li>
        <li className="legal-item"><strong>Hall of fame 4:</strong>{appData.hallOfFame[3].url}</li>
        <li className="legal-item"><strong>Favicon:</strong><a href="https://www.flaticon.com/free-icons/coffee" title="coffee icons">Coffee icons created by Freepik - Flaticon</a></li>
      </Footer>
      <Menu menu={menu} />
    </div>
  );
}

export default App;
