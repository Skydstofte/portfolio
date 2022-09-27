import parse from "html-react-parser";


export default function Body({page, className = ""}) {
    
    return (
        <section className={`pages-content page projects ${className}`}>
            <div className="front-side">
                <div className="front-content project-content">
                    <h1>{parse(page.title.rendered)}</h1>
                    <div className="img-container">
                        <img src={page?.acf?.project_image.url} alt={page?.acf?.project_image.alt} />
                    </div>
                    <p>{page.acf.project_description}</p>
                    <a href={page.acf.project_url}>Check it out</a>
                    
                </div>
            </div>
            {/* <div className="back-side">
                <div className="back-content"></div>
            </div> */}
        </section>
    )
}