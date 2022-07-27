import { useState } from "react";

import { NewProductsModal } from "./components/NewProductsModal";
import { ProductsProvider } from "./contexts/ProductsContext";
import { Home } from "./pages/Home";

function App() {
  const [isNewProductsModalOpen, setIsNewProductsModalOpen] = useState(false);

  function handleOpenNewProductsModal() {
    setIsNewProductsModalOpen(true);
  }

  function handleCloseNewProductsModal() {
    setIsNewProductsModalOpen(false);
  }
  return (
    <ProductsProvider>
      <NewProductsModal
        isOpen={isNewProductsModalOpen}
        onRequestClose={handleCloseNewProductsModal}
      />
      <Home onOpenNewProductsModal={handleOpenNewProductsModal} />
    </ProductsProvider>
  );
}

export default App;
