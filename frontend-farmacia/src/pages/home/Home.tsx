import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <header className="bg-green-800 text-white py-6">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-2">Farmácia da Esquina</h1>
          <p className="text-lg">Entregas 24/7 com qualidade e confiança</p>
          <button className="mt-4 bg-white text-green-800 py-2 px-4 rounded-lg hover:bg-green-100 transition">
            Ver Produtos
          </button>
        </div>
      </header>

      <div className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Categorias Populares</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Medicamentos</h3>
              <p className="text-gray-600">
                Encontre todos os medicamentos que você precisa.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Rivotril</h3>
              <p className="text-gray-600 mb-4">
                Medicamento usado para prevenir e tratar convulsões, transtorno
                do pânico, transtornos de ansiedade
              </p>
              <span className="block text-lg font-semibold text-green-800">
                R$ 29,99
              </span>
              <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
