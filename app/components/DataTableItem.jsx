export function DataTableItem({ item, headers }) {
  return (
    <tr>
        {headers.map((header) => (
            <td key={header.columnName}>{item.hasOwnProperty(header.columnName) ? item[header.columnName] : ''}</td>
        ))}
    </tr>
  )
}