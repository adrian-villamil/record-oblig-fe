import { useEffect, useState } from "react";
import axios from "axios";
import '../css/Formularios.css'
import FilaBoxForm from "./FilaBoxForm";

const FormularioPago = () => {

  const [obligaciones, setObligaciones] = useState([])
  const [idObligacion, setIdObligacion] = useState('');
  const [fechaPago, setFechaPago] = useState('');

  useEffect(() => {
    axios("http://127.0.0.1:8000/api/obligaciones/").then(response => {
      setObligaciones(response.data)
    }).catch(error => {
      alert("Hubo un error: " + error)
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/api/pagos/create/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id_obligacion: idObligacion,
        fecha_pago: fechaPago
      })
    }).catch(error => {
      alert("Hubo un error " + error);
    });
  }

  return (
    <div className="FormularioPago">
      <form onSubmit={handleSubmit}>
        <FilaBoxForm esSubmit={false} labelTexto='Nombre de la obligación:'>
          <select name="id" onChange={(e) => setIdObligacion(e.target.value)}>
            {obligaciones.map(obligacion => <option key={obligacion.id} value={obligacion.id}>{obligacion.nombre_obligacion}</option>)}
          </select>
        </FilaBoxForm>
        <FilaBoxForm esSubmit={false} labelTexto='Fecha de pago:'>
          <input type='date' name="fecha_pago" min={new Date().toISOString().split('T')[0]} onChange={(e) => setFechaPago(e.target.value)} required />
        </FilaBoxForm>
        <FilaBoxForm esSubmit={true}>
          <input type='submit' value='Registrar' required />
        </FilaBoxForm>
      </form>
    </div>
  )
}

export default FormularioPago