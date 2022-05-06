import { Link } from "react-router-dom";

const Obligacion = ({ obligacion: { id, id_empresa, nombre_obligacion, periodicidad }, empresas }) => {

  return (
    <tr>
      <td>{id}</td>
      <td>{empresas.map(empresa => empresa.id == id_empresa ? empresa.nombre_empresa : '').join('')}</td>
      <td>{nombre_obligacion}</td>
      <td>{periodicidad}</td>
      <td><Link to={`/editar-obligacion/${id}`} className='linkEditar' state={{id: id, idEmpresa: id_empresa, nombre: nombre_obligacion, periodo: periodicidad}}>Editar</Link></td>
    </tr>
  )
}

export default Obligacion