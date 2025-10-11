import React from "react";
import ModalES from "../ui/ModalES";
import { useState } from "react";

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

function TablaES({ data = mockEntregasDelDia }) {
  const headers = [
    "DELIVERISTA",
    "HORA",
    "CANTIDAD",
    "TIPO",
    "DEVUELTOS",
    "ESTADO",
    "ACCIONES",
  ];

  const [stateModal, setStateModal] = useState({
    isOpen: false,
    id: null,
  });

  const updateData = (id) => {
    setStateModal({ isOpen: true, id: id });
  };

  const getEstadoClasses = (estado) => {
    switch (estado) {
      case "Completado":
        return "bg-green-100 text-green-800";
      case "En ruta":
        return "bg-blue-100 text-blue-800";
      case "Pendiente":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto max-h-80 overflow-y-scroll">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-white sticky top-0 z-10 shadow-sm">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.deliverista}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.hora}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.cantidad}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.tipo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.devueltos}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getEstadoClasses(
                      item.estado
                    )}`}
                  >
                    {item.estado}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => updateData(item.id)}
                    className="text-indigo-600 hover:text-indigo-900 font-semibold transition duration-150 ease-in-out"
                  >
                    Actualizar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {stateModal.isOpen && (
        <ModalES id={stateModal.id} setStateModal={setStateModal} />
      )}
    </div>
  );
}

export default TablaES;
