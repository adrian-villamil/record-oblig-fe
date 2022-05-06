import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/Formularios.css'
import FilaBoxForm from './FilaBoxForm';

const EditarPago = () => {

  const location = useLocation();
  const state = location.state;
  const [obligaciones, setObligaciones] = useState([])
  const obligacion = obligaciones.map(obligacion => obligacion.id == state.idObligacion ? obligacion.nombre_obligacion : '').join('');
  const [fechaPago, setFechaPago] = useState(state.fechaPago);
  const [costo, setCosto] = useState(state.valor);

  useEffect(() => {
    axios("http://127.0.0.1:8000/api/obligaciones/").then(response => {
      setObligaciones(response.data)
    }).catch(error => {
      alert("Hubo un error: " + error)
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://127.0.0.1:8000/api/pagos/actualizar/${state.id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fecha_pago: fechaPago,
        valor: costo
      })
    }).then(response => response.ok ? alert('Se registró el pago correctamente') : alert('No se registró el pago'))
      .catch(error => {
        alert("Hubo un error " + error);
      });
  }

  return (
    <div className="EditarPago">
      <form onSubmit={handleSubmit}>
        <FilaBoxForm esSubmit={false} labelTexto='Nombre de la obligación:'>
          <input type='text' name='nombre_obligacion' value={obligacion} disabled />
        </FilaBoxForm>
        <FilaBoxForm esSubmit={false} labelTexto='Fecha de pago:'>
          <input type='date' name="fecha_pago" min={new Date().toISOString().split('T')[0]} onChange={(e) => setFechaPago(e.target.value)} required />
        </FilaBoxForm>
        <FilaBoxForm esSubmit={false} labelTexto='Valor de la obligación:'>
          <input type='number' name="valor" min='1' placeholder={state.valor} defaultValue={state.valor} onChange={(e) => setCosto(e.target.value)} required />
        </FilaBoxForm>
        <FilaBoxForm esSubmit={true} submitValue='Registrar' />
      </form>
    </div>
  )
}

export default EditarPago