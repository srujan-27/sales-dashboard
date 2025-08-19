import SalesChart from "../../components/SalesChart";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 border-b pb-4">
          Sales Dashboard
        </h1>

        {/* Chart Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <SalesChart />
        </div>
      </div>
    </main>
  );
}
