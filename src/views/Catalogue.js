import { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Hero from '../sections/catalogue/Hero';
import Filters from '../sections/catalogue/Filters';
import CatalogueList from '../sections/catalogue/CatalogueList';
import Footer from '../sections/shared/Footer';
import Menu from '../sections/shared/Menu';
import { useMenu } from '../hooks/useMenu';

import { pageData, filtersData } from '../sections/catalogue/data';

function Catalogue() {
  const menu = useMenu();
  const [filters, setFilters] = useState(filtersData);

  return (
    <div className="page-catalogue">
      <NavigationBar menu={menu} />
      <Hero />
      <Filters data={filters} setFilters={setFilters} />
      <CatalogueList items={pageData.results} />
      <Footer data={pageData} />
      <Menu menu={menu} />
    </div>
  );
}

export default Catalogue;
