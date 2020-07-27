import React from "react"
import { Link } from "gatsby"
import { makeStyles, Typography } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from "../components/card"

import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyles = makeStyles({

});
  
function PortfolioPage() {
    const classes = useStyles();

    return(
        <Layout>
            <SEO title="portfolio" />
            <h1>Portfolio</h1>
            <Grid container spacing={5} style={{justifyContent: "center"}}>
                <Grid item xs={3} sm={3}>
                    <Card title="Recipe App" subTitle="Swift-iOS" image="img" about="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica"/>
                </Grid>
                <Grid item xs={3} sm={3}>
                    <Card title="Adventure Game" subTitle="Java, Tiled" image="img" about="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica"/>
                </Grid>
                <Grid item xs={3} sm={3}>
                    <Card title="Animal Adoption" subTitle="Laravel" image="img" about="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica"/>
                </Grid>
                <Grid item xs={3} sm={3}>
                    <Card title="Recipe App" subTitle="Swift-iOS" image="img" about="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica"/>
                </Grid>
            </Grid>
            <Grid container spacing={5} style={{justifyContent: "center",}}>
                <Grid item xs={3} sm={3}>
                    <Card title="Recipe App" subTitle="Swift-iOS" image="img" about="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica"/>
                </Grid>
                <Grid item xs={3} sm={3}>
                    <Card title="Recipe App" subTitle="Swift-iOS" image="img" about="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica"/>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default PortfolioPage;
