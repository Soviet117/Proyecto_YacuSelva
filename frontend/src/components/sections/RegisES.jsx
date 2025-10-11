import InputText from "../ui/InputNumber";
import InputCheck from "../ui/InputCheck";

function RegisES() {
  const dataDe = [
    { id: "rick", nombre: "Rick Diaz" },
    { id: "luis", nombre: "Luis Nose" },
    { id: "juan", nombre: "Juan Pérez" },
  ];

  const dataPr = [
    { id: "20L", nombre: "Bidón de 20L" },
    { id: "10L", nombre: "Bidón de 10L" },
    { id: "100ML", nombre: "Botella de 20ML" },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md mb-6">
      <p className="text-lg font-semibold pb-3">Resgistrar Nueva Salida</p>
      <div className="grid grid-cols-4 gap-4">
        <InputCheck title={"Deliverista"} items={dataDe} />
        <InputText
          title={"Cantidad"}
          type={"number"}
          descripcion={"Ingrese la cantidad"}
        />
        <InputCheck title={"Tipo producto"} items={dataPr} />
        <button className="bg-green-600 text-white font-semibold h-9 mt-6 rounded-lg">
          Registrar
        </button>
      </div>
    </div>
  );
}

export default RegisES;
