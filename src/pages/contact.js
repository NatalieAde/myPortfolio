import React from 'react';
import SEO from "../components/seo";
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/layout";
import { TextField, Box } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    '& > *': {
      margin: theme.spacing(1),
      width: '40%',
    },
  },
}));

export default function ContactPage() {
  const classes = useStyles();

  return (
    <Layout>
        <SEO title="Contact Me" />
        <h1>Contact Me!</h1>
        <Box borderColor="secondary.main">
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="filled-basic" label="Name" variant="filled" />
            <TextField id="filled-basic" label="Email" variant="filled" />
            <TextField id="filled-basic" label="Message" multiline="true" rows="10" variant="filled" />
            </form>
        </Box>
    </Layout>
  );
}
