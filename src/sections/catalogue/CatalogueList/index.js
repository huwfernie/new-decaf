import './styles.scss';
import Section from '../../../components/section';
import CatalogueListItem from '../../../components/CatalogueListItem';

function CatalogueList({ items }) {
  return (
    <Section name="catalogue-list">
      <h2 className="filters-headline">Catalogue List</h2>
      <div className="catalogue-list">
        {
          items.map((item, index) => {
            return <CatalogueListItem data={item} key={index} />
          })
        }
      </div>
    </Section>
  );
}

export default CatalogueList;