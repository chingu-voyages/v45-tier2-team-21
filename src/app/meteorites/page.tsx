"use client"
import DataTable from "@/components/DataTable"
import columns from "@/constants/columns";
import Meteorite from "@/types/meteorite";

type Props = {}

const getMeteorites = async () => {
  try {
    const res = await fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
    if (res.ok) {
      return await res.json() as Meteorite[];
    }
  } catch (error) {
    throw new Error("Failed to fetch data")
  }
}

const MeteoritesPage = async (props: Props) => {
  const meteorites = await getMeteorites();
  
  return (
    <div>
      <DataTable data={meteorites} columns={columns}/>
    </div>
  )
}

export default MeteoritesPage