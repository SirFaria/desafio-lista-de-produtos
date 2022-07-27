export function Home() {
  return (
    <main className="px-28 h-screen ">
      <section className="pt-32 flex justify-center items-center flex-col">
        <header className="w-full pb-8 flex justify-between">
          <h1 className="text-5xl font-bold">Produtos</h1>
          <button className="py-2 px-4 text-base font-bold bg-gray-800 text-gray-100 transition-colors duration-300 hover:bg-gray-700">
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
            <tr>
              <td className="border border-gray-500 pl-2 py-1 text-xl ">
                Banana
              </td>
              <td className="border border-gray-500 pl-2 py-1 text-xl ">
                Frutas
              </td>
              <td className="border border-gray-500 pl-2 py-1 text-xl ">
                R$9,99
              </td>
              <td className="border border-gray-500 pl-2 py-1 text-xl ">
                27/10/2020
              </td>
              <td className="border border-gray-500 pl-2 py-1 text-xl ">
                🙏😎
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 pl-2 py-1 text-xl ">
                Morango
              </td>
              <td className="border border-gray-500 pl-2 py-1 text-xl ">
                Frutas
              </td>
              <td className="border border-gray-500 pl-2 py-1 text-xl ">
                R$9,99
              </td>
              <td className="border border-gray-500 pl-2 py-1 text-xl ">
                27/10/2020
              </td>
              <td className="border border-gray-500 pl-2 py-1 text-xl ">
                🙏😎
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 pl-2 py-1 text-xl ">
                Abacaxi
              </td>
              <td className="border border-gray-500 pl-2 py-1 text-xl ">
                Frutas
              </td>
              <td className="border border-gray-500 pl-2 py-1 text-xl ">
                R$9,99
              </td>
              <td className="border border-gray-500 pl-2 py-1 text-xl ">
                27/10/2020
              </td>
              <td className="border border-gray-500 pl-2 py-1 text-xl ">
                🙏😎
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
