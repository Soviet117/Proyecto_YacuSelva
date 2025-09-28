import Menu from "../components/layouts/Menu";
import TopBar from "../components/layouts/TopBar";

function Trabajadores() {
  return (
    <div className="flex items-center">
      <Menu />
      <div className="h-screen flex-grow">
        <TopBar />
        <div className="text-4xl">TRABAJADORES</div>
      </div>
    </div>
  );
}

export default Trabajadores;
