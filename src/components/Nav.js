import { Outlet, Link } from "react-router-dom"
import '../css/Nav.css'

const Nav = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li className="dropdown">
            <a href="javascript:void(0)" className="dropbtn">Registrar</a>
            <div className="dropdown-content">
              <Link to='/' className="droplink">Empresa</Link>
              <Link to='/registrar-obligacion' className="droplink">Obligacion</Link>
              <Link to='/registrar-pago' className="droplink">Pago</Link>
            </div>
          </li>
          <li>
            <Link to='/empresas' className="link">Empresas</Link>
          </li>
          <li>
            <Link to='/obligaciones' className="link">Obligaciones</Link>
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