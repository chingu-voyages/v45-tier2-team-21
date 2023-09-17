import { ColumnDef } from "@tanstack/react-table";

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
    filterFn: (row, columnId, value, addMeta) => {
      const cellValue = (row.getValue(columnId) as string).toLowerCase();
      const newValue = (value as string).toLowerCase();
      addMeta({ newValue });
      return cellValue.startsWith(newValue);
    },
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
