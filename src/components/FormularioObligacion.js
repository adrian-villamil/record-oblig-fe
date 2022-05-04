import axios from "axios"
import { useEffect, useState } from "react"
import '../css/Formularios.css'
import FilaBoxForm from "./FilaBoxForm";

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
      headers: { 'Content-Type': 'application/json' },
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
        <FilaBoxForm esSubmit={false} labelTexto='Nombre de la empresa:'>
          <select name="id" onChange={(e) => setIdEmpresa(e.target.value)}>
            {empresas.map(empresa => <option key={empresa.id} value={empresa.id}>{empresa.nombre_empresa}</option>)}
          </select>
        </FilaBoxForm>
        <FilaBoxForm esSubmit={false} labelTexto='Nombre de la obligación:'>
          <input type='text' name='nombre_obligacion' placeholder='Ingrese el nombre de la obligacion' onChange={(e) => setNombreObligacion(e.target.value)} required />
        </FilaBoxForm>
        <FilaBoxForm esSubmit={false} labelTexto='Fecha de vencimiento:'>
          <input type='date' name="fecha_pago_obligacion" min={new Date().toISOString().split('T')[0]} onChange={(e) => setFechaVencimiento(e.target.value)} required />
        </FilaBoxForm>
        <FilaBoxForm esSubmit={false} labelTexto='Valor a pagar:'>
          <input type='number' name="valor" min='1' placeholder='Ingrese el valor a pagar' onChange={(e) => setCosto(e.target.value)} required />
        </FilaBoxForm>
        <FilaBoxForm esSubmit={false} labelTexto='Periodo de pago:'>
          <input type='number' name="periodicidad" min='1' placeholder='Ingrese en días el periodo de pago' onChange={(e) => setPeriodo(e.target.value)} required />
        </FilaBoxForm>
        <FilaBoxForm esSubmit={true} />
      </form>
    </div>
  )
}

export default FormularioObligacion