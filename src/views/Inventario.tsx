import { useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import "../styles/Inventario.css"

interface Producto {
    nombre: string;
    precio: number;
    imagen: string;
}

export function Inventario() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [cargando, setCargando] = useState(false)

  async function cargarDatos() {
    setCargando(true)
    try {
      // Petición GET a Fake Store API limitada a 6 elementos
      const respuesta = await fetch('https://fakestoreapi.com/products?limit=6')
      const datos = await respuesta.json()

      const listaProductos: Producto[] = datos.map((productoAPI) => {
                const producto: Producto = {
                    nombre: productoAPI.title,
                    precio: productoAPI.price,
                    imagen: productoAPI.image
                };
                return producto;
            })

      setProductos(listaProductos)
    } catch (error) {
      console.error("Error al obtener los datos", error)
    } finally {
      setCargando(false)
    }
  }

  return (
    <div>
      <h2>Inventario de Activos</h2>

      <button onClick={cargarDatos} className="inventario-boton">
        Cargar Inventario
      </button>

      {/* Renderizado condicional del mensaje de carga */}
      {cargando && <h3>Cargando datos del servidor...</h3>}

      {/* Recorrer colección con .map() */}
      <div className="inventario-lista">
        {!cargando && productos.map((producto) => (
          <ProductCard
            key={producto.nombre}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        ))}
      </div>
    </div>
  )
}