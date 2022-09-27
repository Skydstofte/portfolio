import Frontmatter from "../components/Frontmatter";
import TableOfContent from "../components/TableOfContent";
import Body from "../components/Body";
import Backmatter from "../components/Backmatter";
// import { useEffect, useState } from "react";

export default function HomePage() {

    // const [pages, setPages] = useState([]);

    // useEffect(() => {
    //     console.log('useEffect called');
    //     async function getData() {
    //         const response = await fetch("https://react-pf-api.skydstofte.site/wp-json/wp/v2/portfolio?_embed");
    //         const data = await response.json();
    //         console.log(data);
    //         setPages(data);
    //     }
    //     getData();
    // }, []);

    return (
        <>
            <Frontmatter/>
            {/* <TableOfContent/> */}
            {/* {pages.map(page => (
                <Body page={page}></Body>
            ))} */}
            {/* <Backmatter/> */}
        </>
    )
}