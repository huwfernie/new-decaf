import './styles.scss';
import Section from '../../components/section';
import Card from "../../components/Card"

function HallOfFame() {
  return (
    <Section name="hall-of-fame">
      <h2 className="section-headline">Hall of Fame</h2>
      <div className="grid">
        <Card
          title="Bialetti Moka Deka Decaffeinated Ground Coffee"
          imageUrl="https://johnlewis.scene7.com/is/image/JohnLewis/238742028?$rsp-pdp-port-640-82$"
          cardText="Bialetti's Moka Deka decaffeinated ground coffee has a pleasant aroma and a strong structure, giving you the flavour and pleasure of a real espresso. The medium roasting gives this coffee delicious aromatic notes of cereals and toasted bread. It's perfectly suited to Bialetti's Moka coffee maker and is traditionally roasted in Italy."
          linkUrl="https://www.johnlewis.com/bialetti-moka-deka-decaffeinated-ground-coffee-250g/p5112688"
        />
        <Card
          title="Six 'til Midnight Swiss Water Decaf (Organic)"
          imageUrl="https://katacoffeeroasters.co.uk/cdn/shop/products/decaf_1024x1024@2x.jpg?v=1633121485"
          cardText="It's not often that you get a decaf that can fool the coffee geek in your life - but this one might just do it. It's rich, full bodied and has some distinct notes of dark fruits. It produces a rich crema as an espresso and is a real all rounder."
          linkUrl="https://katacoffeeroasters.co.uk/products/copy-of-peru-david-guevara-armijos"
        />
        <Card
          title="Decaf Coffee"
          imageUrl="https://volcanocoffeeworks.com/cdn/shop/files/200G_decaf_768x768_crop_center.png?v=1690967577"
          cardText="This decaf coffee is packed with flavour and smoothness, with notes of maple syrup, green grape and dark chocolate caramel. This coffee is made using the chemical-free C02 water method with beans from Peru. We love this delicious coffee for the flavour without the caffeine."
          linkUrl="https://volcanocoffeeworks.com/products/decaf-coffee"
        />
        <Card
          title="GRIND"
          imageUrl="https://grind.co.uk/cdn/shop/files/227g_Bag_wholebean_house_1000x.png?v=1675169114"
          cardText="This decaf is the best we've ever had. Processed using the Natural EA method, meaning its good for the environment whilst preserving the coffee's original flavours."
          linkUrl="https://grind.co.uk/products/taster-pack-coffee"
        />
      </div>
    </Section>
  );
}

export default HallOfFame;
