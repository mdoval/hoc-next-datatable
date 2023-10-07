export function DataTableItem({ item, headers }) {
  console.log(item)
  return (
    <tr>
        {headers.map((header) => (
            <td key={header}>{item.hasOwnProperty(header.columnName) ? item[header.columnName] : ''}</td>
        ))}
    </tr>
  )
}