import './styles.scss';
import Section from '../../../components/section';
import ToggleButton from '../../../components/ToggleButton';

function Filters({ data, setFilters }) {
  const _headings = Object.keys(data);
  
  function handleFilterChange(heading, index) {
    let _filters = {...data};
    _filters[heading][index].selected = !data[heading][index].selected;
    setFilters(_filters);
  }

  return (
    <Section name="filters">
      <div className="grid">
          {_headings.map((heading, index) => {
            return (
              <div key={index} className="process-list">
                <h3 className="heading">{heading}</h3>
                {data[heading].map((item, index) => {
                  return <ToggleButton key={index} text={item.name} selected={item.selected} clickFn={() => handleFilterChange(heading, index)} />
                })}
              </div>
            )
          })}
      </div>
    </Section>
  );
}

export default Filters;


/**
 *  Direct-Solvent Process, Indirect-Solvent Process, Swiss Water Process, and Carbon Dioxide Process
 * https://www.durangocoffee.com/decaffeination-processes/
 * 
 *  Methods: 
 *    - Type 1 :: on/off
 *    - Type 2 :: on/off
 *    - Type 3 :: on/off
 *    - Type 4 :: on/off
 *  Origin:
 *    - type 1 : Single Origin :: on/off
 *    - type 2 : Blended :: on/off
 *  Keyword:
 *    SearchInput
*/
