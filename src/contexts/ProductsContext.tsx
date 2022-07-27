import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";
import { v4 as uuid } from "uuid";

export interface IProduct {
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
  editProduct: (editedProduct: TNewProduct) => Promise<void>;
  selectedProduct: IProduct | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProduct | null>>;
}

interface IProductsProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext<IProductsContextData>(
  {} as IProductsContextData
);

export function ProductsProvider({ children }: IProductsProviderProps) {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

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
      getProductList();
    } catch (err) {
      console.log(err);
    }
  }

  async function removeProduct(id: string) {
    try {
      await api.delete(`/products/${id}`);
      getProductList();
    } catch (err) {
      console.log(err);
    }
  }

  async function editProduct(editedProduct: TNewProduct) {
    try {
      await api.patch(`/products/${selectedProduct?.id}`, editedProduct);
      getProductList();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        productList,
        addProduct,
        removeProduct,
        editProduct,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => useContext(ProductsContext);
