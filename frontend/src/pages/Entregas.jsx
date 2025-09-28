import Menu from "../components/layouts/Menu";
import TopBar from "../components/layouts/TopBar";

function Entregas() {
  return (
    <div className="flex items-center">
      <Menu />
      <div className="h-screen flex-grow">
        <TopBar />
        <div className="text-4xl">ENTREGAS</div>
      </div>
    </div>
  );
}

export default Entregas;
