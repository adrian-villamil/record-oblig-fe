import { useState, useEffect } from "react";
import Empresas from "../components/Empresas";
import axios from "axios";
import '../css/EmpresasPage.css'

const EmpresasPage = () => {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    axios("http://localhost:3030/empresas").then(response => {
      setEmpresas(response.data)
    }).catch(error => {
      alert("Hubo un error: " + error)
    })
  }, [])

  return (
    <div className="EmpresasPage">
      <Empresas empresas={empresas} />
    </div>
  )
}

export default EmpresasPage