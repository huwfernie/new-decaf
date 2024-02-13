import './styles.scss';

function ToggleButton({ text, selected, clickFn }) {
    let _className = ""
    
    if (selected) {
        _className = "toggle-button selected";
    } else {
        _className = "toggle-button unselected";
    }
    
    return (
        <button className={_className} onClick={clickFn}>
            <input type="checkbox" checked={selected} readOnly={true} />
            {text}
        </button>
    );
}

export default ToggleButton;
