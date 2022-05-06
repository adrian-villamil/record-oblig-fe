import { useState } from "react"
import { Link } from "react-router-dom";

const Obligacion = ({ obligacion: { id, id_empresa, nombre_obligacion, periodicidad } }) => {

  const [idObligacion, setIdObligacion] = useState(id);
  const [idEmpresa, setIdEmpresa] = useState(id_empresa);
  const [nombreObligacion, setNombreObligacion] = useState(nombre_obligacion);
  const [periodo, setPeriodo] = useState(periodicidad);

  return (
    <tr>
      <td>{idObligacion}</td>
      <td>{idEmpresa}</td>
      <td>{nombreObligacion}</td>
      <td>{periodo}</td>
      <td><Link to={`/obligaciones/editar/${idObligacion}`}>Editar</Link></td>
    </tr>
  )
}

export default Obligacion