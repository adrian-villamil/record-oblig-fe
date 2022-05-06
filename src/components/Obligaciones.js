import Obligacion from "./Obligacion"
import '../css/Tablas.css'

const Obligaciones = ({ obligaciones }) => {

  return (
    <div className="Obligaciones">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Id Empresa</th>
            <th>Nombre</th>
            <th>Periodicidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { obligaciones.map(obligacion => <Obligacion key={obligacion.id} obligacion={obligacion} />) }
        </tbody>
      </table>
    </div>
  )
}

export default Obligaciones