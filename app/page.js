"use client";

import { DataTable } from "./components/DataTable";
import WithFilter from "./components/WithFilter";

const productos = [
  {
    id: 0,
    titulo: "Carne",
    precio: 150,
  },
  {
    id: 1,
    titulo: "Pescado",
    precio: 140,
  },
  {
    id: 3,
    titulo: "Fideos",
    precio: 180,
  },
  {
    id: 4,
    titulo: "Arroz",
    precio: 200,
  },
];
const productosHeaders = [
  { columnName: "id", columnTitle: "Codigo" },
  { columnName: "titulo", columnTitle: "Titulo" },
  { columnName: "precio", columnTitle: "Precio" },
];

const usuarios = [
  { id: 0, nombre: "Martin" },
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Pedro" },
];
const usuariosHeaders = [
  { columnName: "id", columnTitle: "Codigo" },
  { columnName: "nombre", columnTitle: "Nombre" },
];

//Datatable con Filtro de titulo de Productos
const DataTableProductosWithFilter = WithFilter(
  DataTable,
  productos,
  productosHeaders,
  "titulo"
);

//Datatable con Filtro de nombre de Usuario
const DataTableUsuariosWithFilter = WithFilter(
  DataTable,
  usuarios,
  usuariosHeaders,
  "nombre"
);

export default function Home() {
  return (
    <div className="flex-col text-center">
      <h1 className="w-full">Ejemplo de HOC - High Order Component</h1>
      <div className="flex">
        <div className="flex-col w-1/2">
          <DataTableProductosWithFilter />
          <DataTable items={productos} headers={productosHeaders} />
        </div>
        <div className="flex-col w-1/2">
          <DataTableUsuariosWithFilter />
          <DataTable items={usuarios} headers={usuariosHeaders} />
        </div>
      </div>

    </div>
  );
}
