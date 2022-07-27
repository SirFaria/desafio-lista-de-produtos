import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { NewProductsModal } from "./components/NewProductsModal";
import { Home } from "./pages/Home";
import { Router } from "./Router";

function App() {
  const [isNewProductsModalOpen, setIsNewProductsModalOpen] = useState(false);

  function handleOpenNewProductsModal() {
    setIsNewProductsModalOpen(true);
  }

  function handleCloseNewProductsModal() {
    setIsNewProductsModalOpen(false);
  }
  return (
    <>
      <NewProductsModal
        isOpen={isNewProductsModalOpen}
        onRequestClose={handleCloseNewProductsModal}
      />
      <Home onOpenNewProductsModal={handleOpenNewProductsModal} />
    </>
  );
}

export default App;
