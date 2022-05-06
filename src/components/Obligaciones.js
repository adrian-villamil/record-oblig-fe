import Obligacion from "./Obligacion"
import '../css/Tablas.css'

const Obligaciones = ({ obligaciones, empresas }) => {

  return (
    <div className="Obligaciones">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre Empresa</th>
            <th>Nombre Obligación</th>
            <th>Periodicidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { obligaciones.map(obligacion => <Obligacion key={obligacion.id} obligacion={obligacion} empresas={empresas} />) }
        </tbody>
      </table>
    </div>
  )
}

export default Obligaciones