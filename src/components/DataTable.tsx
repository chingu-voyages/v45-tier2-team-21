import React from 'react'
import '@/styles/dataTable.css'
import { flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, RowModel, Table, useReactTable } from "@tanstack/react-table"
import { ColumnDef } from "@tanstack/react-table";
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs'

type Props = {
  data: any;
  columns: ColumnDef<any>[];
}

const DataTable = ({data, columns}: Props) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  React.useEffect(() => {
    table.setPageSize(10);
  }, [table])

  return (
    <div id='container'>
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
          <tbody id='tbody'>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div id='controller'>
        <div>{table.getPrePaginationRowModel().rows.length} Rows</div>
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
  )
}

export default DataTable