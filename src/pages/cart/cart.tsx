import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { formatCurrency } from "../../helpers/generalHelpers";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, totalCart, addItemToCart, removeItemFromCart, setShowDetails } = useContext(CartContext);

  useEffect(() => { setShowDetails(false) }, []);

  return (
    <>
      { cart.length > 0 ? (
        <div className="cart-container justify-start">
          <h1 className="text-3xl font-bold">Carrinho de compras</h1>
          <ul className="w-full flex-1 max-h-[392px] overflow-y-auto pr-2">
            {cart.map((item, index) => (
              <li 
                key={ item.id } 
                style={ index === cart.length - 1 ? {} : { borderBottom: "1px solid #000"}} 
                className="flex items-center"
              >
                <div className="flex flex-col items-center relative">
                  <img src={ item.cover } alt={ item.title } className="w-20 mb-[16px]" />
                  <span className="w-full whitespace-nowrap text-xs text-gray-500 font-medium absolute left-0 bottom-0">Preço: { formatCurrency(item.price) }</span>
                </div>
                <div className="flex justify-end items-center flex-1 gap-5">
                  <span className="hidden md:flex w-full truncate">{ item.title }</span>
                  <div className="flex items-center gap-2">
                    <span onClick={ (e) => addItemToCart(e, item) } className="bg-gray-300 w-6 h-6 rounded-md flex justify-center items-center cursor-pointer">+</span>              
                    <span className="min-w-[18px] flex justify-center items-center">{ item.quantity }</span>
                    <span onClick={ () => removeItemFromCart(item) } className="bg-gray-300 w-6 h-6 rounded-md flex justify-center items-center cursor-pointer">-</span>
                  </div>
                  <div className="min-w-[155px] flex justify-between items-center">
                    <span>Subtotal: </span>
                    <span>{ formatCurrency(item.total) }</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <span className="w-full text-right">Total: <strong>{ totalCart }</strong></span>
        </div>
      ) : (
        <div className="w-fit cart-container justify-center">
          <h1 className="text-xl lg:text-4xl font-bold">
            Carrinho de compras vazio!
          </h1>
          <Link to="/" className="self-end">
            <span className="text-xs lg:text-base text-blue-500 lg:text-black underline italic cursor-pointer transition duration-500 lg:hover:text-blue-500">
              Clique aqui para comprar.
            </span>
          </Link>
        </div>
      )}
    </>
  )
}