import axios from "axios"
import { useEffect, useState } from "react"
import Pagos from "../components/Pagos"
import '../css/PagosPage.css'

const PagosPage = () => {

  const [pagos, setPagos] = useState([])

  useEffect(() => {
    axios("http://127.0.0.1:8000/api/pagos/").then(response => {
      setPagos(response.data)
    }).catch(error => {
      alert("Hubo un error: " + error)
    })
  }, [])

  return (
    <div className="PagosPage">
      <Pagos pagos={pagos}/>
    </div>
  )
}

export default PagosPage