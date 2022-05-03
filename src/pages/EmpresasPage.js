import { useState, useEffect } from "react";
import Empresas from "../components/Empresas";
import axios from "axios";
import '../css/EmpresasPage.css'

const EmpresasPage = () => {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    axios("http://127.0.0.1:8000/api/empresas/").then(response => {
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