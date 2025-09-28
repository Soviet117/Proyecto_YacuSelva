import Menu from "../components/layouts/Menu";
import TopBar from "../components/layouts/TopBar";

function Reportes() {
  return (
    <div className="flex items-center">
      <Menu />
      <div className="h-screen flex-grow">
        <TopBar />
        <div className="text-4xl">REPORTES</div>
      </div>
    </div>
  );
}

export default Reportes;
