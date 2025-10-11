import InputText from "./InputNumber";
import { useEffect, useState } from "react";
import SubDetalleES from "../ui/SubDetalleES";

const mockEntregasDelDia = [
  {
    id: 201,
    deliverista: "María González",
    hora: "07:45",
    cantidad: 18,
    tipo: "Bidones 10L",
    devueltos: 1,
    estado: "En ruta",
  },
  {
    id: 202,
    deliverista: "Roberto Mendoza",
    hora: "10:30",
    cantidad: 22,
    tipo: "Bidones 15L",
    devueltos: 3,
    estado: "Pendiente",
  },
  {
    id: 203,
    deliverista: "Ana Ramírez",
    hora: "11:20",
    cantidad: 15,
    tipo: "Bidones 5L",
    devueltos: 0,
    estado: "Completado",
  },
  {
    id: 204,
    deliverista: "Luis Fernández",
    hora: "13:10",
    cantidad: 30,
    tipo: "Bidones 20L",
    devueltos: 5,
    estado: "En ruta",
  },
  {
    id: 205,
    deliverista: "Sofía Torres",
    hora: "14:00",
    cantidad: 12,
    tipo: "Bidones 10L",
    devueltos: 2,
    estado: "Completado",
  },
  {
    id: 206,
    deliverista: "Miguel Vásquez",
    hora: "15:45",
    cantidad: 28,
    tipo: "Bidones 15L",
    devueltos: 1,
    estado: "Pendiente",
  },
  {
    id: 207,
    deliverista: "Elena Herrera",
    hora: "16:30",
    cantidad: 20,
    tipo: "Bidones 5L",
    devueltos: 4,
    estado: "En ruta",
  },
  {
    id: 208,
    deliverista: "Javier Silva",
    hora: "17:15",
    cantidad: 16,
    tipo: "Bidones 20L",
    devueltos: 0,
    estado: "Completado",
  },
];

function ModalES({ id, data = mockEntregasDelDia, setStateModal }) {
  const getEntrega = data.find((dt) => dt.id === id);

  const handleCon = (e) => {
    if (e.target === e.currentTarget) {
      setStateModal({ isOpen: false, id: null });
    }
  };

  const [cantidadD, setCantidadD] = useState(null);

  const [components, setComponents] = useState([]);

  const [dineroAP, setDineroAP] = useState(null);

  useEffect(() => {
    if (getEntrega) {
      setCantidadD(getEntrega.cantidad);
    } else {
      setCantidadD(null);
    }
  }, [getEntrega]);

  useEffect(() => {
    const diff = getEntrega.cantidad - cantidadD;
    const diffe = Math.max(0, diff);
    setDineroAP(cantidadD * 4);

    const newCom = [];

    if (diffe > 0) {
      for (let i = 0; i < diffe; i++) {
        newCom.push({
          id: `detalle-${i}`,
          comp: <SubDetalleES key={`detalle-${i}`} id={i + 1} />,
        });
        setComponents(newCom);
      }
    } else {
      setComponents([]);
    }
  }, [getEntrega, cantidadD]);

  return (
    <div className="fixed inset-0 bg-black/50 z-50" onClick={handleCon}>
      <div
        className="flex items-center justify-center mt-15"
        onClick={handleCon}
      >
        <div className="bg-gray-200 p-5 rounded-2xl">
          <div className="mb-4 text-center">
            <p className="text-2xl font-semibold ">Datos de la salida {id}</p>
            <p className="text-lg font-semibold text-gray-700">
              {getEntrega.deliverista}
            </p>
            <p className="text-sm font-medium text-gray-700">
              Hora de salida:{" "}
              <code className="text-lg font-semibold text-gray-700">
                {" "}
                {getEntrega.hora}
              </code>
            </p>
          </div>
          <div className="flex items-center divide-x divide-gray-400 mb-4">
            <div className="p-4 ">
              <p className="text-center text-lg font-semibold">
                Actualizar productos regresados
              </p>
              <div>
                <form className="flex flex-col p-2 space-y-2">
                  <InputText
                    title={"Cantidad de bidones cargados"}
                    descripcion={getEntrega?.cantidad}
                    value={getEntrega?.cantidad}
                  />
                  <InputText
                    title={"Cantidad devuelta"}
                    descripcion={getEntrega?.cantidad}
                    value={cantidadD}
                    onChange={(e) => setCantidadD(e.target.value)}
                  />
                  <div className="max-h-48 overflow-y-scroll">
                    {components.map((item) => item.comp)}
                  </div>
                </form>
              </div>
            </div>
            <div className="p-4">
              <p className="text-center text-lg font-semibold">
                Actualizar dinero de productos
              </p>
              <div className="flex flex-col p-2 space-y-2">
                <InputText
                  title={"Total de dinero a cobrar"}
                  descripcion={"Ingrese el dinero dejado"}
                  value={dineroAP}
                />
                <InputText
                  title={"Dinero cobrado"}
                  descripcion={"Ingrese el dinero cobrado"}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button className="py-2 px-4 bg-blue-500 rounded-xl">
              Actualizar Información
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalES;
