import React from "react";
import { Button as UiButton } from "@material-ui/core";

const Button = ({ buttontext, ...props }) => (
  <>
    <UiButton {...props}>{buttontext}</UiButton>
  </>
);

export default Button;
