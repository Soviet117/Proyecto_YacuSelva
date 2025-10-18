import { useState } from "react";
import * as XLSX from "xlsx";

function ReportModal({ report, onClose }) {
  const [selectedType, setSelectedType] = useState("");
  const [loading, setLoading] = useState(false);

  // Datos estáticos para cada tipo de reporte - Planta de Agua
  const getReportData = (type) => {
    switch (type) {
      case "inventario":
        return {
          sheetName: "Inventario",
          data: [
            { id_producto: 1, Producto: "Bidón 20L", Categoria: "Agua", Stock: 450, StockMinimo: 200, PrecioUnitario: 8.00, Estado: "Disponible" },
            { id_producto: 2, Producto: "Bidón 10L", Categoria: "Agua", Stock: 280, StockMinimo: 150, PrecioUnitario: 5.00, Estado: "Disponible" },
            { id_producto: 3, Producto: "Botella 2.5L", Categoria: "Agua", Stock: 180, StockMinimo: 200, PrecioUnitario: 3.50, Estado: "Bajo Stock" },
            { id_producto: 4, Producto: "Botella 1L", Categoria: "Agua", Stock: 520, StockMinimo: 300, PrecioUnitario: 2.00, Estado: "Disponible" },
            { id_producto: 5, Producto: "Botella 500ml", Categoria: "Agua", Stock: 890, StockMinimo: 400, PrecioUnitario: 1.50, Estado: "Disponible" },
            { id_producto: 6, Producto: "Pack 6x500ml", Categoria: "Agua", Stock: 145, StockMinimo: 100, PrecioUnitario: 8.00, Estado: "Disponible" },
            { id_producto: 7, Producto: "Dispensador Manual", Categoria: "Accesorios", Stock: 35, StockMinimo: 20, PrecioUnitario: 15.00, Estado: "Disponible" },
            { id_producto: 8, Producto: "Dispensador Eléctrico", Categoria: "Accesorios", Stock: 12, StockMinimo: 15, PrecioUnitario: 85.00, Estado: "Bajo Stock" },
          ]
        };
      
      case "ventas":
        return {
          sheetName: "Ventas",
          data: [
            { id_venta: 1001, id_cliente: 45, Cliente: "Juan Pérez", id_producto: 1, Producto: "Bidón 20L", cantidad: 5, precio_y: 8.00, cobra_de: 40.00, total_cancelar: 40.00, total_cancelado: 40.00, fecha: "2025-10-13", hora: "08:30:00", id_pago: 1, Pago: "Efectivo", id_estado: 2, Estado: "Entregado", id_trabajador: 3, Trabajador: "Carlos Ramos" },
            { id_venta: 1002, id_cliente: 78, Cliente: "María García", id_producto: 4, Producto: "Botella 1L", cantidad: 24, precio_y: 2.00, cobra_de: 48.00, total_cancelar: 48.00, total_cancelado: 48.00, fecha: "2025-10-13", hora: "09:15:00", id_pago: 2, Pago: "Tarjeta", id_estado: 2, Estado: "Entregado", id_trabajador: 5, Trabajador: "Ana López" },
            { id_venta: 1003, id_cliente: 23, Cliente: "Pedro Sánchez", id_producto: 1, Producto: "Bidón 20L", cantidad: 10, precio_y: 8.00, cobra_de: 80.00, total_cancelar: 80.00, total_cancelado: 50.00, fecha: "2025-10-13", hora: "10:00:00", id_pago: 1, Pago: "Efectivo", id_estado: 3, Estado: "Pendiente Pago", id_trabajador: 3, Trabajador: "Carlos Ramos" },
            { id_venta: 1004, id_cliente: 56, Cliente: "Luis Rodríguez", id_producto: 6, Producto: "Pack 6x500ml", cantidad: 8, precio_y: 8.00, cobra_de: 64.00, total_cancelar: 64.00, total_cancelado: 64.00, fecha: "2025-10-13", hora: "11:20:00", id_pago: 3, Pago: "Yape", id_estado: 2, Estado: "Entregado", id_trabajador: 7, Trabajador: "Jorge Díaz" },
            { id_venta: 1005, id_cliente: 89, Cliente: "Sofia Torres", id_producto: 2, Producto: "Bidón 10L", cantidad: 6, precio_y: 5.00, cobra_de: 30.00, total_cancelar: 30.00, total_cancelado: 30.00, fecha: "2025-10-12", hora: "14:45:00", id_pago: 2, Pago: "Tarjeta", id_estado: 2, Estado: "Entregado", id_trabajador: 5, Trabajador: "Ana López" },
            { id_venta: 1006, id_cliente: 34, Cliente: "Carmen Vega", id_producto: 1, Producto: "Bidón 20L", cantidad: 3, precio_y: 8.00, cobra_de: 24.00, total_cancelar: 24.00, total_cancelado: 24.00, fecha: "2025-10-12", hora: "15:30:00", id_pago: 1, Pago: "Efectivo", id_estado: 2, Estado: "Entregado", id_trabajador: 3, Trabajador: "Carlos Ramos" },
            { id_venta: 1007, id_cliente: 67, Cliente: "Roberto Castillo", id_producto: 5, Producto: "Botella 500ml", cantidad: 48, precio_y: 1.50, cobra_de: 72.00, total_cancelar: 72.00, total_cancelado: 72.00, fecha: "2025-10-12", hora: "16:00:00", id_pago: 3, Pago: "Yape", id_estado: 2, Estado: "Entregado", id_trabajador: 7, Trabajador: "Jorge Díaz" },
            { id_venta: 1008, id_cliente: 12, Cliente: "Laura Gómez", id_producto: 1, Producto: "Bidón 20L", cantidad: 8, precio_y: 8.00, cobra_de: 64.00, total_cancelar: 64.00, total_cancelado: 0.00, fecha: "2025-10-11", hora: "09:00:00", id_pago: 1, Pago: "Efectivo", id_estado: 1, Estado: "Pendiente", id_trabajador: 5, Trabajador: "Ana López" },
            { id_venta: 1009, id_cliente: 45, Cliente: "Juan Pérez", id_producto: 7, Producto: "Dispensador Manual", cantidad: 1, precio_y: 15.00, cobra_de: 15.00, total_cancelar: 15.00, total_cancelado: 15.00, fecha: "2025-10-11", hora: "10:30:00", id_pago: 2, Pago: "Tarjeta", id_estado: 2, Estado: "Entregado", id_trabajador: 3, Trabajador: "Carlos Ramos" },
            { id_venta: 1010, id_cliente: 91, Cliente: "Diego Morales", id_producto: 1, Producto: "Bidón 20L", cantidad: 15, precio_y: 8.00, cobra_de: 120.00, total_cancelar: 120.00, total_cancelado: 120.00, fecha: "2025-10-11", hora: "13:15:00", id_pago: 3, Pago: "Yape", id_estado: 2, Estado: "Entregado", id_trabajador: 7, Trabajador: "Jorge Díaz" },
          ]
        };
      
      case "general":
        return {
          sheetName: "Reporte General",
          data: [
            { Categoria: "Ventas Totales", Valor: "S/ 8,547.00", Periodo: "Octubre 2025" },
            { Categoria: "Número de Ventas", Valor: "287", Periodo: "Octubre 2025" },
            { Categoria: "Ticket Promedio", Valor: "S/ 29.78", Periodo: "Octubre 2025" },
            { Categoria: "Unidades Vendidas", Valor: "3,542", Periodo: "Octubre 2025" },
            { Categoria: "Producto Más Vendido", Valor: "Bidón 20L (1,245 unidades)", Periodo: "Octubre 2025" },
            { Categoria: "Ventas en Efectivo", Valor: "S/ 3,890.00 (45%)", Periodo: "Octubre 2025" },
            { Categoria: "Ventas con Tarjeta", Valor: "S/ 2,735.00 (32%)", Periodo: "Octubre 2025" },
            { Categoria: "Ventas por Yape", Valor: "S/ 1,922.00 (23%)", Periodo: "Octubre 2025" },
            { Categoria: "Ventas Entregadas", Valor: "265 (92%)", Periodo: "Octubre 2025" },
            { Categoria: "Ventas Pendientes", Valor: "15 (5%)", Periodo: "Octubre 2025" },
            { Categoria: "Ventas Pendiente Pago", Valor: "7 (3%)", Periodo: "Octubre 2025" },
            { Categoria: "Productos Bajo Stock", Valor: "2", Periodo: "13 Oct 2025" },
            { Categoria: "Trabajadores Activos", Valor: "12", Periodo: "13 Oct 2025" },
          ]
        };
      
      default:
        return {
          sheetName: "Reporte",
          data: []
        };
    }
  };

  const generateExcel = () => {
    if (!selectedType) {
      alert("Por favor selecciona un tipo de reporte");
      return;
    }

    setLoading(true);

    // Simular carga
    setTimeout(() => {
      const reportData = getReportData(selectedType);
      
      // Crear libro de trabajo
      const wb = XLSX.utils.book_new();
      
      // Crear hoja de cálculo desde los datos
      const ws = XLSX.utils.json_to_sheet(reportData.data);
      
      // Ajustar ancho de columnas
      const colWidths = Object.keys(reportData.data[0] || {}).map(key => ({
        wch: Math.max(key.length, 15)
      }));
      ws['!cols'] = colWidths;
      
      // Agregar la hoja al libro
      XLSX.utils.book_append_sheet(wb, ws, reportData.sheetName);
      
      // Generar nombre del archivo
      const fileName = `Reporte_${selectedType}_${new Date().toISOString().split('T')[0]}.xlsx`;
      
      // Descargar el archivo
      XLSX.writeFile(wb, fileName);
      
      setLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              {report.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          <p className="text-sm text-gray-600 mb-4">
            Selecciona el tipo de reporte que deseas generar:
          </p>

          <div className="space-y-3">
            <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
              <input
                type="radio"
                name="reportType"
                value="general"
                checked={selectedType === "general"}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-4 h-4 text-blue-600"
              />
              <div className="ml-3">
                <div className="font-medium text-gray-800">Reporte General</div>
                <div className="text-sm text-gray-500">Resumen completo del negocio</div>
              </div>
            </label>

            <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
              <input
                type="radio"
                name="reportType"
                value="inventario"
                checked={selectedType === "inventario"}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-4 h-4 text-blue-600"
              />
              <div className="ml-3">
                <div className="font-medium text-gray-800">Reporte de Inventario</div>
                <div className="text-sm text-gray-500">Stock y productos disponibles</div>
              </div>
            </label>

            <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
              <input
                type="radio"
                name="reportType"
                value="ventas"
                checked={selectedType === "ventas"}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-4 h-4 text-blue-600"
              />
              <div className="ml-3">
                <div className="font-medium text-gray-800">Reporte de Ventas</div>
                <div className="text-sm text-gray-500">Detalle de todas las transacciones</div>
              </div>
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
            disabled={loading}
          >
            Cancelar
          </button>
          <button
            onClick={generateExcel}
            disabled={loading || !selectedType}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generando...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Generar Excel
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReportModal;