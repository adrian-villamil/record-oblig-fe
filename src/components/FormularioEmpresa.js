import { useState } from 'react'
import '../css/Formularios.css'
import FilaBoxForm from './FilaBoxForm';

const FormularioEmpresa = () => {

  const [nombre, setNombre] = useState('');
  const [nit, setNit] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/api/empresas/create/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre_empresa: nombre,
        nit_empresa: nit
      })
    }).then(response => response.ok ? alert('Se registró la empresa correctamente') : alert('No se registró la empresa'))
    .catch(error => {
      alert("Hubo un error " + error);
    });
  }

  return (
    <div className="FormularioEmpresa">
      <form onSubmit={handleSubmit}>
        <h2>Crear empresa</h2>
        <FilaBoxForm esSubmit={false} labelTexto="Nombre de la empresa:">
          <input type='text' name='nombre_empresa' onChange={(e) => { setNombre(e.target.value.toUpperCase()) }} placeholder='Ingrese el nombre de la empresa' required />
        </FilaBoxForm>
        <FilaBoxForm esSubmit={false} labelTexto="Nit de la empresa:">
          <input type='number' name='nit_empresa' min='1' onChange={(e) => { setNit(e.target.value) }} placeholder='Ingrese el nit de la empresa' required />
        </FilaBoxForm>
        <FilaBoxForm esSubmit={true} submitValue='Registrar' />
      </form>
    </div>
  )
}

export default FormularioEmpresa