const FilaBoxForm = (props) => {

  if (!props.esSubmit) {
    return (
      <div className="f-fila">
        <div className="f-columna c1">
          <label>{props.labelTexto}</label>
        </div>
        <div className="f-columna c2">
          {props.children}
        </div>
      </div>
    )
  }
  return (
    <div className="f-fila">
      <div className="f-columna">
        <input type='submit' value='Registrar' required />
      </div>
    </div>
  )
}

export default FilaBoxForm