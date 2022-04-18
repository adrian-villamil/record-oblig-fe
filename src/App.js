import './App.css';
import Layout from './pages/Layout';
import PrincipalPage from './pages/PrincipalPage';
import IngresarDatosPage from './pages/IngresarDatosPage';
import MostrarDatosPage from './pages/MostrarDatosPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            <Route index element={ <PrincipalPage /> } />
            <Route path='ingresar-datos' element={ <IngresarDatosPage /> } />
            <Route path='mostrar-datos' element={ <MostrarDatosPage /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;