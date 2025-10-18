function ReportCard({ title, subtitle, buttonText, buttonColor, onClick }) {
  const colorClasses = {
    blue: "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700",
    green: "bg-green-50 hover:bg-green-100 text-green-600 hover:text-green-700",
    purple: "bg-purple-50 hover:bg-purple-100 text-purple-600 hover:text-purple-700",
    orange: "bg-orange-50 hover:bg-orange-100 text-orange-600 hover:text-orange-700",
    red: "bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700"
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      
      <button 
        onClick={onClick}
        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${colorClasses[buttonColor]}`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default ReportCard;