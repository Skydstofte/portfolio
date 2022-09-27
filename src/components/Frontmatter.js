import parse from "html-react-parser";

export default function Frontmatter({page, className=""}) {
    return (
        <section className={`frontmatter page ${className}`}>
            <div className="front-side">
                <div className="front-content frontmatter-content">
                    <img src={page?.acf?.frontmatter_image.url} alt={page?.acf?.frontmatter_logo.alt} />
                    <h1>{page?.acf?.frontmatter_title}</h1>
                </div>
            </div>
            <div className="back-side">
                <div className="back-content"></div>
            </div>
        </section>
    )
}