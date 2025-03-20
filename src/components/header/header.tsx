import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { FaPaw } from "react-icons/fa";

export function Header() {
  const { cartQuantity } = useContext(CartContext);

  function getPaw(top: string, right: string) {
    return (
      <FaPaw
        size={ 15 } 
        style={{ top: `${ top }px`, right: `${ right }px` }}
        className="w-[15px] h-[15px] absolute rotate-45 text-[#925e26] transition-all duration-500 lg:group-hover:text-black"
      />
    )
  }

  return (
    <header className="w-full h-[100px] bg-[#f9fad2] fixed top-0 left-0 z-10">
      <div className="container h-full flex justify-between items-center pl-5 pr-10">
        <Link to="/">
          <div className="w-fit flex items-center gap-2 relative cursor-pointer group">
            <span className="text-4xl font-bold bg-gradient-to-b from-[#da7910] to-[#7c6a4b] bg-clip-text text-transparent lg:group-hover:text-black transition duration-500">PetShop</span>
            { getPaw('-4', '-8') }
            { getPaw('12', '-20') }
            { getPaw('32', '-12') }
          </div>
        </Link>
        <Link to="/cart">
          <div className="relative group lg:hover:text-black">
            < BsCart3 size={ 30 } className="text-[#da7910] transition-all duration-500 lg:group-hover:text-black cursor-pointer" />
            <div 
              style={{ display: cartQuantity > 0 ? 'flex' : 'none' }}
              className="w-7 h-7 bg-red-500 rounded-full absolute -top-4 left-[17px] flex justify-center items-center p-1 transition-all duration-500 lg:group-hover:bg-black cursor-pointer"
            >
              <span className="text-white font-medium text-[18px]">{ cartQuantity }</span>
            </div>
          </div>
        </Link>
      </div>
    </header>
  )
}