import { createContext, ReactNode, useContext, useState } from "react";
import { EditProductModal } from "../components/EditProductModal";
import { NewProductsModal } from "../components/NewProductsModal";
import { IProduct } from "./ProductsContext";

interface IModalProviderProps {
  children: ReactNode;
}

interface IModalContextData {
  isNewProductsModalOpen: boolean;
  OpenNewProductsModal(): void;
  isEditProductModalOpen: boolean;
  OpenEditProductModal(): void;
}

export const ModalContext = createContext({} as IModalContextData);

export function ModalProvider({ children }: IModalProviderProps) {
  const [isNewProductsModalOpen, setIsNewProductsModalOpen] = useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);

  function OpenNewProductsModal() {
    setIsNewProductsModalOpen(true);
  }

  function CloseNewProductsModal() {
    setIsNewProductsModalOpen(false);
  }

  function OpenEditProductModal() {
    setIsEditProductModalOpen(true);
  }

  function CloseEditProductModal() {
    setIsEditProductModalOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{
        isNewProductsModalOpen,
        OpenNewProductsModal,
        isEditProductModalOpen,
        OpenEditProductModal,
      }}
    >
      <NewProductsModal
        isOpen={isNewProductsModalOpen}
        onRequestClose={CloseNewProductsModal}
      />
      <EditProductModal
        isOpen={isEditProductModalOpen}
        onRequestClose={CloseEditProductModal}
      />
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
