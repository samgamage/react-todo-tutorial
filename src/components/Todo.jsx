import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";
import React from "react";

const Todo = ({ text, completed }) => (
  <ListItem>
    <Checkbox color="primary" checked={completed} />
    <ListItemText primary={text} />
    <IconButton>
      <DeleteIcon />
    </IconButton>
  </ListItem>
);

Todo.propTypes = {
  text: PropTypes.string,
  completed: PropTypes.bool,
};

Todo.defaultProps = {
  text: "",
  completed: false,
};

export default Todo;
