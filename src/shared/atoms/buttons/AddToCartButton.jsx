import React from "react";
import { Button } from "semantic-ui-react";

export const AddToCartButton = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
