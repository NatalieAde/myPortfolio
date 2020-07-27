import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from "gatsby"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Styles from './navbarStyle';


function Header({ p1, p2, p3, p4, p5, pageTitle1, pageTitle2, pageTitle3, pageTitle4, pageTitle5 }) {    

      return (
          <div style={Styles.root} >
            <AppBar color={"secondary"} style={{flexDirection: "row"}}>
              <Toolbar>
                <Typography variant="h6" > 
                <Link
                  to={pageTitle1}
                  style={Styles.title}
                  onClick={() => {}}
                >
                  {p1}
                </Link>                
                </Typography>
                <Typography variant="h6" > 
                <Link
                  to={pageTitle2}
                  style={Styles.title}
                >
                  {p2}
                </Link>
                </Typography>
                <Typography variant="h6" > 
                <Link
                  to={pageTitle3}
                  style={Styles.title}
                >
                  {p3}
                </Link>      
              </Typography>
              <Typography variant="h6" > 
                <Link
                  to={pageTitle4}
                  style={Styles.title}
                >
                  {p4}
                </Link>      
              </Typography>
              <Typography variant="h6" > 
                <Link
                  to={pageTitle5}
                  style={Styles.title}
                >
                  {p5}
                </Link>      
              </Typography>
              </Toolbar>
            </AppBar>
          </div>
      );
}

export default withStyles(Styles)(Header);