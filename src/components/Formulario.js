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
            <input type='text'/>
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Nit:</label>
          </div>
          <div className='f-columna c2'>
            <input type='text'/>
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Obligación:</label>
          </div>
          <div className='f-columna c2'>
            <input type='text'/>
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Fecha de pago:</label>
          </div>
          <div className='f-columna c2'>
            <input type='date'/>
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Valor a pagar:</label>
          </div>
          <div className='f-columna c2'>
            <input type='number'/>
          </div>
        </div>
        <div className="f-fila">
          <div className='f-columna c1'>
            <label>Periodo de pago:</label>
          </div>
          <div className='f-columna c2'>
            <input type='number'/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Formulario