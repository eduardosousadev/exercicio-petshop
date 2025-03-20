import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Toaster } from "sonner";
import CartProvider from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Toaster richColors position="top-center" />
      <RouterProvider router={ router } />
    </CartProvider>
  )
}

export default App
