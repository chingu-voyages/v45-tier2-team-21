import { Column, Table } from '@tanstack/react-table'
import React from 'react'
import DebouncedInput from './DebouncedInput'

type Props = {
  column: Column<any, unknown>
  table: Table<any>
  value: string | { min: number, max: number }
  onChange: (value: string | { min: number, max: number }) => void
}

function isNumber(value?: string | number): boolean {
  return ((value != null) &&
    (value !== '') &&
    !isNaN(Number(value.toString())));
}

const FilterInput = ({ column, table, value,onChange }: Props) => {
  let firstValue: string | number = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  if (column.id === 'year') {
    const value = firstValue as string;
    firstValue = Number(value ? value.slice(0, 4) : "0")
  }

  console.log("🚀 ~ file: FilterInput.tsx:21 ~ FilterInput ~ firstValue:", firstValue,typeof firstValue)

  
  if (isNumber(firstValue)) firstValue = Number(firstValue);
  
  const columnFilterValue = column.getFilterValue()

  const sortedUniqueValues = React.useMemo(
    () =>
      isNumber(firstValue)
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  )

  return isNumber(firstValue) && typeof value !== 'string' ? (
    <div>
      <div className="min-max-fields">
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          // value={(columnFilterValue as [number, number])?.[0] ?? ''}
          value={value.min}
          onChange={value =>
            column.setFilterValue((old: [number, number]) => {
              onChange({ min: value as number, max: old?.[1] })
              return [value, old?.[1]]
            })
          }
          placeholder={`Min ${column.getFacetedMinMaxValues()?.[0]
            ? `(${column.getFacetedMinMaxValues()?.[0]})`
            : ''
            }`}
        />
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          // value={(columnFilterValue as [number, number])?.[1] ?? ''}
          value={value.max}
          onChange={value =>
            column.setFilterValue((old: [number, number]) => {
              onChange({ min: old?.[0], max: value as number })
              return [old?.[0], value]
            })

          }

          placeholder={`Max ${column.getFacetedMinMaxValues()?.[1]
            ? `(${column.getFacetedMinMaxValues()?.[1]})`
            : ''
            }`}
        />
      </div>
      <div />
    </div>
  ) : (
    <>
      <datalist id={column.id + 'list'}>
        {sortedUniqueValues.slice(0, 5000).map((value: any) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        // value={(columnFilterValue ?? '') as string}
        value={value as string}
        onChange={value => {
          column.setFilterValue(value)
          onChange(value as string)
        }}
        placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
        list={column.id + 'list'}
      />
    </>
  )
}

export default FilterInput