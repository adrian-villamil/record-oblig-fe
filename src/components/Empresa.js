import { Link } from "react-router-dom";

const Empresa = ({ empresa: { id, nombre_empresa, nit_empresa } }) => {

  return (
    <tr>
      <td>{id}</td>
      <td>{nombre_empresa}</td>
      <td>{nit_empresa}</td>
      <td><Link to={`/editar-empresa/${id}`} className='linkEditar' state={{id: id, nombre: nombre_empresa, nit: nit_empresa}}>Editar</Link></td>
    </tr>
  )
}

export default Empresa