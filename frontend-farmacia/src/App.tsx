import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import ListaCategorias from "./components/Categorias/listaCategorias/listaCategorias";
import FormularioCategorias from "./components/Categorias/formularioCategoria/formularioCategoria";
import DeletarCategoria from "./components/Categorias/deletarCategoria/deletarCategoria";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="min-h-[70vh]">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route
              path="/cadastroCategoria"
              element={<FormularioCategorias />}
            />
            <Route
              path="/editarCategoria/:id"
              element={<FormularioCategorias />}
            />
            <Route
              path="/deletarCategoria/:id"
              element={<DeletarCategoria />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
