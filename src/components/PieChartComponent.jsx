import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#dc2626",
  "#ca8a04",
  "#9333ea",
];

function PieChartComponent({ data }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>

        <Pie
          data={data}
          dataKey="value"
          nameKey="date"
          outerRadius={120}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Legend />

        <Tooltip />

      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieChartComponent;