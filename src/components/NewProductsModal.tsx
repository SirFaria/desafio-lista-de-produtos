import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import { useProducts } from "../contexts/ProductsContext";

interface NewProductsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export interface IFormData {
  name: string;
  category: string;
  price: string;
}

export function NewProductsModal({
  isOpen,
  onRequestClose,
}: NewProductsModalProps) {
  const { addProduct } = useProducts();
  const { register, handleSubmit, reset } = useForm<IFormData>();

  async function handleAddNewProduct({ name, category, price }: IFormData) {
    await addProduct({ name, category, price: Number(price) });

    onRequestClose();
    reset();
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="react-modal-overlay"
      className="w-full max-w-[576px] bg-gray-200 relative p-12"
    >
      <form
        onSubmit={handleSubmit(handleAddNewProduct)}
        className="flex flex-col"
      >
        <div className="flex gap-10 text-4xl font-medium mb-8">
          <button onClick={onRequestClose}>{"<"}</button>
          <h2>Adicionar Produto</h2>
        </div>

        <label htmlFor="name">Nome</label>
        <input
          {...register("name")}
          required
          placeholder="Nome"
          id="name"
          className="mb-6 mt-1 p-2 border border-gray-500 "
        />

        <label htmlFor="category">Categoria</label>
        <input
          required
          {...register("category")}
          placeholder="Categoria"
          id="category"
          className="mb-6 mt-1 p-2 border border-gray-500 "
        />

        <label htmlFor="price">Preço</label>
        <input
          required
          {...register("price")}
          min={0}
          step={0.01}
          id="price"
          type="number"
          placeholder="R$"
          className="mb-6 mt-1 p-2 border border-gray-500"
        />

        <button
          type="submit"
          className="p-2 text-base font-bold bg-gray-800 text-gray-100 transition-colors duration-300 hover:bg-gray-700"
        >
          Salvar
        </button>
      </form>
    </ReactModal>
  );
}
