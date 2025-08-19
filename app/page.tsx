export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <p className="text-gray-600">
        Go to <a href="/dashboard" className="text-blue-500 underline">Dashboard</a> to view sales charts.
      </p>
    </div>
  );
}
