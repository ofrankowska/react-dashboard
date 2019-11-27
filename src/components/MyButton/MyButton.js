import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const MyButton = withStyles({
  root: {
    color: "white",
    textTransform: "uppercase",
    backgroundColor: ({ withBackground }) =>
      withBackground && "rgba(0,0,0,0.2)",
    "&:hover": {
      color: "aquamarine",
      transition: "color 0.3s ease-in"
    }
  }
})(Button);

export default MyButton;
