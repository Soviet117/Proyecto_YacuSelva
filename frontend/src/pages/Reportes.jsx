import { useState } from "react";
import Menu from "../components/layouts/Menu";
import TopBar from "../components/layouts/TopBar";
import ReportCard from "../components/ui/ReportCard";
import ReportModal from "../components/ui/ReportModal";

function Reportes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  const reports = [
    {
      title: "Reporte Diario",
      subtitle: "Resumen del día actual",
      buttonText: "Generar",
      buttonColor: "blue",
      type: "daily"
    },
    {
      title: "Reporte Semanal",
      subtitle: "Últimos 7 días",
      buttonText: "Generar",
      buttonColor: "green",
      type: "weekly"
    },
    {
      title: "Reporte Mensual",
      subtitle: "Mes completo",
      buttonText: "Generar",
      buttonColor: "purple",
      type: "monthly"
    },
    {
      title: "Entregas por Deliverista",
      subtitle: "Rendimiento individual",
      buttonText: "Generar",
      buttonColor: "orange",
      type: "deliveries"
    },
    {
      title: "Reporte Personalizado",
      subtitle: "Rango de fechas custom",
      buttonText: "Configurar",
      buttonColor: "red",
      type: "custom"
    }
  ];

  const handleOpenModal = (report) => {
    setSelectedReport(report);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedReport(null);
  };

  return (
    <div className="flex items-center">
      <Menu />
      <div className="h-screen flex-grow overflow-auto bg-gray-50">
        <TopBar />
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Reportes</h1>
            <button 
              onClick={() => handleOpenModal({ title: "Reporte General", type: "general" })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Generar Reporte
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report, index) => (
              <ReportCard
                key={index}
                title={report.title}
                subtitle={report.subtitle}
                buttonText={report.buttonText}
                buttonColor={report.buttonColor}
                onClick={() => handleOpenModal(report)}
              />
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ReportModal
          report={selectedReport}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default Reportes;