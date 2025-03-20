import React, { ReactNode } from "react";

export interface ProductProps {
  id: string;
  title: string;
  description: string;
  price: number;
  cover: string;
};

export interface CartItemProps extends ProductProps {
  quantity: number;
  total: number;
}

export interface CartContextProps {
  cart: CartItemProps[];
  cartQuantity: number;
  totalCart: string;
  addItemToCart: (event: React.MouseEvent<HTMLElement> ,item: ProductProps) => void;
  removeItemFromCart: (item: CartItemProps) => void;
  showDetails: boolean;
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
  closingDetails: boolean;
  handleClose: () => void;
  handleOpen: (product: ProductProps) => void;
  item: ProductProps;
}

export interface CartProviderProps {
  children: ReactNode;
}