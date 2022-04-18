import { Outlet, Link } from "react-router-dom"
import '../css/Layout.css'

const Layout = () => {
  return (
    <div className="layout">
      <nav>
        <ul>
          <li>
            <Link to='/' className="link">Inicio</Link>
          </li>
          <li>
            <Link to='/ingresar-datos' className="link">Registrar</Link>
          </li>
          <li>
            <Link to='/mostrar-datos' className="link">Mostrar</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout