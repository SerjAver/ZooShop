import useLocalStorageState from 'use-local-storage-state'
import _ from 'lodash'

export const useHandleCart = () => {
  const [cartItems, setCartItems] = useLocalStorageState('cartItems', {
    defaultValue: []
  })

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const indexToRemove = cartItems.findIndex((i) => i.id === item.id);
    if (indexToRemove !== -1) {
      const newCartItems = [...cartItems];
      newCartItems.splice(indexToRemove, 1);
      setCartItems(newCartItems);
    }
  };

  const removeAllFromCart = () => {
    setCartItems([]);
  };

  return {
    addToCart,
    removeFromCart,
    removeAllFromCart,
    cartItems,
  };
};
