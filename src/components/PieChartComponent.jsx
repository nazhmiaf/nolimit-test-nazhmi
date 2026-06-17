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
    <div className="w-full h-[250px] sm:h-[350px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="date"
            cx="50%"
            cy="45%"
            outerRadius="70%"
            label={({ name }) => name}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip
            formatter={(value) =>
              Number(value).toLocaleString()
            }
          />

          <Legend
            verticalAlign="bottom"
            height={36}
            wrapperStyle={{
              fontSize: "12px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieChartComponent;