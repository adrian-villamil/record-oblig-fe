import { Link } from "react-router-dom";

const Obligacion = ({ obligacion: { id, id_empresa, nombre_obligacion, periodicidad } }) => {

  return (
    <tr>
      <td>{id}</td>
      <td>{id_empresa}</td>
      <td>{nombre_obligacion}</td>
      <td>{periodicidad}</td>
      <td><Link to={`/editar-obligacion/${id}`} className='linkEditar' state={{id: id, idEmpresa: id_empresa, nombre: nombre_obligacion, periodo: periodicidad}}>Editar</Link></td>
    </tr>
  )
}

export default Obligacion