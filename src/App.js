import './App.css';
import Nav from './components/Nav';
import EmpresasPage from './pages/EmpresasPage';
import RegistrarDatosPage from './pages/RegistrarDatosPage';
import PagosPage from './pages/PagosPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Nav /> }>
            <Route index element={ <RegistrarDatosPage /> } />
            <Route path='empresas' element={ <EmpresasPage /> } />
            <Route path='pagos' element={ <PagosPage /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;