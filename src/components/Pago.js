import { Link } from "react-router-dom";
import Obligacion from "./Obligacion";

const Pago = ({ pago: { id, id_obligacion, fecha_pago, valor }, obligaciones}) => {

  return (
    <tr>
      <td>{id}</td>
      <td>{obligaciones.map(obligacion => obligacion.id == id_obligacion ? obligacion.nombre_obligacion : '').join('')}</td>
      <td>{fecha_pago}</td>
      <td>{valor}</td>
      <td><Link to={`/editar-pago/${id}`} className='linkEditar' state={{id: id, idObligacion: id_obligacion, fechaPago: fecha_pago, valor: valor}}>Editar</Link></td>
    </tr>
  )
}

export default Pago