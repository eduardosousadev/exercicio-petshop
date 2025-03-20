import { useContext } from "react";
import * as helpers from "../../helpers/generalHelpers";
import useFetch from "../../hooks/useFetch";
import { FaCartPlus } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export function Home() {
  const { products, loading } = useFetch();
  const { addItemToCart, showDetails, closingDetails, handleClose, handleOpen, item } = useContext(CartContext);

  return (
    <div className="container p-5 min-h-[calc(100vh-160px)] flex flex-col justify-start items-center mt-[100px]">
      {
        loading || products.length === 0 ? (
          <div className="flex justify-center items-center w-full min-h-[calc(100vh-200px)]">
            <p className="text-center text-2xl">
              Carregando
              <span className="inline-block animate-dot1">.</span>              
              <span className="inline-block animate-dot2">.</span>              
              <span className="inline-block animate-dot3">.</span>              
            </p>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold">Nossos produtos</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {products.map((product) => (
                <li key={ product.id } className="p-2 relative border border-black rounded-md">
                  <img className="h-[180px] mx-auto" src={ product.cover } alt={ product.title } />
                  <div className="min-h-[120px] mt-2">
                    <h2 className="text-sm text-center min-h-[40px]">{ product.title }</h2>
                    <span 
                      className="text-blue-500 cursor-pointer underline italic text-xs duration-300 lg:text-black lg:hover:text-blue-500"
                      onClick={ () => handleOpen(product) }
                    >
                      Detalhes do produto
                    </span>
                  </div>
                  <div className="w-full bg-default p-2 rounded-bl-md rounded-br-md absolute bottom-0 left-0">
                    <p>{ helpers.formatCurrency(product.price) }</p>
                  </div>
                  <div 
                    className="w-[40px] h-[40px] absolute bottom-0 right-0 flex justify-center items-center rounded-br-md lg:hover:text-[#da7910] lg:hover:border border-black cursor-pointer"
                    onClick={ (e) => addItemToCart(e, product) }
                  >
                    <FaCartPlus size={ 24 } />
                  </div>
                </li>
              ))}
            </ul>
          </>
        )
      }
      <div 
        style={{ display: showDetails ? "flex" : "none"}}
        className="fixed inset-0 backdrop-blur bg-black/50 flex justify-center items-center z-10"
        onClick={ handleClose }
      >
        <div className={`w-[350px] h-[430px] bg-white p-6 rounded-lg shadow-lg relative ${ showDetails ? 'animate-open' : '' } ${ closingDetails ? 'animate-close' : '' }`} onClick={(e) => e.stopPropagation()}>
          <IoIosCloseCircle 
            size={ 30 } 
            className="text-red-400 absolute top-1 right-1 cursor-pointer" 
            onClick={ handleClose }
          />


          <div className="max-w-[300px] flex flex-col justify-center items-start border border-black rounded-md mb-2 relative mt-3">
            <h3 className="w-[300px] p-1 text-base font-semibold truncate">{ item.title }</h3>
            <img src={ item.cover } alt={ item.title } className="w-[150px] max-h-[150px] object-contain rounded-bl-md" />
            <div className="w-1/2 flex-1 flex justify-between items-center bg-[#f9fad2] p-2 absolute bottom-0 right-0 rounded-br-md">
              <span>{ helpers.formatCurrency(item.price) }</span>
              <div 
                className="w-[40px] h-[40px] absolute bottom-0 right-0 flex justify-center items-center rounded-br-md lg:hover:text-[#da7910] lg:hover:border border-black cursor-pointer"
                onClick={ (e) => addItemToCart(e, item) }
              >
                <FaCartPlus size={ 24 } />
              </div>
            </div>
            
            <Link to="/cart" className="absolute top-8 right-1 flex justify-center items-center gap-1 text-blue-500 underline cursor-pointer transition duration-500 lg:text-black lg:hover:text-blue-500">
              <p className="text-xs">Ir para o carrinho</p>
              <GoArrowUpRight size={ 20 } />
            </Link>
          </div>

          <p className="flex-1 h-[170px] overflow-y-auto mt-3 pr-1">{ item.description }</p>
        </div>
      </div>
    </div>
  )
}