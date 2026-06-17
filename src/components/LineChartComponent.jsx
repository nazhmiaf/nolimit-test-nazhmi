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
  return (
    <ResponsiveContainer  width="100%" height={350}>
      <LineChart data={data}>

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="date" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="value"
          stroke="#2563eb"
        />

      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartComponent;