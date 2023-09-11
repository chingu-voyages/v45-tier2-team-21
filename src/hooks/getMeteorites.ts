import axios from 'axios';

export const getMeteorites = async () => {
  try {
    const res = await axios.get("https://data.nasa.gov/resource/gh4g-9sfh.json");
    return res.data as Meteorite[];
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
