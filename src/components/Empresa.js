const Empresa = ({ empresa: { id, nombre_empresa, nit_empresa } }) => {

  return (
    <tr>
      <td>{id}</td>
      <td>{nombre_empresa}</td>
      <td>{nit_empresa}</td>
      <td><button>Editar</button></td>
    </tr>
  )
}

export default Empresa