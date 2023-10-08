import { DataTableItem } from "./DataTableItem";

export function DataTable({ items, headers }) {
  return (
    <table className="tabla">
      <thead>
        <tr>
          {headers.map((header) => (
              <th key={header.columnName} >{header.columnTitle}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <DataTableItem key={item.id} item={item} headers={headers} />
        ))}
      </tbody>
    </table>
  );
}
