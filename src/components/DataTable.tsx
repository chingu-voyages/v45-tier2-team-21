"use client";
import React from "react";
import "@/styles/dataTable.css";
import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ColumnDef } from "@tanstack/react-table";
import { BsSortDown, BsSortUp } from "react-icons/bs";
import FilterButton from "./filterButton";
import DebouncedInput from "./ui/DebouncedInput";
import VariantButton from "./ui/VariantButton";

type Props = {
  data: any[];
  columns: ColumnDef<any>[];
  title: string;
  setFilteredData: (value: any) => void;
};

const DataTable = ({ data, columns, title, setFilteredData }: Props) => {
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const table = useReactTable({
    columns,
    data,
    state: {
      globalFilter,
      columnFilters,
    },
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
  });

  React.useEffect(() => {
    const newData: Meteorite[] = [];
    table.getFilteredRowModel().rows.forEach((row) => {
      newData.push(row.original as Meteorite);
    });
    setFilteredData(newData);
  }, [table.getFilteredRowModel().rows]);

  React.useEffect(() => {
    table.setPageSize(10);
  }, [table]);

  const handleGlobalFilterChange = (value: string | number) => {
    setGlobalFilter(String(value));
  };

  return (
    <div id="container">
      <div id="header">
        <div id="global-info">
          <h2>{title}</h2>
          <DebouncedInput
            id="global-filter"
            type="search"
            value={globalFilter ?? ""}
            onChange={handleGlobalFilterChange}
            placeholder="Global Search"
          />
        </div>
        <div className="buttons">
          <FilterButton
            table={table}
            columnFilters={columnFilters}
            setColumnFilters={setColumnFilters}
          />
          <VariantButton
            color="red"
            onClick={() => {
              table.resetColumnFilters();
              table.resetGlobalFilter();
            }}
          >
            Clear
          </VariantButton>
        </div>
      </div>
      <div id="wrapper">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "sortable"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <BsSortUp />,
                          desc: <BsSortDown />,
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length > 0 ? (
              <>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            ) : (
              <tr>
                <td style={{ border: "none" }}>
                  <div id="null-result">
                    {(columnFilters.length !== 0 || globalFilter !== "") &&
                    table.getFilteredRowModel().rows.length === 0 ? (
                      <span>No result found</span>
                    ) : (
                      <span>Please wait...</span>
                    )}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div id="controller">
        <div id="left">{table.getPrePaginationRowModel().rows.length} Rows</div>
        <div id="right">
          <div id="pagination-container">
            <span>Rows per Page </span>
            <select
              id="pagination"
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>

          <p>
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </p>

          <div id="navigation">
            <button
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              {"<<"}
            </button>
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<"}
            </button>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {">"}
            </button>
            <button
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              {">>"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
