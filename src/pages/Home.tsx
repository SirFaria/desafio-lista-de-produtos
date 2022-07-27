import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { NewProductsModal } from "../components/NewProductsModal";
import api from "../services/api";

interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  createdAt: string;
}

interface HomeProps {
  onOpenNewProductsModal: () => void;
}

export function Home({ onOpenNewProductsModal }: HomeProps) {
  const [productList, setProductList] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("/products").then((data) => setProductList(data.data));
  }, []);

  console.log(productList);

  return (
    <main className="px-28 h-screen ">
      <section className="pt-32 flex justify-center items-center flex-col">
        <header className="w-full pb-8 flex justify-between">
          <h1 className="text-5xl font-bold">Produtos</h1>
          <button
            onClick={onOpenNewProductsModal}
            className="py-2 px-4 text-base font-bold bg-gray-800 text-gray-100 transition-colors duration-300 hover:bg-gray-700"
          >
            Adicionar Produto
          </button>
        </header>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left border border-gray-500 pl-2 text-2xl py-2">
                Nome
              </th>
              <th className="text-left border border-gray-500 pl-2 text-2xl py-2">
                Categoria
              </th>
              <th className="text-left border border-gray-500 pl-2 text-2xl py-2">
                Preço
              </th>
              <th className="text-left border border-gray-500 pl-2 text-2xl py-2">
                Data de criação
              </th>
              <th className="text-left border border-gray-500 pl-2 text-2xl py-2">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => (
              <tr key={product.id}>
                <td className="border border-gray-500 pl-2 py-1 text-xl ">
                  {product.name}
                </td>
                <td className="border border-gray-500 pl-2 py-1 text-xl ">
                  {product.category}
                </td>
                <td className="border border-gray-500 pl-2 py-1 text-xl ">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.price)}
                </td>
                <td className="border border-gray-500 pl-2 py-1 text-xl ">
                  {product.createdAt}
                </td>
                <td className="border border-gray-500 pl-2 py-1 text-xl ">
                  🙏😎
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
