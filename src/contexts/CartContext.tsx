import { createContext, useEffect, useState } from "react";
import { CartContextProps, CartItemProps, CartProviderProps, ProductProps } from "../types/types";
import * as helpers from "../helpers/generalHelpers";

export const CartContext = createContext({} as CartContextProps);

function CartProvider({ children }: CartProviderProps) {
  const [item, setItem] = useState<ProductProps>({} as ProductProps);
  const [cart, setCart] = useState<CartItemProps[]>(() => {
    const storedCart = localStorage.getItem("petShopCart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [totalCart, setTotalCart] = useState<string>(() => {
    const storedTotalCart = localStorage.getItem("petShopTotalCart");
    return storedTotalCart ? JSON.parse(storedTotalCart) : "";
  });
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [closingDetails, setClosingDetails] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("petShopCart", JSON.stringify(cart));
    localStorage.setItem("petShopTotalCart", JSON.stringify(totalCart));
  }, [cart, totalCart]);

  const handleClose = () => {
    setClosingDetails(true);
    setTimeout(() => {
      setShowDetails(false);
      setClosingDetails(false);
    }, 500);
  }

  const handleOpen = (product: ProductProps) => {
    setShowDetails(!showDetails)
    setItem(product);
  }

  function totalResultCart(items: CartItemProps[]) {
    let result: number = items.reduce((acc, item) => acc + item.total, 0);
    setTotalCart(helpers.formatCurrency(result));
  }

  function addItemToCart(event: React.MouseEvent<HTMLElement> ,newItem: ProductProps) {
    const indexItem = cart.findIndex((item) => item.id === newItem.id);
    const target = event.currentTarget as HTMLElement;

    const message = target.tagName === "DIV"
    ? helpers.successMessage("Item adicionado ao carrinho!", "success")
    : helpers.successMessage("Quantidade aumentada do produto", "info");


    if(indexItem === -1)  {
      let newItemData = {
        ...newItem,
        quantity: 1,
        total: newItem.price,
      };

      const updatedCart = [...cart, newItemData];
      setCart(updatedCart);
      totalResultCart(updatedCart);
      message;
    } else {
      const updatedCart = cart.map((item, index) => index === indexItem 
        ? { ...item, quantity: item.quantity + 1, total: item.price * (item.quantity + 1) }
        : { ...item }
      );

      setCart(updatedCart);
      totalResultCart(updatedCart);
      message;
    }
  }

  function removeItemFromCart(cartItem: CartItemProps) {
    const indexItem = cart.findIndex((item) => item.id === cartItem.id);
    const message = cart[indexItem]?.quantity > 1 
      ? helpers.successMessage("Quantidade diminuida do produto", "info")
      : helpers.successMessage("Item removido do carrinho!", "warning");

    if(cart[indexItem]?.quantity > 1) {
      const updatedCart = cart.map((item, index) => index === indexItem
        ? { ...item, quantity: item.quantity - 1, total: item.price * (item.quantity - 1) }
        : { ...item }
      );

      setCart(updatedCart);
      totalResultCart(updatedCart);
      message;
    } else {
      const updatedCart = cart.filter(item => item.id !== cartItem.id);

      setCart(updatedCart);
      totalResultCart(updatedCart);
      message;
    }
  }

  return (
    <CartContext.Provider
    value={{
      cart,
      totalCart,
      cartQuantity: cart.length,
      addItemToCart,
      removeItemFromCart,
      showDetails,
      setShowDetails,
      closingDetails,
      handleClose,
      handleOpen, 
      item
    }}
    >
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider;