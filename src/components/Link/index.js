import './styles.scss';

function Link({ text, icon, url }) {

    function Icon(){
        if (icon === "external") {
            return <span className="link-icon external"><img src="/images/link-icon-external.png" alt="external link icon" /></span>
        } else {
            return <span className="link-icon more">+</span>
        }
    }

    return (
        <a className="link" href={url} >{text}<Icon /></a>
    );
}

export default Link;
