import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import '../css/Formularios.css'
import FilaBoxForm from "./FilaBoxForm";

const EditarObligacion = () => {

  const location = useLocation();
  const state = location.state;
  const [empresas, setEmpresas] = useState([]);
  const [idEmpresa, setIdEmpresa] = useState(state.idEmpresa);
  const [nombreObligacion, setNombreObligacion] = useState(state.nombre);
  const [periodo, setPeriodo] = useState(state.periodo);

  useEffect(() => {
    axios("http://127.0.0.1:8000/api/empresas/").then(response => {
      setEmpresas(response.data)
    }).catch(error => {
      alert("Hubo un error: " + error)
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://127.0.0.1:8000/api/obligaciones/actualizar/${state.id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id_empresa: idEmpresa,
        nombre_obligacion: nombreObligacion.concat(empresas.map(empresa => {
          if (empresa.id == idEmpresa) {
            return empresa.nombre_empresa
          }
          return ''
        }).join('').replace('', ' - ')),
        periodicidad: periodo
      })
    }).then(response => response.ok ? alert('Se registró la obligación correctamente') : alert('No se registró la obligación'))
      .catch(error => {
        alert("Hubo un error " + error);
      });
  }

  return (
    <div className="EditarObligacion">
      <form onSubmit={handleSubmit}>
        <FilaBoxForm esSubmit={false} labelTexto='Nombre de la empresa:'>
          <select name="id" value={idEmpresa} defaultValue={state.idEmpresa} onChange={(e) => setIdEmpresa(e.target.value)} required>
            {empresas.map(empresa => <option key={empresa.id} value={empresa.id}>{empresa.nombre_empresa}</option>)}
          </select>
        </FilaBoxForm>
        <FilaBoxForm esSubmit={false} labelTexto='Nombre de la obligación:'>
          <input type='text' name='nombre_obligacion' placeholder={state.nombre} defaultValue={state.nombre} onChange={(e) => setNombreObligacion(e.target.value.toUpperCase())} required />
        </FilaBoxForm>
        <FilaBoxForm esSubmit={false} labelTexto='Periodo de pago:'>
          <input type='number' name="periodicidad" min='1' placeholder={state.periodo} defaultValue={state.periodo} onChange={(e) => setPeriodo(e.target.value)} required />
        </FilaBoxForm>
        <FilaBoxForm esSubmit={true} submitValue='Modificar' />
      </form>
    </div>
  )
}

export default EditarObligacion