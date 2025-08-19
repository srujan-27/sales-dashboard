"use client";

import { useState } from "react";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie,
  XAxis, YAxis, Tooltip, CartesianGrid, Legend, Cell, ResponsiveContainer
} from "recharts";
import { salesData } from "../data/sales";

type ChartType = "bar" | "line" | "pie";

export default function SalesChart() {
  const years = Object.keys(salesData).map(Number);
  const [year, setYear] = useState<number>(years[0]); // default to first year
  const [threshold, setThreshold] = useState<number>(0);
  const [chartType, setChartType] = useState<ChartType>("bar");

  const data = salesData[year]?.filter(d => d.value >= threshold) || [];
  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-100 rounded-md shadow">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Year</label>
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Threshold</label>
          <input
            type="number"
            placeholder="Min Sales"
            value={threshold}
            onChange={(e) => setThreshold(Number(e.target.value))}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-end gap-2">
          <button
            onClick={() => setChartType("bar")}
            className={`rounded px-4 py-2 text-sm font-semibold shadow ${chartType === "bar" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
          >
            Bar
          </button>
          <button
            onClick={() => setChartType("line")}
            className={`rounded px-4 py-2 text-sm font-semibold shadow ${chartType === "line" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
          >
            Line
          </button>
          <button
            onClick={() => setChartType("pie")}
            className={`rounded px-4 py-2 text-sm font-semibold shadow ${chartType === "pie" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
          >
            Pie
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[450px] w-full bg-white p-4 rounded-lg shadow-md">
        {data.length === 0 ? (
          <p className="text-gray-500 text-center">No data available for {year}</p>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            {chartType === "bar" ? (
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            ) : chartType === "line" ? (
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line dataKey="value" stroke="#22c55e" />
              </LineChart>
            ) : (
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="month"
                  cx="50%"
                  cy="50%"
                  outerRadius={140}
                  label
                >
                  {data.map((_, i) => (
                    <Cell key={i} fill={["#3b82f6", "#22c55e", "#a855f7", "#f59e0b", "#ef4444"][i % 5]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            )}
          </ResponsiveContainer>
        )}
      </div>

      {/* Summary */}
      <div className="text-center text-lg font-semibold text-gray-700">
        Total Sales in {year}:{" "}
        <span className="text-blue-600">{total.toLocaleString()}</span>
      </div>
    </div>
  );
}
