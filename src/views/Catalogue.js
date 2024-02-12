import { useEffect, useState, useCallback } from 'react';
import NavigationBar from '../components/NavigationBar';
import Hero from '../sections/catalogue/Hero';
import Filters from '../sections/catalogue/Filters';
import CatalogueList from '../sections/catalogue/CatalogueList';
import Footer from '../sections/shared/Footer';
import Menu from '../sections/home/Menu';

const pageData = {

}

function Catalogue() {
  const [showMenu, setShowMenu] = useState(false);

  // close menu on Escape key
  const onKeyUp = useCallback((event) => {
    if (event.keyCode === 27) {
      setShowMenu(false);
    }
  }, []);

  useEffect(() => {
    if (showMenu) {
      window.addEventListener("keyup", onKeyUp);
    } else {
      window.removeEventListener("keyup", onKeyUp);
    }
  }, [showMenu, onKeyUp])

  return (
    <div className="page-catalogue">
      <NavigationBar setShowMenu={setShowMenu} />
      <Hero />
      <Filters />
      <CatalogueList />
      <Footer data={pageData} />
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}

export default Catalogue;
