import { Toaster } from "sonner"
import { CartProvider } from "./context/CartProvider"
import ShopPage from "./pages/ShopPage"
import { LanguageProvider } from "./context/LanguageProvider"

function App() {

  return (
    <>
      <LanguageProvider>
        <CartProvider>
          <ShopPage />
          <Toaster richColors position="top-center" />
        </CartProvider>
      </LanguageProvider>
    </>
  )
}

export default App
