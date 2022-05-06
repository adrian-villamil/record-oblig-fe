import { useState } from "react";
import { Link } from "react-router-dom";

const Empresa = ({ empresa: { id, nombre_empresa, nit_empresa } }) => {

  const [idEmpresa, setIdEmpresa] = useState(id);
  const [nombreEmpresa, setNombreEmpresa] = useState(nombre_empresa);
  const [nitEmpresa, setNitEmpresa] = useState(nit_empresa);

  return (
    <tr>
      <td>{idEmpresa}</td>
      <td>{nombreEmpresa}</td>
      <td>{nitEmpresa}</td>
      <td><Link to={`/empresas/editar/${idEmpresa}`}>Editar</Link></td>
    </tr>
  )
}

export default Empresa