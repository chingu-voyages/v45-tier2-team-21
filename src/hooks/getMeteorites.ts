import axios from "axios";

export const getMeteorites = async () => {
  try {
    const res = await axios.get(
      "https://data.nasa.gov/resource/gh4g-9sfh.json"
    );
    const data = res.data as Meteorite[];
    data.forEach((value) => {
      if (typeof value.year === "string") {
        const newValue = value.year ? new Date(value.year).getFullYear() : "";
        value.year = newValue;
      }
    });
    return data
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
