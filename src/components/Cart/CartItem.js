import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import { ListItemButton } from "@mui/material";

const useStyles = makeStyles({
  cartSingleItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid #8a2b06",
    padding: "1rem 0",
    margin: "1rem 0",
  },
  summary: {
    width: "10rem",
    display: "flex",
    justifyContent: "inline",
    alignItems: "center",
  },
  amount: {
    fontWeight: "bold",
    marginLeft: "5px",
    border: "1px solid #ccc",
    padding: "0.25rem 0.75rem",
    borderRadius: "6px",
    color: "#363636",
  },

  actions: {
    display: "flex",
    flexDirection: "column",
    marginTop: "3rem",
  },
});

const CartItem = (props) => {
  const classes = useStyles();

  const sumCartItemAmountHandler = () => {
    props.onSumCartItemAmount();
  };

  const removeCartItemAmountHandler = () => {
    props.onRemoveCartItemAmount();
  };



  return (
    <List className={classes.cartSingleItem}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>x{props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <ListItemButton
          onClick={() => {
            removeCartItemAmountHandler();
            
          }}
        >
          -
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            sumCartItemAmountHandler();
           
          }}
        >
          +
        </ListItemButton>
      </div>
    </List>
  );
};

export default CartItem;
