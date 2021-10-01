import React from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = ({ errorText, description, ...props }) => (
  <>
    <TextField helperText={errorText ? errorText : null} {...props} />
  </>
);

export default TextInput;
