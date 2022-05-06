import { useState } from "react";
import { Link } from "react-router-dom";

const Pago = ({ pago: { id, id_obligacion, fecha_pago, valor } }) => {

  const [idPago, setIdPago] = useState(id);
	const [idObligacion, setIdObligacion] = useState(id_obligacion);
	const [fechaPago, setFechaPago] = useState(fecha_pago);
	const [costo, setCosto] = useState(valor);

  return (
    <tr>
      <td>{idPago}</td>
      <td>{idObligacion}</td>
      <td>{fechaPago}</td>
      <td>{costo}</td>
      <td><Link to={`/pagos/editar/${idObligacion}`} className='linkEditar'>Editar</Link></td>
    </tr>
  )
}

export default Pago