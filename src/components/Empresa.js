const Empresa = ({ empresa: { id_empresa, nombre_empresa, nit_empresa } }) => {

  return (
    <tr key={id_empresa}>
      <td>{id_empresa}</td>
      <td>{nombre_empresa}</td>
      <td>{nit_empresa}</td>
      <td><button>Editar</button></td>
    </tr>
  )
}

export default Empresa