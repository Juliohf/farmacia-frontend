import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center text-black py-6 px-8 md:px-32 drop-shadow-md bg-slate-50">
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="nav">
            <Link to={"/Home"}>Home</Link>
          </li>
          <li className="nav">
            <Link to="/sobre">Sobre nós</Link>
          </li>
          <li className="nav">
            <Link to="/categorias">Categorias</Link>
          </li>
          <li className="nav">
            <Link to="/cadastroCategoria">Cadastrar categoria</Link>
          </li>
        </ul>
        <div className="relative hidden md:flex items-center justify-center gap-3">
          <i
            className="bx bx-search
          absolute left-3 text-2xl text-gray-500"
          ></i>
          <input
            type="text"
            placeholder="Pesquisar medicamento"
            className="py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500"
          />
        </div>
        <div className="xl:hidden block text-5xl cursor-pointer">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div
          className={`absolute xl:hidden top-24 left-0 p-4 w-full bg-slate-50 flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.5s ease, opacity 0.5s ease" }}
        >
          {" "}
          <li className="lit">
            <Link to={"/Home"}>Home</Link>
          </li>
          <li className="lit">
            <Link to="/sobre">Sobre nós</Link>
          </li>
          <li className="lit">
            <Link to="/categorias">Categorias</Link>
          </li>
          <li className="lit">
            <Link to="/cadastroCategoria">Cadastrar categoria</Link>
          </li>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
