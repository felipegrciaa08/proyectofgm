import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Personal } from './views/Personal'
import { Inventario } from './views/Inventario'
import { Incidencias } from './views/Incidencias'
import './styles/App.css'

function App() {
  // Estado principal para controlar la navegación del panel central
  const [seccion, setSeccion] = useState('Personal')

  return (
    <div className="app-container">

      {/* ZONA 1: Cabecera (Header) */}
      <Header />

      <div className="app-cuerpo">

        {/* ZONA 2: Barra Lateral (Sidebar) */}
        <Sidebar setSeccion={setSeccion} />

        {/* ZONA 3: Panel central (vistas intercambiables) */}
        <main id="panel_central" className="app-panel-central">
          {seccion === 'Personal' && <Personal />}
          {seccion === 'Inventario' && <Inventario />}
          {seccion === 'Incidencias' && <Incidencias />}
        </main>

      </div>
    </div>
  )
}

export default App