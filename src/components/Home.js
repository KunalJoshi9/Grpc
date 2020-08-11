import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Link } from 'react-router-dom';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


function Home(props) {
    const classes = useStyles();

    return (
        <div>
            <Link to="/init" style={{ textDecoration: 'none' }}>
                <div className="Home__home"> 
                    <Button variant="contained" size="large" color="primary" className={classes.margin}>
                        Login
                    </Button>
                </div>
            </Link>
        </div>
    );
}

export default Home;