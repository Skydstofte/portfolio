export default function Logo ({logo, goToTableOfContent}) {
    return (
        <section className="logo">
            <a href="/" onClick={goToTableOfContent}>
                <img src={logo?.acf?.logo.url} alt={logo?.acf?.logo.title} />
            </a>
        </section>
    );
}