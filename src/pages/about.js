import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import ANDphoto from './me.jpg';
import Layout from "../components/layout"
import SEO from "../components/seo"

import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      flexGrow: 1,
      height: 500
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    margin: 10,
    width: 450,
    height: 450,
    boxShadow: "10px 10px 5px #aaaaaa",
  },
}));

function AboutPage() {
  const classes = useStyles();

  return(
  <Layout>
    <SEO title="About Me" />
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Grid container justify="center" alignItems="center">
                <Avatar alt="natalie" src={ANDphoto} className={classes.large} />
            </Grid> 
            <Grid container justify="center" alignItems="center">
                <h1 className={classes.nameHeader}>Natalie Adeyinka</h1>
            </Grid>
            <Grid container justify="center" alignItems="center">
                <Typography variant="body2" color="textSecondary" component="p"className={classes.headerText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper magna tellus, sed efficitur quam rutrum in. Sed sem elit, imperdiet in feugiat a, efficitur at erat. Nullam congue efficitur ligula, sed aliquet urna. Duis accumsan magna a sapien placerat, non bibendum nisi commodo. Integer in velit venenatis lacus egestas dapibus. Quisque et mollis diam, sed cursus nunc. Donec quis malesuada diam. Aliquam id laoreet mi.
                </Typography>
            </Grid>
        </Grid>   
      </Grid>
      <hr className={classes.hr}/>
    </div>
  </Layout>
)
  }

export default AboutPage
