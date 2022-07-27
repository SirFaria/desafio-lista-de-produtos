import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";
import { v4 as uuid } from "uuid";

interface IProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  createdAt: string;
}

type TNewProduct = Omit<IProduct, "id" | "createdAt">;

interface IProductsContextData {
  productList: IProduct[];
  addProduct: (newProduct: TNewProduct) => Promise<void>;
  removeProduct: (id: string) => Promise<void>;
}

interface IProductsProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext<IProductsContextData>(
  {} as IProductsContextData
);

export function ProductsProvider({ children }: IProductsProviderProps) {
  const [productList, setProductList] = useState<IProduct[]>([]);

  async function getProductList() {
    try {
      const { data } = await api.get("/products");
      setProductList(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function addProduct(newProduct: TNewProduct) {
    const payload = {
      ...newProduct,
      id: uuid(),
      createdAt: new Date().toISOString(),
    };

    try {
      await api.post("/products", payload);
      setProductList([...productList, payload]);
    } catch (err) {
      console.log(err);
    }
  }

  async function removeProduct(id: string) {
    try {
      await api.delete(`/products/${id}`);
      setProductList((state) => state.filter((product) => product.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  async function editProduct(id: string) {
    try {
      await api.put(`/products/${id}`);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ productList, addProduct, removeProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => useContext(ProductsContext);
