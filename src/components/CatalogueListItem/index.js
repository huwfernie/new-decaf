import { useMemo } from 'react';
import './styles.scss';
import Picture from "../Picture";

function CatalogueListItem({ data }) {
    const process = useMemo(() => data.process === "" ? <em>unknown</em> : data.process, [data]);
    const origin = useMemo(() => data.origin === "" ? <em>unknown</em> : data.origin, [data]);
    return (
        <div className="catalogue-list-item">
            <h3 className="headline">{data.headline}</h3>
            <Picture image={data.image} />
            <p className="body">{data.body}</p>
            <div className="process">Process: {process}</div>
            <div className="origin">Origin: {origin}</div>
            <div className="single-origin">{data.singleOrigin ? <span>Single Origin</span> : <span>Blended</span>}</div>
        </div>
    );
}

export default CatalogueListItem;
