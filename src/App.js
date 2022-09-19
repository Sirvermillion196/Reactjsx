import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Cars from "./Pages/Car";
import NotFound from "./Pages/NotFound";
import ToDoList from "./Components/ToDoList/ToDoList";
import Componente1 from "./Components/UseContext/Componente1";
import Auth from './Pages/Auth'
import Moeda from "./Pages/Moeda";
import ContasContabeis from "./Pages/ContasContabeis";
import Transacoes from "./Pages/Transacoes";
import Empresas from "./Components/Empresa/Empresa";
import Contato from "./Pages/Contato";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route path="carros" element={<Cars/>}/>
                  <Route path="*" element={<NotFound/>}/>
                  <Route path="todolist" element={<ToDoList/>}/>
                  <Route path="useContext" element={<Componente1/>}/>
                  <Route path="auth" element={<Auth/>}/>
                  <Route path="moeda" element={<Moeda/>}/>
                  <Route path="contasContabeis" element={<ContasContabeis/>}/>
                  <Route path="transacoes" element={<Transacoes/>}/>
                  <Route path="empresa" element={<Empresas/>}/>
                  <Route path="contato" element={<Contato/>}/>
          </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
