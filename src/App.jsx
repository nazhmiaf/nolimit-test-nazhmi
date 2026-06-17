import { useEffect, useState } from "react";
import { getPopulationData } from "./services/api";
import LineChartComponent from "./components/LineChartComponent";
import PieChartComponent from "./components/PieChartComponent";
import YearFilter from "./components/YearFilter";

function App() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [startYear, setStartYear] = useState(2012);
  const [endYear, setEndYear] = useState(2016);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterData();
  }, [data, startYear, endYear]);

  const fetchData = async () => {
    const result = await getPopulationData();

    const sorted = [...result].sort(
      (a, b) => Number(a.date) - Number(b.date)
    );

    setData(sorted);
  };

  const filterData = () => {
    const result = data.filter(
      (item) =>
        Number(item.date) >= startYear &&
        Number(item.date) <= endYear
    );

    setFiltered(result);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl md:text-4xl">
            US Population Dashboard
          </h1>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Population by Year (2012 - 2016)
          </p>
        </div>

        {/* Filter */}
        <div className="mb-8 rounded-xl bg-white p-4 shadow-md">
          <YearFilter
            startYear={startYear}
            endYear={endYear}
            setStartYear={setStartYear}
            setEndYear={setEndYear}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl bg-white p-4 shadow-md">
            <h2 className="mb-4 text-lg font-semibold text-slate-700">
              Line Chart
            </h2>

            <div className="h-[300px] sm:h-[400px]">
              <LineChartComponent data={filtered} />
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-md">
            <h2 className="mb-4 text-lg font-semibold text-slate-700">
              Pie Chart
            </h2>

            <div className="h-[300px] sm:h-[400px]">
              <PieChartComponent data={filtered} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;