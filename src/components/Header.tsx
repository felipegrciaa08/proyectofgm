import { useState } from 'react'
import "../styles/Header.css"

export function Header() {
  // Estado para la hora actual del sistema
  const [hora, setHora] = useState(() => new Date().toLocaleTimeString())
  
  // Intervalo para actualizar cada segundo
  setInterval(() => {
    setHora(new Date().toLocaleTimeString())
  }, 1000)

  return (
    <div className='header'>
      <div className="logo-empresa">
        <img src="/images.png" alt="Atleti Store"/>
        <p>Atleti Store</p>
      </div>
      <div className="reloj">
        {hora}
      </div>
    </div>
  )
}