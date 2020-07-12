import React from "react";
import { CustomButtomContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
  <CustomButtomContainer {...props}>{children}</CustomButtomContainer>
);

export default CustomButton;
