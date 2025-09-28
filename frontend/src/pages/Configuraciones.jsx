import Menu from "../components/Menu";
import TopBar from "../components/TopBar";

function Configuraciones() {
  return (
    <div className="flex items-center">
      <Menu />
      <div className="h-screen flex-grow">
        <TopBar />
        <div className="text-4xl">CONGIFURACION</div>
      </div>
    </div>
  );
}

export default Configuraciones;
