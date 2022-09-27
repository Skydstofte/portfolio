import Frontmatter from "../components/Frontmatter";
import TableOfContent from "../components/TableOfContent";
import Body from "../components/Body";
import Backmatter from "../components/Backmatter";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import Logo from "../components/Logo";
import BtnSlider from './slider/BtnSlider'
import { v4 as uuidv4 } from "uuid";

export default function Book() {

    const [allContent, setAllContent] = useState([]);
    const [logo, setLogo] = useState([]);
    const [slideIndex, setSlideIndex] = useState(1);


    useEffect(() => {
        async function getData() {
            // Fetch all content of content-type "portfolio" from Wordpress REST API
            const response = await fetch("https://react-pf-api.skydstofte.site/wp-json/wp/v2/portfolio?_embed");
            const data = await response.json();

            // Filtering out non-body pages and saves all body pages in a variable
            let logo = data.filter(function(item){
                return item.acf.is_logo
            });
            setLogo(logo[0])

            // Temporary variable holding all pages (frontmatter, table of content, body, backmatter)
            let allBookPages = [];

            // Filtering out non-body pages and saves all body pages in a variable
            let pages = data.filter(function(item){
                return item.acf.is_project
            });

            // Set body pages in the corret order
            pages.sort((a, b) => {
                return a.acf.weight - b.acf.weight
            })

            // Filter out non-frontmatter pages and save in a variable
            let frontmatter = data.filter(function(item){
                return item.acf.is_frontmatter;
            });
            

            // Filter out non-backmatter pages and save in a variable
            let backmatter = data.filter(function(item){
                return item.acf.is_backmatter;
            });
            
            // Temporary table of content variable
            let tableOfContent = [];

            // Create content objects for each project page and add to temporary table of content array
            pages.forEach(pageObject => {
                tableOfContent.push({
                    title: parse(pageObject.title.rendered),
                    number: tableOfContent.length + 2
                });
            });
            
            // Create content object for backmatter page and add to temporary table of content array
            tableOfContent.push({
                title: backmatter[0].acf.backmatter_title,
                number: tableOfContent.length + 2
            });

            // Add all the different pages in the correct order to the temporary variable allBookPages
            // Frontmatter
            allBookPages.push(frontmatter[0]);
            // Table of Content
            allBookPages.push(tableOfContent);
            // Body/Projects
            pages.forEach(element => {
                allBookPages.push(element);
            });
            // Backmatter
            allBookPages.push(backmatter[0]);
            
            // Set all content state - uses react state function:
            setAllContent(allBookPages);
            
            // making the book work
            // let currentLocation = 1;
            // let numOfPages = tableOfContent;
            // let maxLocation = numOfPages + 1;

            // make a function that 
            // 1 - goes to the next page
            // 2 - if it is the last page, then go back to the front
            // 3 - 
        }
        getData();
    }, []);

    // Function used upon pressing the "next" button
    const nextSlide = () => {
        if(slideIndex !== allContent.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === allContent.length){
            setSlideIndex(1)
        }
    }

    // Funciton used upon pressing the "prev" button
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(allContent.length)
        }
    }

    //   Function that directs the user to tableOfContent 
      const goToTableOfContent = (e) => { 
        e.preventDefault()
        if(slideIndex !== 2){
            setSlideIndex(2)
        }
    }

    //   Function that directs the user to tableOfContent 
    const goToPage = (data, e) => { 
        e.preventDefault()
        setSlideIndex(data + 1)
    }

    return (
        // Slider container
        <div className="book">
            <div className="container-slider">
                {/* Mapping "allContent" variable which holds: objects or arrays in the following order: [frontmatter, table of content, projects, backmatter] */}
                {allContent.map((allContentElement, index) => {
                    return(
                        // If the element has the property "acf" and the property "acf.is_frontmatter" is true: Render <Frontmatter/> component
                        allContentElement?.acf?.is_frontmatter 
                        ? <Frontmatter key={uuidv4()} page={allContentElement} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}/> 
                        // Else if the element does not have the property "acf" : Render <TableOfContent/> component
                        : !allContentElement?.acf 
                            ? <TableOfContent key={uuidv4()} content={allContentElement} className={slideIndex === index + 1 ? "slide active-anim" : "slide"} goToPage={goToPage}/>
                            // Else if the element has the property "acf" and the property "acf.is_project" is true: Render <Body/> component
                            : allContentElement?.acf?.is_project 
                                ? <Body
                                    key={uuidv4()}
                                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                                    page={allContentElement}>
                                </Body>
                                // Else if the element has the property "acf" and the property "acf.is_backmatter" is true: Render <Body/> component
                                : allContentElement?.acf?.is_backmatter
                                    ? <Backmatter key={uuidv4()} page={allContentElement} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}/>
                                    // Else do not render anything
                                    : null
                    )
                })}
            </div>
            
            <div className="container-nav">
                {/* Render prev button */}
                <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
                <div className="logo">
                    <Logo logo={logo} goToTableOfContent={goToTableOfContent}/>
                </div>
                {/* Render next button */}
                <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            </div>
        </div>
        
    )
}