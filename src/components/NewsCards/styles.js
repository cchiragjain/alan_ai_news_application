import { makeStyles } from "@material-ui/core/styles";

// will be able to access this container using the useStyles hook which this makeStyles return
export default makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },
  article: {
    display: "flex",
  },
});
