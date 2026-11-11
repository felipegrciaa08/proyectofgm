import { useState } from 'react'
import { EmployeeCard } from '../components/EmployeeCard'
import "../styles/Personal.css"

interface Empleado {
    nombre: string;
    correo: string;
    ciudad: string;
}

export function Personal() {
  const [empleados, setEmpleados] = useState<Empleado[]>([])
  const [cargando, setCargando] = useState(false)
  const [busqueda, setBusqueda] = useState('')

  async function cargarDatos() {
    setCargando(true)
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
      const datos = await respuesta.json()

      const listaEmpleados: Empleado[] = datos.map((empleadoAPI) => {
                const empleado: Empleado = {
                    nombre: empleadoAPI.name,
                    correo: empleadoAPI.email,
                    ciudad: empleadoAPI.address.city
                };
                return empleado;
            })


      setEmpleados(listaEmpleados)
    } catch (error) {
      console.error(error)
    } finally {
      setCargando(false)
    }
  }

  // Filtrado en tiempo real por nombre
  const empleadosFiltrados = empleados.filter(empleado => 
    empleado.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

    return (
    <div>
      <h2>Directorio de Personal</h2>

      <div className="personal-controles">
        <button onClick={cargarDatos} className="personal-boton">
          Cargar Empleados
        </button>

        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="personal-buscador"
        />
      </div>

      {/* Renderizado condicional del mensaje de carga */}
      {cargando && <h3>Cargando datos del servidor...</h3>}

      {/* Recorrer colección con .map() */}
      <div className="personal-lista">
        {!cargando && empleadosFiltrados.map((empleado) => (
          <EmployeeCard
            key={empleado.correo}
            nombre={empleado.nombre}
            correo={empleado.correo}
            ciudad={empleado.ciudad}
          />
        ))}
      </div>
    </div>
  )
}