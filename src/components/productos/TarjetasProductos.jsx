import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import { useSeleccionTarjeta } from "../../components/herramientas/tarjetas/useSeleccionTarjeta";
import TarjetaBase from "../herramientas/tarjetas/TarjetaBase";

const TarjetaProductos = ({ 
  productos, 
  abrirModalEdicion, 
  abrirModalEliminacion, 
  generarPDFProducto 
}) => {
  const { idActivo, alternarActivo, cerrar } = useSeleccionTarjeta();

  return (
    <div>
      {productos.map((prod) => (
        <TarjetaBase
          key={prod.id_producto}
          id={prod.id_producto}
          esActivo={idActivo === prod.id_producto}
          alHacerClick={() => alternarActivo(prod.id_producto)}
          ariaLabel={`Producto ${prod.nombre_producto}`}
          acciones={
            <>
              <Button variant="outline-warning" size="sm" onClick={() => { abrirModalEdicion(prod); cerrar(); }}>
                <i className="bi bi-pencil"></i>
              </Button>
              <Button variant="outline-danger" size="sm" onClick={() => { abrirModalEliminacion(prod); cerrar(); }}>
                <i className="bi bi-trash"></i>
              </Button>
              <Button variant="outline-primary" size="sm" onClick={() => { generarPDFProducto(prod); cerrar(); }}>
                <i className="bi bi-file-earmark-pdf"></i>
              </Button>
            </>
          }
        >
          {/* Contenido específico de Producto */}
          <Row className="align-items-center gx-3">
            {/* Miniatura de la imagen */}
            <Col xs={3} className="text-center">
              <Image
                src={prod.imagen_url || "https://via.placeholder.com/50"} // Imagen por defecto si no hay
                alt={prod.nombre_producto}
                rounded
                fluid
                style={{ maxHeight: "50px", objectFit: "cover" }}
              />
            </Col>

            {/* Detalles del producto */}
            <Col xs={6} className="text-start">
              <div className="fw-semibold text-truncate">{prod.nombre_producto}</div>
              <div className="small text-muted text-truncate">
                {prod.categorias?.nombre_categoria || "Sin categoría"}
              </div>
            </Col>

            {/* Precio */}
            <Col xs={3} className="text-end">
              <div className="fw-bold text-success">
                ${parseFloat(prod.precio_venta).toFixed(2)}
              </div>
            </Col>
          </Row>
        </TarjetaBase>
      ))}
    </div>
  );
};

export default TarjetaProductos;