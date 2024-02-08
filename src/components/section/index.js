import './styles.scss';

function Section({ children, name, onClick = null }) {
    const className = "section section-" + name;
    const id = "section-" + name;

    if (name === "footer") {
        return (
            <footer className={className} >
                <div className="safe-content">
                    {children}
                </div>
            </footer>
        );
    }

    return (
        <section id={id} className={className} onClick={onClick}>
            <div className="safe-content">
                {children}
            </div>
        </section>
    );
}

export default Section;
