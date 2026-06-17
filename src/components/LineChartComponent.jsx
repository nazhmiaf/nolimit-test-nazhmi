import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function LineChartComponent({ data }) {
  const formatPopulation = (value) => {
    return `${(value / 1000000).toFixed(0)}M`;
  };

  return (
    <div className="w-full h-[250px] sm:h-[350px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
          />

          <YAxis
            tickFormatter={formatPopulation}
            tick={{ fontSize: 12 }}
            width={50}
          />

          <Tooltip
            formatter={(value) =>
              Number(value).toLocaleString()
            }
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartComponent;