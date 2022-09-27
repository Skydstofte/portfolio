import parse from "html-react-parser";

export default function Backmatter({page, className=""}) {
    return (
        <section className={`backmatter page ${className}`}>
            <div className="front-side">
                <div className="front-content">
                    <h1>{page?.acf?.backmatter_title}</h1>
                    <p>{page?.acf?.backmatter_description}</p>
                    <p>{page?.acf?.backmatter_description_part_two}</p>
                    <p>{page?.acf?.backmatter_description_part_three}</p>
                    <p id="contact">{page?.acf?.backmatter_contact}</p>
                    {/* <a href={page?.acf?.backmatter_email}>{page?.acf?.backmatter_email}</a> */}
                </div>
            </div>
            <div className="back-side">
                <div className="back-content"></div>
            </div>
        </section>
    )
}