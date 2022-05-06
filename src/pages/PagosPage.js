import axios from "axios"
import { useEffect, useState } from "react"
import Pagos from "../components/Pagos"
import '../css/PagosPage.css'

const PagosPage = () => {

  const [obligaciones, setObligaciones] = useState([]);
  const [pagos, setPagos] = useState([])

  useEffect(() => {
    
    axios("http://127.0.0.1:8000/api/obligaciones/").then(response => {
      setObligaciones(response.data)
    }).catch(error => {
      alert("Hubo un error: " + error)
    })
    
    axios("http://127.0.0.1:8000/api/pagos/").then(response => {
      setPagos(response.data)
    }).catch(error => {
      alert("Hubo un error: " + error)
    })
  }, [])

  return (
    <div className="PagosPage">
      <Pagos pagos={pagos} obligaciones={obligaciones} />
    </div>
  )
}

export default PagosPage