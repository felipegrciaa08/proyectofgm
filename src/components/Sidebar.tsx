import "../styles/Sidebar.css"

interface SidebarProps {
  setSeccion: (seccion: string) => void;
}

export function Sidebar({ setSeccion }: SidebarProps) {
  return (
    <div className="sidebar">
      <button onClick={() => setSeccion('Personal')}>Personal</button>
      <button onClick={() => setSeccion('Inventario')}>Inventario</button>
      <button onClick={() => setSeccion('Incidencias')}>Incidencias</button>
    </div>
  )
}