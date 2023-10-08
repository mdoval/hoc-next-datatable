export default function WithFilter(Component, items, headers) {
  return () => {
    return (
      <div className="flex-col">
        <div className="m-3 w-full">
          <span className="mr-3">Buscar</span>
          <input className="border-2 border-black shadow-lg" />
        </div>
        <div className="w-full">
            <Component items={items} headers={headers} />
        </div>
      </div>
    );
  };
}
