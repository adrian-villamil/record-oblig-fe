import Pago from "./Pago";
import '../css/Tablas.css'

const Pagos = ({ pagos }) => {

  return (
    <div className="Pagos">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Id Obligación</th>
            <th>Fecha de pago</th>
            <th>Valor</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pagos.map(pago => <Pago key={pago.id} pago={pago} />)}
        </tbody>
      </table>
    </div>
  )
}

export default Pagos