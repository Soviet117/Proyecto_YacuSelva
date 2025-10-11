import TargetCaja from "../ui/TargetCaja";

function StartCaja() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <TargetCaja
        title={"Total del Día"}
        monto={"S/. 630.0"}
        subTitle={"Ingresos registrados"}
        color={"green"}
      />
      <TargetCaja
        title={"Por Delivery"}
        monto={"S./ 450.0"}
        subTitle={"Canal delivery"}
        color={"blue"}
      />
      <TargetCaja
        title={"Venta Local"}
        monto={"S/. 180.0"}
        subTitle={"Punto de venta"}
        color={"purple"}
      />
    </div>
  );
}

export default StartCaja;
