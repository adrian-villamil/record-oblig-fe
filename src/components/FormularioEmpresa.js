import { useState } from 'react'
import '../css/Formularios.css'

const FormularioEmpresa = () => {

  const [nombre, setNombre] = useState('');
  const [nit, setNit] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/api/empresas/create/", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        nombre_empresa: nombre,
        nit_empresa: nit
      })
    }).catch(error => {
      alert("Hubo un error " + error);
    });
  }

  return (
    <div className="FormularioEmpresa">
      <form onSubmit={handleSubmit}>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Nombre de la empresa:</label>
          </div>
          <div className='f-columna c2'>
            <input type='text' name='nombre_empresa' onChange={(e) => {setNombre(e.target.value)}} placeholder='Ingrese el nombre de la empresa' required />
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Nit de la empresa:</label>
          </div>
          <div className='f-columna c2'>
            <input type='number' name='nit_empresa' min='1' onChange={(e) => {setNit(e.target.value)}} placeholder='Ingrese el nit de la empresa' required />
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

export default FormularioEmpresa