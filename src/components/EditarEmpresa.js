import { useState } from "react";
import { useLocation } from "react-router-dom";
import FilaBoxForm from "./FilaBoxForm";
import '../css/Formularios.css'

const EditarEmpresa = () => {
  const location = useLocation();
  const state = location.state;
  const [nombre, setNombre] = useState(state.nombre);
  const [nit, setNit] = useState(state.nit);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://127.0.0.1:8000/api/empresas/actualizar/${state.id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre_empresa: nombre,
        nit_empresa: nit
      })
    }).then(response => response.ok ? alert('Se modificó la empresa correctamente') : alert('No se modificó la empresa'))
    .catch(error => {
      alert("Hubo un error " + error);
    });
  }
  
  return (
    <div className="EditarEmpresa">
      <form onSubmit={handleSubmit}>
        <FilaBoxForm esSubmit={false} labelTexto="Nombre de la empresa:">
          <input type='text' name='nombre_empresa' defaultValue={state.nombre} onChange={(e) => { setNombre(e.target.value.toUpperCase()) }} placeholder={state.nombre} required />
        </FilaBoxForm>
        <FilaBoxForm esSubmit={false} labelTexto="Nit de la empresa:">
          <input type='number' name='nit_empresa' min='1' defaultValue={state.nit} onChange={(e) => { setNit(e.target.value) }} placeholder={state.nit} required />
        </FilaBoxForm>
        <FilaBoxForm esSubmit={true} submitValue='Modificar' />
      </form>
    </div>
  )
}

export default EditarEmpresa