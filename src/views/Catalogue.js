import NavigationBar from '../components/NavigationBar';
import Hero from '../sections/catalogue/Hero';
import Filters from '../sections/catalogue/Filters';
import CatalogueList from '../sections/catalogue/CatalogueList';
import Footer from '../sections/shared/Footer';
import Menu from '../sections/shared/Menu';
import { useMenu } from '../hooks/useMenu';

const pageData = {
  results: [
    {
      headline: "Bialetti Moka Deka Decaffeinated Ground Coffee",
      body: "Bialetti's Moka Deka decaffeinated ground coffee has a pleasant aroma and a strong structure, giving you the flavour and pleasure of a real espresso. The medium roasting gives this coffee delicious aromatic notes of cereals and toasted bread. It's perfectly suited to Bialetti's Moka coffee maker and is traditionally roasted in Italy.",
      url: "https://www.johnlewis.com/bialetti-moka-deka-decaffeinated-ground-coffee-250g/p5112688",
      image: {
        base: "/images/hall_of_fame/bialetti_deka_xsmall.png",
        versions: ["xsmall", "small", "medium", "large", "xlarge"]
      },
      process: "",
      origin: "",
      singleOrigin: false,
      roast: "Dark"
    },
    {
      headline: "Six 'til Midnight Swiss Water Decaf (Organic)",
      body: "It's not often that you get a decaf that can fool the coffee geek in your life - but this one might just do it. It's rich, full bodied and has some distinct notes of dark fruits. It produces a rich crema as an espresso and is a real all rounder.",
      url: "https://katacoffeeroasters.co.uk/products/copy-of-peru-david-guevara-armijos",
      image: {
        base: "/images/hall_of_fame/kata_xsmall.png",
        versions: ["xsmall", "small", "medium", "large", "xlarge"]
      },
      process: "Swiss Water",
      origin: "Brazil",
      singleOrigin: true,
      roast: "Medium"
    },
    {
      headline: "Volcano Coffee Works",
      body: "This decaf coffee is packed with flavour and smoothness, with notes of maple syrup, green grape and dark chocolate caramel. This coffee is made using the chemical-free C02 water method with beans from Peru. We love this delicious coffee for the flavour without the caffeine.",
      url: "https://volcanocoffeeworks.com/products/decaf-coffee",
      image: {
        base: "/images/hall_of_fame/volcano_xsmall.png",
        versions: ["xsmall", "small", "medium", "large", "xlarge"]
      },
      process: "Carbon Dioxide",
      origin: "Peru",
      singleOrigin: true,
      roast: "Medium"
    },
    {
      headline: "GRIND - House Blend Decaf",
      body: "This decaf is the best we've ever had. Processed using the Natural EA method, meaning its good for the environment whilst preserving the coffee's original flavours.",
      url: "https://grind.co.uk/products/taster-pack-coffee",
      image: {
        old: "/images/external/grind_decaf.webp",
        base: "/images/hall_of_fame/grind_xsmall.png",
        versions: ["xsmall", "small", "medium", "large", "xlarge"]
      },
      process: "Swiss Water",
      origin: "Mexico",
      singleOrigin: true,
      roast: "Medium"
    }
  ]
}

function Catalogue() {
  const menu = useMenu();

  return (
    <div className="page-catalogue">
      <NavigationBar menu={menu} />
      <Hero />
      <Filters />
      <CatalogueList items={pageData.results} />
      <Footer data={pageData} />
      <Menu menu={menu} />
    </div>
  );
}

export default Catalogue;
