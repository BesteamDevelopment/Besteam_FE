import just from "../components/video/blogTitleCarousel.png";
import BTSlider from "../components/custom/BTSlider";
import { BTSliderImgValue } from "../types/customComponentsTypes/BTSlider";
import styled from "@emotion/styled";
import BTCard from "../components/custom/BTCard";
import { Grid } from "@mui/material";
import { boolean } from "yup";
import useScreen from "../customHooks/useScreen";

const BlogContainer = styled.div<{isMobile: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-inline: ${props => props.isMobile ? "1rem" : "6rem"};
`;

const SliderContainer = styled.div`
    height: 1000px,
    padding: "2rem",
    marginLeft: "10px",
    marginTop: "-4px",
    marginBottom: "11rem",
`;

const GridContainer = styled(Grid)`
    margin-top: 11,25rem;
`;

const BlogPage = () => {
    const {isMobile} = useScreen();
    const imgConfig: BTSliderImgValue[] = [
        {src: just, alt: "img1"},
        {src: just, alt: "img2"},
        {src: just, alt: "img3"},
    ];

    const cards = [
        { title:"Titolo", subtitle: "Autore e data", footerTitle:"Categoria"},
        { title:"Titolo", subtitle: "Autore e data", footerTitle:"Categoria"},
        { title:"Titolo", subtitle: "Autore e data", footerTitle:"Categoria"},
        { title:"Titolo", subtitle: "Autore e data", footerTitle:"Categoria"},
        { title:"Titolo", subtitle: "Autore e data", footerTitle:"Categoria"},
        { title:"Titolo", subtitle: "Autore e data", footerTitle:"Categoria"},
        { title:"Titolo", subtitle: "Autore e data", footerTitle:"Categoria"},
        { title:"Titolo", subtitle: "Autore e data", footerTitle:"Categoria"},
        { title:"Titolo", subtitle: "Autore e data", footerTitle:"Categoria"},
    ];

    const renderCards = cards.map(card => (
        <Grid item md={4} sm={8} xs={12}>
            <BTCard title={card.title} subtitle={card.subtitle} footerTitle={card.footerTitle}/>
        </Grid>
    ))
    
    return(
        <BlogContainer style={{backgroundColor: "#1C1C1C", display: 'flex', justifyContent: 'center'}} isMobile={isMobile}>
            <SliderContainer style={{marginTop:"2rem", height:'20rem', width:'100%'}}>
                <BTSlider imgConfig={imgConfig}/>
            </SliderContainer>
            <GridContainer container columnSpacing={5} rowSpacing={6} style={{marginTop:"3rem", display: "flex", justifyContent: "space-evenly"}}>
            {renderCards}
            </GridContainer>
        </BlogContainer>
    )
}

export default BlogPage;