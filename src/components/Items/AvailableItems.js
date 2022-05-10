import React, { useContext, useState } from "react";
import Item from "./Item";
import { ItemsContext } from "../store/ItemsContext";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import ButtonList from "./ButtonList";
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';

const useStyles = makeStyles({
  items: {
    maxWidth: "60rem",
    width: "90%",
    margin: "1rem auto",
    borderRadius: "14px",
    padding: " 1rem",
    boxShadow: "0 1px 18px 10px rgba(0, 0, 0, 0.25)",
  },
});

const AvailableItems = (props) => {
  const classes = useStyles();
  const [items, setItems] = useContext(ItemsContext);
  const [selectedType, setSelectedType] = useState("meals");
  const [showAlert, setShowAlert] = useState(false);




  const handleClose = () => {
    setShowAlert(false);
  };

  const open = Boolean(showAlert);
  const id = open ? "simple-popover" : undefined;

  const changeFilterHandler = (selectedButton) => {
    setSelectedType(selectedButton);
  };

  const alertHandler = () => {
    setShowAlert(true);
  };

  const addToCartHandler = (itemId, itemOnCart) => {
    if (itemOnCart === true) {
      alertHandler();
      return;
    }

    setItems(
      items.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            amount: item.amount + 1,
            onCart: true,
          };
        }
        return item;
      })
    );
  };

  const filteredItems = items.filter((item) => {
    return item.type === selectedType;
  });

  const itemsList = filteredItems.map((item) => (
    <div>
      <Item
        name={item.name}
        price={item.price}
        description={item.description}
        key={item.id}
        onCart={item.onCart}
        onAddToCart={() => {
          addToCartHandler(item.id, item.onCart);
        }}
      />
    </div>
  ));

  return (
    <Box className={classes.items}>
      <ButtonList value={selectedType} onChangeFilter={changeFilterHandler} />
      <ul>{itemsList}</ul>
      {showAlert && (
        <Popover id={id} open={open} showAlert={showAlert} onClose={handleClose}>
          <Typography sx={{ p: 2 }}>Item already in the cart</Typography>
        </Popover>
      )}
    </Box>
  );
};

export default AvailableItems;
