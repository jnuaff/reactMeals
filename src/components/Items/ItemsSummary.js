import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  summary: {
    textAlign: "center",
    maxWidth: "45rem",
    width: "90%",
    margin: "auto",
    marginTop: "-5rem",
    position: "relative",
    backgroundColor: "#8d6e63",
    color: "white",
    borderRadius: "14px",
    padding: " 1rem",
    boxShadow: "0 1px 18px 10px rgba(0, 0, 0, 0.25)",
  },
});

const ItemsSummary = () => {
    const classes = useStyles();
  return (
    <section className={classes.summary}>
      <h2>Delicious Pizzas, Delivered To You</h2>
      <p>
        Choose your favorite Pizza from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our pizzas are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default ItemsSummary;
