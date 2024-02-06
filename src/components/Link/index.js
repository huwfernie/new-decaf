import './styles.scss';

function Link({ text, icon, url }) {

    function Icon(){
        if (icon === "none") {
            return null;
        } else if (icon === "external") {
            return <span className="link-icon external">&nbsp;&#8680;</span>
        } else {
            return <span className="link-icon more">&nbsp;+</span>
        }
    }

    return (
        <a className="link" href={url} >{text}<Icon /></a>
    );
}

export default Link;
