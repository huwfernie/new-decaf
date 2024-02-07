import { useRef } from 'react';
import Link from '../Link';
import './styles.scss';

function Card({ title, imageUrl, cardText, linkUrl }) {
    const canvasRef = useRef(null);
    const imageRef = useRef(null);
    const cardRef = useRef(null);

    /**
     * On Load of image, copy image to canvas (hidden el using css) and read RGB colour value for top left pixel
     * Set background Colour of the card to match the t/l pixel
     * Default fallback to "white" if opacity < 1 (calculated using pixel[3] < 255);
     */
    function handleLoad() {
        const testCanvas = canvasRef.current !== null;
        const testCard = cardRef.current !== null;
        // imageRef cannot be null at this point as handleLoad can only be called after <img... has loaded

        if (testCanvas && testCard) {
            const ctx = canvasRef.current.getContext("2d");
            ctx.drawImage(imageRef.current, 0, 0);
            let pixel = ctx.getImageData(0, 0, 1, 1).data;

            if (pixel[3] !== 255) {
                pixel[0] = 238;
                pixel[1] = 238;
                pixel[2] = 238;
            }

            cardRef.current.style.backgroundColor = `rgb(${pixel[0]} ${pixel[1]} ${pixel[2]})`;
        }
    }

    return (
        <div ref={cardRef} className="card">
            <h3 className="card-headline">{title}</h3>
            <img ref={imageRef} alt="a bag of coffee" className="card-image" src={imageUrl} onLoad={handleLoad} />
            <canvas ref={canvasRef} className="card-image-canvas"></canvas>
            <p className="card-text">{cardText}</p>
            <Link text="Link" url={linkUrl} icon="external" />
        </div>
    );
}

export default Card;
