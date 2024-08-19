import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className="border border-gray-300 shadow-md flex flex-col rounded-lg overflow-hidden">
      <header className="py-3 px-6 bg-green-600 text-white font-bold text-xl">
        Categoria
      </header>
      <div className="p-6 bg-white flex-1">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {categoria.nome}
        </h2>
        <p className="text-gray-600">{categoria.descricao}</p>
      </div>
      <div className="flex border-t border-gray-300">
        <Link
          to={`/editarCategoria/${categoria.id}`}
          className="w-1/2 text-white bg-green-500 hover:bg-green-700 flex items-center justify-center py-2 border-r border-gray-300"
        >
          <button className="focus:outline-none">Editar</button>
        </Link>
        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="w-1/2 text-white bg-red-500 hover:bg-red-700 flex items-center justify-center py-2"
        >
          <button className="focus:outline-none">Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;
