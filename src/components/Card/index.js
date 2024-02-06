import Link from '../Link';
import './styles.scss';

function Card() {

    return (
        <div className="card">
            <h3 className="card-headline">Card</h3>
            <img alt="a bag of coffee" className="card-image" />
            <p className="card-text">Something Here</p>
            <Link text="Learn More" url="" icon="" />
        </div>
    );
}

export default Card;
