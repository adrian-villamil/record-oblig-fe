import '../css/Formulario.css'

const Formulario = () => {
  return (
    <div className="formulario">
      <form>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Empresa:</label>
          </div>
          <div className='f-columna c2'>
            <input type='text' placeholder='Ingrese el nombre de la empresa'/>
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Nit:</label>
          </div>
          <div className='f-columna c2'>
            <input type='text' placeholder='Ingrese el nit de la empresa'/>
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Obligación:</label>
          </div>
          <div className='f-columna c2'>
            <input type='text' placeholder='Ingrese el nombre de la obligación'/>
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Fecha de pago:</label>
          </div>
          <div className='f-columna c2'>
            <input type='date' min={new Date().toISOString().split('T')[0]}/>
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Valor:</label>
          </div>
          <div className='f-columna c2'>
            <input type='number' min='1' placeholder='Ingrese el valor a pagar'/>
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Periodicidad:</label>
          </div>
          <div className='f-columna c2'>
            <input type='number' min='1' placeholder='Ingrese el periodo de pago'/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Formulario