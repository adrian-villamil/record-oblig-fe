import { Link } from "react-router-dom";

const Pago = ({ pago: { id, id_obligacion, fecha_pago, valor } }) => {

  return (
    <tr>
      <td>{id}</td>
      <td>{id_obligacion}</td>
      <td>{fecha_pago}</td>
      <td>{valor}</td>
      <td><Link to={`/editar-pago/${id}`} className='linkEditar' state={{id: id, idObligacion: id_obligacion, fechaPago: fecha_pago, valor: valor}}>Editar</Link></td>
    </tr>
  )
}

export default Pago