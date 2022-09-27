import TableOfContentLine from "../components/TableOfContentLine";

export default function TableOfContent({content, className="", goToPage}) {


    return (
        <section className={`tableOfContent page ${className}`}>
            <div className="front-side">
                <div className="front-content">
                    <h1>Table of Content</h1>
                    {content.map((contentLine, index) => (
                        <TableOfContentLine key={index} contentLineContent={contentLine} goToPage={goToPage}></TableOfContentLine>
                    ))}
                </div>
            </div>
            <div className="back-side">
                <div className="back-content"></div>
            </div>
        </section>
    )
}