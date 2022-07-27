import { useState } from "react";
import ReactModal from "react-modal";

interface NewProductsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewProductsModal({
  isOpen,
  onRequestClose,
}: NewProductsModalProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);

  function handleAddNewProduct() {}

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="react-modal-overlay"
      className="w-full max-w-[576px] bg-gray-200 relative p-12"
    >
      <form action="" className="flex flex-col">
        <div className="flex gap-10 text-4xl font-medium mb-8">
          <button onClick={onRequestClose}>{"<"}</button>
          <h2>Adicionar Produto</h2>
        </div>

        <label htmlFor="name">Nome</label>
        <input
          placeholder="Nome"
          id="name"
          className="mb-6 mt-1 p-2 border border-gray-500 "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="category">Categoria</label>
        <input
          placeholder="Categoria"
          id="category"
          className="mb-6 mt-1 p-2 border border-gray-500 "
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <label htmlFor="price">Preço</label>
        <input
          type="number"
          min={0}
          placeholder="R$"
          id="price"
          className="mb-6 mt-1 p-2 border border-gray-500"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
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
