
import './styles.scss';

function Card({ image }) {

    return (
        <picture className="picture">
            {image.versions.includes("xxlarge") && <source srcSet={image.base.replace(image.versions[0], "xxlarge")} media="(min-width: 1400px)" />}
            {image.versions.includes("xlarge") && <source srcSet={image.base.replace(image.versions[0], "xlarge")} media="(min-width: 1200px)" />}
            {image.versions.includes("large") && <source srcSet={image.base.replace(image.versions[0], "large")} media="(min-width: 992px)" />}
            {image.versions.includes("medium") && <source srcSet={image.base.replace(image.versions[0], "medium")} media="(min-width: 768px)" />}
            {image.versions.includes("small") && <source srcSet={image.base.replace(image.versions[0], "small")} media="(min-width: 576px)" />}
            <img src={image.base} className="image" alt={image.altText} />
        </picture>
    );
}

export default Card;
