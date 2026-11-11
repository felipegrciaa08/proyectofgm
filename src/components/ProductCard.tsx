import "../styles/ProductCard.css"

interface ProductProps {
  nombre: string;
  precio: number;
  imagen: string;
}

export function ProductCard({ nombre, precio, imagen }: ProductProps) {
  return (
    <div className="card">
      <img src={imagen} alt={nombre} className="product-imagen" />
      <h4 className="product-nombre">{nombre}</h4>
      <p className="product-precio">Precio: €{precio}</p>

      {/* Renderizado condicional: Solo se pinta si el precio es mayor a 50 */}
      {precio > 50 && (
        <span className="product-etiqueta">
          Activo de Alto Valor
        </span>
      )}
    </div>
  )
}