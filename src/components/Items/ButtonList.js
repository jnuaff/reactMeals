import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  itemsList: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: "row",
    padding: 0,
  },
});

const ButtonList = (props) => {
  const classes = useStyles()

  const changeSelectedTypeHandler = (event) => { // connect to availablePizzas
    props.onChangeFilter(event.target.value); // get the selected type and pass it trough props
  };

  return (
    <Box className={classes.itemsList}>
      <nav aria-label="main mailbox folders">
        <List className={classes.itemsList} >
          <ListItem disablePadding >
            <Button  value="meals" onClick={changeSelectedTypeHandler} color="secondary">
              Meals
            </Button>
            <ListItemIcon />
          </ListItem>
          <ListItem disablePadding >
            <Button  value="drinks" onClick={changeSelectedTypeHandler} color="secondary">
              Drinks
            </Button>
            <ListItemIcon />
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  );
};

export default ButtonList;
