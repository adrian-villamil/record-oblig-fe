import { Outlet, Link } from "react-router-dom"
import '../css/Nav.css'

const Nav = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to='/' className="link">Registro</Link>
          </li>
          <li>
            <Link to='/empresas' className="link">Empresas</Link>
          </li>
          <li>
            <Link to='/pagos' className="link">Pagos</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Nav