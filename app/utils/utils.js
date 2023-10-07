export function filterItems(query, items) {
    //console.log("miquery"+query)
    //console.log(items)

    if (query === "") {
        return items
    }
    items.filter((item) => item.titulo.indexOf(query) === 0)
}