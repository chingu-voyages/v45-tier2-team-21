"use client";
import DataTable from "@/components/DataTable";
import BarChart from "@/components/barChart";
import columns from "@/constants/columns";

import { getMeteorites } from "@/hooks/getMeteorites";
import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "@/components/pieChart";
import FilterSearch from "@/components/filterSearch";

Chart.register(CategoryScale);

const MeteoritesPage = () => {
  const [meteorites, setMeteorites] = useState<Meteorite[]>([]);
  const [filteredData, setFilteredData] = useState<Meteorite[]>([]);
  const [chartData, setChartData] = useState({
    bar: {},
    pie: {},
  });
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMeteorites();

      const filtered = data.filter((met) =>
        met.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredData(filtered);

      const strikesPerYear: { [key: number]: number } = {};
      filteredData.forEach((met) => {
        const year = new Date(met.year).getFullYear();
        if (met.fall === "Fell") {
          strikesPerYear[year] = (strikesPerYear[year] || 0) + 1;
        }
      });

      setChartData((prev) => ({
        ...prev,
        bar: strikesPerYear,
      }));

      const resources: { [key: string]: number } = {};
      filteredData.forEach((met) => {
        if (!resources[met.recclass]) {
          resources[met.recclass] = 0;
        }
        resources[met.recclass]++;
      });

      setChartData((prev) => ({
        ...prev,
        pie: resources,
      }));
    };
    fetchData();
  }, []);

  return (
    <div>
      <FilterSearch
        inputValue={inputValue}
        handleInputChange={handleInputChange}
      />
      <div className="meteor-table">
        <div className="chart">
          <BarChart chartData={chartData.bar} />
          <PieChart chartData={chartData.pie} />
        </div>
        <DataTable data={meteorites} columns={columns} />
      </div>
    </div>
  );
};

export default MeteoritesPage;
