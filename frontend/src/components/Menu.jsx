import NavListMenu from "../components/NavListMenu";

function Menu() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center space-x-3 mb-6 p-6 pb-2">
        <span className="p-2 bg-blue-500 rounded-lg font-extrabold">YS</span>
        <div>
          <p className="text-lg font-semibold">Yacu Selva</p>
          <p className="text-gray-100">Sistema de gestion</p>
        </div>
      </div>
      <div className="flex flex-col">
        <NavListMenu url={"/inicio"} text={"Inicio"} />
        <NavListMenu url={"/entregas"} text={"Entregas"} />
        <NavListMenu url={"/caja"} text={"Caja"} />
        <NavListMenu url={"/reportes"} text={"Reportes"} />
        <NavListMenu url={"/trabajadores"} text={"Trabajadores"} />
        <NavListMenu url={"/conf"} text={"Configuraciones"} />
      </div>

      <div className="bg-gray-200 rounded-xl m-3 px-4 py-2 mt-auto">
        <p>"Admin principal"</p>
        <p>"Administrador"</p>
      </div>
      <div className="flex justify-center mb-4">
        <button className="text-red-500">Cerrar Sesión</button>
      </div>
    </div>
  );
}

export default Menu;
