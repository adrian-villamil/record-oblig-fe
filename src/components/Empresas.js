import Empresa from "./Empresa"
import '../css/Empresas.css'

const Empresas = ({ empresas }) => {

  return (
    <div className="Empresas">
      <table>
        <thead>
          <tr>
            <th>id_empresa</th>
            <th>nombre_empresa</th>
            <th>nit_empresa</th>
          </tr>
        </thead>
        <tbody>
          {empresas.map(empresa => <Empresa key={empresa.id_empresa} empresa={empresa} />)}
        </tbody>
      </table>
    </div>
  )
}

export default Empresas