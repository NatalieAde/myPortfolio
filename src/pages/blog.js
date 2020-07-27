import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import blogImg from "../assets/blog.png";
import sisterhood from "../assets/sisterhood.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function BlogPage() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="name" className={classes.avatar}>
            N
          </Avatar>
        }
        title="The Transition from university to work: the experiences of a black woman in tech"
        subheader="June 12, 2020"
      />
      <CardMedia
        className={classes.media}
        image={sisterhood}
        title="women in tech"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        I’m a university student studying Computer Science, currently on my placement year as a software developer. After doing some reflection of my time at university so far, I can say that my academic experiences prepared me for what to expect when I entered the workspace. My journey with tech began in sixth form where I started studying computer science, unfortunately, I was oneout of three girls in the entire course. To narrow that down further, I was the only black girl. Moving on to university, the ratio was not as bad, but was still not deserving of an applause. In saying this, when I started my placement year, the lack of gender diversity did not come as a shock to me as it was an environment, I was at this point used to working in. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share" >
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>....</Typography>
          <Typography paragraph>
          I’m a university student studying Computer Science, currently on my placement year as a software developer.
          </Typography>
          <Typography paragraph>
          After doing some reflection of my time at university so far, I can say that my academic experiences prepared me for what to expect when I entered the workspace. My journey with tech began in sixth form where I started studying computer science, unfortunately, I was oneout of three girls in the entire course. To narrow that down further, I was the only black girl. Moving on to university, the ratio was not as bad, but was still not deserving of an applause. In saying this, when I started my placement year, the lack of gender diversity did not come as a shock to me as it was an environment, I was at this point used to working in. 
          </Typography>
          <Typography paragraph>
          My current placement is my first experience in the tech industry. I was extremely nervous prior tostarting and that was mainly down to the lack of confidence I had in myself, my programming skills and experience. Consequently, I would stay quiet, put my head down and get my work done. My logic behind this was if I didn’t bring attention to myself no one would know if I messed up. During my first week I quickly learned that visibility within the company and amongst your peers was key. This is especially true if you wanted to continue to get put on client projects or in other cases, be promoted. It didn’t take me long to realise that being shy and lacking self-confidence was not going to get me that. It's all good getting the job done and doing great but the reality is if no one knows about it, then it technically has not been done by you. I quickly had to adapta nd change my mindset. I had to get comfortable showing off my work and my achievements. Not to be done out of vanity or an ego trip, but rather to revealing my capabilities and my growth through my work became a necessity.
          </Typography>
          <Typography>
          Soft skills matter. A lot. There’s a misconception that programmers just code all day and don’t talk to anyone. This is far from true. Working in industry has taught me that soft skills are just as important as technical skills. Most, if not all, projects are team projects so its therefore important to be someone that is easy to work with, a good communicator, organised and a team player. Not having these skills amongst other soft skills can affect the outcome of the project and client relationships which is not great for the business. Overall, when starting a new role, it isimportant to not only work on technical skills but also soft skills.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Layout>
  );
}
