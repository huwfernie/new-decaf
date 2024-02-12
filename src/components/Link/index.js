import './styles.scss';
import { Link as RouterLink } from 'react-router-dom';
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
        <RouterLink className="link" to={url} >{text}<Icon /></RouterLink>
    );
}

export default Link;
