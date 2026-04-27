import React from "react";
import { Pagination } from "react-bootstrap";
import { Row, Col, Form } from "react-bootstrap";

const Paginacion = ({
  registrosPorPagina,
  totalRegistros,
  paginaActual,
  establcerPaginaActual,
  establecerRegistrosPorPagina,
}) => {
  const totalPaginas = Math.ceil(totalRegistros / registrosPorPagina);