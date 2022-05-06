import { useState, useEffect } from "react"
import Obligaciones from "../components/Obligaciones"
import axios from "axios"
import '../css/ObligacionesPage.css'

const ObligacionesPage = () => {
  const [obligaciones, setObligaciones] = useState([]);

  useEffect(() => {
    axios("http://127.0.0.1:8000/api/obligaciones/").then(response => {
      setObligaciones(response.data)
    }).catch(error => {
      alert("Hubo un error: " + error)
    })
  }, [])

  return (
    <div className="ObligacionesPage">
      <Obligaciones obligaciones={obligaciones}/>
    </div>
  )
}

export default ObligacionesPage