import axios from "axios"
import { useEffect, useState } from "react"
import '../css/Formularios.css'

const FormularioObligacion = () => {

  const [empresas, setEmpresas] = useState([]);
  const [idEmpresa, setIdEmpresa] = useState('');
  const [nombreObligacion, setNombreObligacion] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState('');
  const [costo, setCosto] = useState(0);
  const [periodo, setPeriodo] = useState(0);

  useEffect(() => {
    axios("http://127.0.0.1:8000/api/empresas/").then(response => {
      setEmpresas(response.data)
    }).catch(error => {
      alert("Hubo un error: " + error)
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/api/obligaciones/create/", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id_empresa: idEmpresa,
        nombre_obligacion: nombreObligacion,
        fecha_pago_obligacion: fechaVencimiento,
        valor: costo,
        periodicidad: periodo
      })
    }).catch(error => {
      alert("Hubo un error " + error);
    });
  }

  return (
    <div className="FormularioObligacion">
      <form onSubmit={handleSubmit}>
        <div className="f-fila">
          <div className="f-columna c1">
            <label>Nombre de la empresa:</label>
          </div>
          <div className="f-columna c2">
            <select name="id" onChange={(e) => setIdEmpresa(e.target.value)}>
              {empresas.map(empresa => <option key={empresa.id} value={empresa.id}>{empresa.nombre_empresa}</option>)}
            </select>
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Nombre de la obligacion:</label>
          </div>
          <div className='f-columna c2'>
            <input type='text' name='nombre_obligacion' placeholder='Ingrese el nombre de la obligacion' onChange={(e) => setNombreObligacion(e.target.value)} required />
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Fecha de vencimiento:</label>
          </div>
          <div className='f-columna c2'>
            <input type='date' name="fecha_pago_vencimiento" min={new Date().toISOString().split('T')[0]} onChange={(e) => setFechaVencimiento(e.target.value)} required />
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Valor a pagar:</label>
          </div>
          <div className='f-columna c2'>
            <input type='number' name="valor" min='1' placeholder='Ingrese el valor a pagar' onChange={(e) => setCosto(e.target.value)} required />
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Periodo de pago:</label>
          </div>
          <div className='f-columna c2'>
            <input type='number' name="periodicidad" min='1' placeholder='Ingrese en días el periodo de pago' onChange={(e) => setPeriodo(e.target.value)} required />
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

export default FormularioObligacion