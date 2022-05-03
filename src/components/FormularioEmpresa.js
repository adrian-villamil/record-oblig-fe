import { useState } from 'react'
import '../css/FormularioEmpresa.css'

const FormularioEmpresa = () => {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      nombre_empresa: inputs.nombre_empresa,
      nit_empresa: inputs.nit_empresa
    }
    fetch("http://127.0.0.1:8000/api/empresas/create/", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
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
            <input type='text' name='nombre_empresa' onChange={handleChange} placeholder='Ingrese el nombre de la empresa' required />
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Nit de la empresa:</label>
          </div>
          <div className='f-columna c2'>
            <input type='number' name='nit_empresa' min='1' onChange={handleChange} placeholder='Ingrese el nit de la empresa' required />
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