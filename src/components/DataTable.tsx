"use client";
import React from 'react';
import '@/styles/dataTable.css';
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { ColumnDef } from "@tanstack/react-table";
import { BsArrowUpShort, BsArrowDownShort, BsFilter } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'

type Props = {
  data: any;
  columns: ColumnDef<any>[];
  title: string;
  setFilteredData: React.Dispatch<React.SetStateAction<any>>;
}

const DataTable = ({ data, columns, title, setFilteredData }: Props) => {
  const [globalFilter, setGlobalFilter] = React.useState("");
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter
    },
    onGlobalFilterChange: setGlobalFilter
  })

  React.useEffect(() => {
    const newData: Meteorite[] = [];
    table.getFilteredRowModel().rows.forEach(row => {
      newData.push(row.original);
    })
    setFilteredData(newData);
  }, [table.getFilteredRowModel().rows])

  React.useEffect(() => {
    table.setPageSize(10);
  }, [table])

  const handleGlobalFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setGlobalFilter(String(event.target.value));
  }

  return (
    <div id='container'>
      <div id="header">
        <div>
          <h2>{title}</h2>
          <input
            type="search"
            value={globalFilter ?? ''}
            onChange={handleGlobalFilterChange}
            placeholder='Global Search' />
        </div>

        <button id='filter-btn'>
          <BsFilter size={18} />
          <span>Filter</span>
          <RiArrowDropDownLine size={28} />
        </button>
      </div>
      <div id='wrapper'>
        <table>
          <thead>
            {
              table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {
                    headerGroup.headers.map(header => (
                      <th key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder ? null : (
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? 'sortable'
                                : '',
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {{
                              asc: <BsArrowUpShort />,
                              desc: <BsArrowDownShort />,
                            }[header.column.getIsSorted() as string] ?? null}
                          </div>
                        )}
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          <tbody>
            {
              table.getRowModel().rows.length > 0
                ? <>{
                  table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                      {
                        row.getVisibleCells().map(cell => (
                          <td key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))
                      }
                    </tr>
                  ))}</>
                :
                <tr>
                  <td style={{border: "none"}}>
                    <div id="null-result">
                      {
                        globalFilter === ""
                        ? <span>Please wait...</span>
                        : <span>No result found</span>
                      }
                    </div>
                  </td>
                </tr>
            }
          </tbody>
        </table>
      </div>

      <div id='controller'>
        <div id='left'>{table.getPrePaginationRowModel().rows.length} Rows</div>
        <div id='right'>
          <div>
            <span>Rows per Page {' '}</span>
            <select
              value={table.getState().pagination.pageSize}
              onChange={e => {
                table.setPageSize(Number(e.target.value))
              }}
            >
              {[10, 20, 30].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>

          <p>Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}</p>

          <div id='navigation'>
            <button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>{'<<'}</button>
            <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>{'<'}</button>
            <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>{'>'}</button>
            <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>{'>>'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataTable