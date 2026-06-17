function YearFilter({
  startYear,
  endYear,
  setStartYear,
  setEndYear,
}) {
  const years = [2012, 2013, 2014, 2015, 2016];

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end">
      <div className="flex flex-col flex-1">
        <label className="mb-1 text-sm font-medium">
          Start Year
        </label>

        <select
          value={startYear}
          onChange={(e) => setStartYear(Number(e.target.value))}
          className="rounded-lg border p-2"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col flex-1">
        <label className="mb-1 text-sm font-medium">
          End Year
        </label>

        <select
          value={endYear}
          onChange={(e) => setEndYear(Number(e.target.value))}
          className="rounded-lg border p-2"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default YearFilter;