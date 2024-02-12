import NavigationBar from '../components/NavigationBar';
import Hero from '../sections/catalogue/Hero';
import Filters from '../sections/catalogue/Filters';
import CatalogueList from '../sections/catalogue/CatalogueList';
import Footer from '../sections/shared/Footer';
import Menu from '../sections/shared/Menu';
import { useMenu } from '../hooks/useMenu';

const pageData = {

}

function Catalogue() {
  const menu = useMenu();

  return (
    <div className="page-catalogue">
      <NavigationBar menu={menu} />
      <Hero />
      <Filters />
      <CatalogueList />
      <Footer data={pageData} />
      <Menu menu={menu} />
    </div>
  );
}

export default Catalogue;
