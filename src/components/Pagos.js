import Pago from "./Pago";
import '../css/Tablas.css'

const Pagos = ({ pagos, obligaciones}) => {

  return (
    <div className="Pagos">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre Obligación</th>
            <th>Fecha de pago</th>
            <th>Valor</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pagos.map(pago => <Pago key={pago.id} pago={pago} obligaciones={obligaciones} />)}
        </tbody>
      </table>
    </div>
  )
}

export default Pagos