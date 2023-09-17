"use client";
import BarChart from "@/components/barChart";
import columns from "@/constants/columns";
import styles from "@/styles/meteoritesPage.module.css";
import { getMeteorites } from "@/hooks/getMeteorites";
import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "@/components/pieChart";
import DataTable from "@/components/DataTable";
import { AiOutlineDown } from "react-icons/ai";

Chart.register(CategoryScale);

const countStrikeByYear = (filteredData: Meteorite[]) => {
  const strikesPerYear: { [key: number]: number } = {};
  filteredData.forEach((met) => {
    if (met.fall === "Fell") {
      strikesPerYear[met.year as number] =
        (strikesPerYear[met.year as number] || 0) + 1;
    }
  });
  return strikesPerYear;
};

const countMeteoritePerReclass = (filteredData: Meteorite[]) => {
  const meteoritePerReclass: { [key: string]: number } = {};
  filteredData.forEach((met) => {
    if (!meteoritePerReclass[met.recclass]) {
      meteoritePerReclass[met.recclass] = 0;
    }
    meteoritePerReclass[met.recclass]++;
  });
  return meteoritePerReclass;
};

const MeteoritesPage = () => {
  const [meteorites, setMeteorites] = useState<Meteorite[]>([]);
  const [filteredData, setFilteredData] = useState<Meteorite[]>(meteorites);
  const [chartData, setChartData] = useState({
    bar: {},
    pie: {},
  });

  // Getting the meteorites data
  useEffect(() => {
    const fetchData = async () => {
      const data = await getMeteorites();
      if (data) setMeteorites(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const strikesPerYear = countStrikeByYear(filteredData);
    setChartData((prev) => ({
      ...prev,
      bar: strikesPerYear,
    }));

    const meteoritePerReclass = countMeteoritePerReclass(filteredData);
    setChartData((prev) => ({
      ...prev,
      pie: meteoritePerReclass,
    }));
  }, [filteredData]);

  return (
    <div id={styles["meteorites"]}>
      <DataTable
        data={meteorites}
        columns={columns}
        setFilteredData={setFilteredData}
        title={"Table of Meteorites"}
      />
      <a
        href={`#${styles["chart"]}`}
        style={{ width: "100%", textAlign: "center" }}
      >
        <AiOutlineDown size={24} />
      </a>

      <div id={styles["chart"]}>
        <BarChart chartData={chartData.bar} />
        <PieChart chartData={chartData.pie} />
      </div>
    </div>
  );
};

export default MeteoritesPage;
