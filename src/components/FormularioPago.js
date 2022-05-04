import { useEffect, useState } from "react";
import axios from "axios";
import '../css/Formularios.css'

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
      <div className="f-fila">
          <div className="f-columna c1">
            <label>Nombre de la obligación:</label>
          </div>
          <div className="f-columna c2">
            <select name="id" onChange={(e) => setIdObligacion(e.target.value)}>
              {obligaciones.map(obligacion => <option key={obligacion.id} value={obligacion.id}>{obligacion.nombre_obligacion}</option>)}
            </select>
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Fecha de pago:</label>
          </div>
          <div className='f-columna c2'>
            <input type='date' name="fecha_pago" min={new Date().toISOString().split('T')[0]} onChange={(e) => setFechaPago(e.target.value)} required />
          </div>
        </div>
        <div className='f-fila'>
          <div className='f-columna'>
            <input type='submit' value='Registrar' required />
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormularioPago