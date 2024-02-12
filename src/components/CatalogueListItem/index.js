import { useMemo } from 'react';
import './styles.scss';
import Picture from "../Picture";

function CatalogueListItem({ data }) {
    const process = useMemo(() => data.process === "" ? <em>unknown</em> : data.process, [data]);
    const origin = useMemo(() => data.origin === "" ? <em>unknown</em> : data.origin, [data]);
    return (
        <div className="catalogue-list-item">
            <h3 className="headline">{data.headline}</h3>
            <div>Process: {process}</div>
            <div>Origin: {origin}</div>
            {data.singleOrigin ? <span>Single Origin</span> : <span>Blended</span>}
            <Picture image={data.image} />
        </div>
    );
}

export default CatalogueListItem;
