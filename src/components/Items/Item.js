import React from "react";
import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  item: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "1rem",
    borderBottom: "1px solid #ccc",
  },
  name: {
    margin: "0 0 0.25rem 0",
  },
  description: {
    fontStyle: "italic",
  },
  price: {
    marginTop: "0.25rem",
    fontWeight: "bold",
    color: "black",
    fontSize: "1.25rem",
  },
});

const Item = (props) => {
  const classes = useStyles();

  const addToCart = () => {
    props.onAddToCart();
  };

  return (
    <List className={classes.item}>
      <ListItem>
        <ListItemText className={classes.name}>{props.name}</ListItemText>
        <ListItemText className={classes.description}>
          {props.description}
        </ListItemText>
        <ListItemText className={classes.price}>${props.price}</ListItemText>

        <Button
          size="small"
          color="secondary"
          variant="contained"
          onClick={() => {
            addToCart();
          }}
        >
          Add to cart
        </Button>
      </ListItem>
      <Divider />
    </List>
  );
};

export default Item;
