import parse from "html-react-parser";

export default function Body({post}) {
    
    return (
        <section className="pages-content">
            <h1>{parse(post.title.rendered)}</h1>
            <p>{post.acf.project_description}</p>
            <a href="{post.acf.project_url}">{post.acf.project_url}</a>
        </section>
    )
}