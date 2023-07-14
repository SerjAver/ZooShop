import React from 'react';
import { Button } from 'semantic-ui-react';


const AddToCartButton = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};



export default AddToCartButton;