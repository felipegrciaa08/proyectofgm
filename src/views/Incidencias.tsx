import { useState } from 'react'
import { IncidentCard } from '../components/IncidentCard'
import "../styles/Incidencias.css"

interface Incidencia {
    titulo: string;
    completada: boolean;
}

export function Incidencias() {
  const [incidencias, setIncidencias] = useState<Incidencia[]>([])
  const [cargando, setCargando] = useState(false)

  async function cargarDatos() {
    setCargando(true)
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
      const datos = await respuesta.json()

      const listaIncidencias: Incidencia[] = datos.map((incidenciaAPI) => {
                const incidencia: Incidencia = {
                    titulo: incidenciaAPI.title,
                    completada: incidenciaAPI.completed
                };
                return incidencia;
            })

      setIncidencias(listaIncidencias)
    } catch (error) {
      console.error("Error al obtener los datos", error)
    } finally {
      setCargando(false)
    }
  }

  return (
    <div>
      <h2>Registro de Incidencias</h2>

      <button onClick={cargarDatos} className="incidencias-boton">
        Cargar Incidencias
      </button>

      {cargando && <h3>Cargando datos del servidor...</h3>}

      <div className="incidencias-lista">
        {!cargando && incidencias.map((incidencia, indice) => (
          <IncidentCard
            key={indice}
            titulo={incidencia.titulo}
            completada={incidencia.completada}
          />
        ))}
      </div>
    </div>
  )
}