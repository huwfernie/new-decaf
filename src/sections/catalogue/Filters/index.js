import './styles.scss';
import Section from '../../../components/section';
import ToggleButton from '../../../components/ToggleButton';

function Filters() {
  return (
    <Section name="filters">
      <h2 className="filters-headline">Filters</h2>
      <div className="grid">
        <div className="process-list">
          <h3>Process</h3>
          <ToggleButton text="Direct-Solvent" selected={true} />
          <ToggleButton text="Indirect-Solvent" selected={true} />
          <ToggleButton text="Swiss Water" selected={true} />
          <ToggleButton text="Carbon Dioxide" selected={true} />
        </div>
        <div className="process-list">
          <h3>Origin</h3>
          <ToggleButton text="Single Origin" selected={true} />
          <ToggleButton text="Blended" selected={true} />
        </div>
        <div className="process-list">
          <h3>Roast</h3>
          <ToggleButton text="Light" selected={true} />
          <ToggleButton text="Medium" selected={true} />
          <ToggleButton text="Dark" selected={true} />
        </div>
        <div className="process-list">
          <h3>Farming</h3>
          <ToggleButton text="Organic" selected={true} />
        </div>
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
