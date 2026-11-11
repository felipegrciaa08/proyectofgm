import "../styles/EmployeeCard.css"

interface EmployeeProps {
  nombre: string;
  correo: string;
  ciudad: string;
}

export function EmployeeCard({ nombre, correo, ciudad }: EmployeeProps) {
  return (
    <div className="employee-card">
      <h3 className="employee-nombre">{nombre}</h3>
      <p className="employee-dato">✉️ {correo}</p>
      <p className="employee-dato">📍 {ciudad}</p>
    </div>
  )
}