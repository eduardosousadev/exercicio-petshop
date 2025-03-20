import { useEffect, useState } from "react";
import api from "../services/api";
import { ProductProps } from "../types/types";


const useFetch = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api().get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("--- ERROR ---");
        console.log("Detalhes do erro: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  return { products, loading };
}

export default useFetch;