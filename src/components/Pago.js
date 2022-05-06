import { Link } from "react-router-dom";

const Pago = ({ pago: { id, id_obligacion, fecha_pago, valor } }) => {

  return (
    <tr>
      <td>{id}</td>
      <td>{id_obligacion}</td>
      <td>{fecha_pago}</td>
      <td>{valor}</td>
      <td><Link to={`/pagos/editar/${id}`} className='linkEditar'>Editar</Link></td>
    </tr>
  )
}

export default Pago