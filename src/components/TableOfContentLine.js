export default function TableOfContentLine({contentLineContent, goToPage}) {
    return (
        <section className="tableOfContentLine">
            <a href="/" onClick={(e) => goToPage(contentLineContent.number, e)}>
            {/* <a href="{page.acf.project_url}">{page.acf.project_url}</a> */}
                <div></div> 
                <h1>{contentLineContent.title}</h1>
                <p>Page {contentLineContent.number}</p>
            </a>
        </section>
    )
}