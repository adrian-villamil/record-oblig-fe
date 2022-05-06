import Empresa from "./Empresa"
import '../css/Tablas.css'

const Empresas = ({ empresas }) => {

  return (
    <div className="Empresas">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Nit</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {empresas.map(empresa => <Empresa key={empresa.id} empresa={empresa} />)}
        </tbody>
      </table>
    </div>
  )
}

export default Empresas