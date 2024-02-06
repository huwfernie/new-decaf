import Link from '../Link';
import './styles.scss';

function Card({ title, imageUrl, cardText, linkUrl }) {
    return (
        <div className="card">
            <h3 className="card-headline">{title || "Card Title"}</h3>
            <img alt="a bag of coffee" className="card-image" src={imageUrl} />
            <p className="card-text">{cardText || "Something Here"}</p>
            <Link text="Link" url={linkUrl} icon="external" />
        </div>
    );
}

export default Card;
