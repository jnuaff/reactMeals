import React from 'react'
import {makeStyles} from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ladenImage from '../../assets/laden-image.jpg'

const useStyle = makeStyles({
  imageStyle: {
    width: '100%',
    height: '20rem',
    
  },
  image: {
    width: '110%',
    height: '100%',
    objectFit: 'cover',
    overflow: 'auto',
    maxWidth: 'none'
    
  }
})

const Navbar = (props) => {
   const classes = useStyle();
    return (
        <Box sx={{ flexGrow: 1}} >
          <AppBar position="static" >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                React Meals
              </Typography>
              <Button color="inherit" position="right" onClick={props.onHandleToggle}>Cart</Button>
            </Toolbar>
          </AppBar>
          <div className={classes.imageStyle}>
            <img src={ladenImage} className={classes.image} alt="pizza laden" />
          </div>
        </Box>
      );
}

export default Navbar
//rafce