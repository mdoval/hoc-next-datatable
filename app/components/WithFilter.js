import { useState } from "react";

export default function WithFilter(Component, items, headers, campoFiltrado) {
  return () => {
    const [datos, setDatos] = useState(items)

    function handleChange(e) {
      const datosFiltrados = items.filter(item => item[campoFiltrado].toLowerCase().includes(e.target.value.toLowerCase()))
      setDatos(datosFiltrados)
    }

    return (
      <div className="flex-col">
        <div className="m-3 w-full">
          <span className="mr-3">Buscar</span>
          <input className="border-2 border-black shadow-lg" onChange={handleChange} />
        </div>
        <div className="w-full">
            <Component items={datos} headers={headers} />
        </div>
      </div>
    );
  };
}
