import React from "react"
import { makeStyles, Typography } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from "../components/card";

import recipe from "../assets/recipe.png";
import adopt from "../assets/adopt.jpeg";
import laravel from "../assets/laravel.jpeg";
import quiz from "../assets/quiz.jpg";
import spsd from "../assets/spsd.jpg";

import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyles = makeStyles({

});
  
function PortfolioPage() {
    const classes = useStyles();

    return(
        <Layout>
            <SEO title="Portfolio" />
            <h1>Portfolio</h1>
            <Grid container spacing={5} style={{justifyContent: "center", marginTop: 60}}>
                <Grid item xs={3} sm={3}>
                    <Card title="Recipe App" subTitle="Swift-iOS" image={recipe} about="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica"/>
                </Grid>
                <Grid item xs={3} sm={3}>
                    <Card title="Adventure Game" subTitle="Java, Tiled" image={spsd} about="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica"/>
                </Grid>
                <Grid item xs={3} sm={3}>
                    <Card title="11+ Quiz" subTitle="Visual Basics" image={laravel} about="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica"/>
                </Grid>
                <Grid item xs={3} sm={3}>
                    <Card title="Animal Adoption" subTitle="Laravel, MySQL" image={quiz} about="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica"/>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default PortfolioPage;
