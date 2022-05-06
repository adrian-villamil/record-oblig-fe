import { useState } from "react";
import { useParams } from "react-router-dom";
import FilaBoxForm from "./FilaBoxForm";

const EditarEmpresa = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState('');
  const [nit, setNit] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://127.0.0.1:8000/api/empresas/actualizar/${id}`, {
      method: 'PATCH',
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
          <input type='text' name='nombre_empresa' onChange={(e) => { setNombre(e.target.value.toUpperCase()) }} placeholder='Ingrese el nombre de la empresa' required />
        </FilaBoxForm>
        <FilaBoxForm esSubmit={false} labelTexto="Nit de la empresa:">
          <input type='number' name='nit_empresa' min='1' onChange={(e) => { setNit(e.target.value) }} placeholder='Ingrese el nit de la empresa' required />
        </FilaBoxForm>
        <FilaBoxForm esSubmit={true} />
      </form>
    </div>
  )
}

export default EditarEmpresa