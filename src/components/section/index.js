import './styles.scss';

function Section({ children, name }) {
    const className = "section section-" + name;

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
        <section className={className} >
            <div className="safe-content">
                {children}
            </div>
        </section>
    );
}

export default Section;
