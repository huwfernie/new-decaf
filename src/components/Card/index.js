import Link from '../Link';
import './styles.scss';

function Card() {

    return (
        <div className="card">
            <h3>Card</h3>
            <img alt="a bag of coffee" />
            <p>Something Here</p>
            <Link text="Learn More" url="" icon="" />
        </div>
    );
}

export default Card;
