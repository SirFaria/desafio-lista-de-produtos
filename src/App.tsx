import { ModalProvider } from "./contexts/ModalContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import { Home } from "./pages/Home";

function App() {
  return (
    <ProductsProvider>
      <ModalProvider>
        <Home />
      </ModalProvider>
    </ProductsProvider>
  );
}

export default App;
