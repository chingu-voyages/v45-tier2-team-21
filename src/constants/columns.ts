import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

const columns: ColumnDef<Meteorite>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Name Type",
    accessorKey: "nametype",
  },
  {
    header: "Meteorite Composition",
    accessorKey: "recclass",
  },
  {
    header: "Mass",
    accessorKey: "mass",
    filterFn: "inNumberRange",
  },
  {
    header: "Fall",
    accessorKey: "fall",
  },
  {
    header: "Year Of Strike",
    accessorKey: "year",
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return value ? format(new Date(value), "dd/MM/yyy") : "";
    },
    filterFn: "inNumberRange",
  },
  {
    header: "Latitude",
    accessorKey: "reclat",
  },
  {
    header: "Longitude",
    accessorKey: "reclong",
  },
  {
    header: "GeoLocation",
    accessorFn: (row) => {
      return `${row.geolocation?.latitude}° ${row.geolocation?.longitude}°`;
    },
  },
];

export default columns;
