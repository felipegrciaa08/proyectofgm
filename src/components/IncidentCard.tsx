import "../styles/IncidentCard.css"

interface IncidentProps {
  titulo: string;
  completada: boolean;
}

export function IncidentCard({ titulo, completada }: IncidentProps) {
  // Renderizado condicional del diseño según el estado
  const claseEstado = completada ? 'incident-card--resuelta' : 'incident-card--pendiente'; // Verde si está resuelta, rojo si está pendiente
  const iconoTexto = completada ? '✅ Resuelta' : '❌ Pendiente';

  return (
    <div className={`incident-card ${claseEstado}`}>
      <h4 className="incident-titulo">{titulo}</h4>
      <p className="incident-estado">{iconoTexto}</p>
    </div>
  )
}