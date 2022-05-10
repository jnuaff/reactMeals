import { Button } from "@mui/material";
import { ItemsContext } from "../store/ItemsContext";
import { makeStyles } from "@mui/styles";
import { useContext, useState } from "react";
import CartItem from "./CartItem";


const useStyles = makeStyles({
  cartItems: {
    listStyle: "none",
    margin: "0",
    padding: "0",
    maxHeight: "20rem",
    overflow: "auto",
  },
  actions: {
    textAlign: "right",
    padding: "0.5rem 2rem",
    font: "inherit",
    marginRight: "-2.5rem",
  },
  total: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "1.5rem",
    margin: "1rem 0",
  },
});

const CartContent = () => {
  const [items, setItems] = useContext(ItemsContext);
  const classes = useStyles();

  const sumCartItemAmount = (itemId, itemPrice, itemSubtotal, itemAmount) => {
    // Get specific item
    setItems(
      items.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            price: item.price,
            amount: item.amount + 1,
            // update amount
          };
        }
        return item;

        // This returns the rest of the items.
      })
    );
    // This function is to get the specific item, otherweise will
    // update all the items on the cart.
  };

  const removeCartItemAmount = (itemId) => {
    const exist = items.find((item) => item.id === itemId);
    if (exist.amount === 1) {
      setItems(
        items.map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              amount: item.amount - 1,
              onCart: false,
            };
          }
          return item;
        }) // FIND INDEX ESTA MAL.
      );
    } else {
      setItems(
        items.map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              price: item.price,
              amount: item.amount - 1, // VER ESTO
            };
          }
          return item;
        }) // FIND INDEX ESTA MAL.
      );
    }
    // Probar directamente con hacer una array con itemPrice * itemAmount por cada item.
  };

  const totalAmount = items.reduce((a, c) => a + c.price * c.amount, 0);

  const filteredBasket = items.filter((item) => {
    return item.onCart === true;
  });

  const basketList = filteredBasket.map((item) => (
    <CartItem
      name={item.name}
      price={item.price}
      amount={item.amount}
      key={item.id}
      subtotal={item.cartSubtotal}
      onSumCartItemAmount={() => {
        sumCartItemAmount(item.id);
      }}
      onRemoveCartItemAmount={() => {
        removeCartItemAmount(item.id);
      }}
    />
  ));

  return (
    <div>
      {filteredBasket.length < 1 && (
        <div>
          <h3>Cart is empty.</h3>
        </div>
      )}
      {filteredBasket.length > 0 && (
        <div>
          <ul className={classes.cartItems}>{basketList}</ul>
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount.toFixed(2)}</span>
          </div>
          <div className={classes.actions}>
            <Button>Close</Button>
            <Button>Order</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContent;
