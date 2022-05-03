import axios from "axios"
import { useEffect, useState } from "react"
import '../css/Formularios.css'

const FormularioObligacion = () => {

  const [empresas, setEmpresas] = useState([]);

  const [datos, setDatos] = useState({
    id_empresa: '',
    nombre_obligacion: '',
    fecha_pago_vencimiento: '',
    valor: 0,
    periodicidad: 0
  })

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
      body: JSON.stringify(datos)
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
            <select name="id" onChange={(e) => setDatos(datos.id_empresa = e.target.value)}>
              {empresas.map(empresa => <option key={empresa.id} value={empresa.id}>{empresa.nombre_empresa}</option>)}
            </select>
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Nombre de la obligacion:</label>
          </div>
          <div className='f-columna c2'>
            <input type='text' name='nombre_obligacion' placeholder='Ingrese el nombre de la obligacion' onChange={(e) => setDatos(datos.nombre_obligacion = e.target.value)} required />
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Fecha de vencimiento:</label>
          </div>
          <div className='f-columna c2'>
            <input type='date' name="fecha_pago_vencimiento" min={new Date().toISOString().split('T')[0]} onChange={(e) => setDatos(datos.fecha_pago_vencimiento = e.target.value)} required />
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Valor a pagar:</label>
          </div>
          <div className='f-columna c2'>
            <input type='number' name="valor" min='1' placeholder='Ingrese el valor a pagar' onChange={(e) => setDatos(datos.valor = e.target.value)} required />
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Periodo de pago:</label>
          </div>
          <div className='f-columna c2'>
            <input type='number' name="periodicidad" min='1' placeholder='Ingrese el periodo de pago' onChange={(e) => setDatos(datos.periodicidad = e.target.value)} required />
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