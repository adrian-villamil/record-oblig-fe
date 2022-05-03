import './App.css';
import Nav from './components/Nav';
import EmpresasPage from './pages/EmpresasPage';
import RegistrarEmpresaPage from './pages/RegistrarEmpresaPage';
import RegistrarObligacionPage from './pages/RegistrarObligacionPage';
import RegistrarPagoPage from './pages/RegistrarPagoPage';
import PagosPage from './pages/PagosPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Nav /> }>
            <Route index element={ <RegistrarEmpresaPage /> } />
            <Route path='registrar-obligacion' element={ <RegistrarObligacionPage />} />
            <Route path='registrar-pago' element={ <RegistrarPagoPage />} />
            <Route path='empresas' element={ <EmpresasPage /> } />
            <Route path='pagos' element={ <PagosPage /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;