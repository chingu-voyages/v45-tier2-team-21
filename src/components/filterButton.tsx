"use client";
import useOutsideClick from "@/hooks/useOutsideClick";
import { ColumnFiltersState, Table } from "@tanstack/react-table";
import React from "react";
import { BsFilter } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import FilterInput from "./ui/FilterInput";
import VariantButton from "./ui/VariantButton";
import PopUp from "./ui/PopUp";

type Props = {
  table: Table<any>;
  columnFilters: ColumnFiltersState;
  setColumnFilters: (value: any) => void;
};

const FilterButton = ({ table, columnFilters, setColumnFilters }: Props) => {
  const columnsToFilter = [
    { column: table.getColumn("name")!, label: "Name" },
    { column: table.getColumn("recclass")!, label: "Meteorite Composition" },
    { column: table.getColumn("year")!, label: "Year Of Strike" },
    { column: table.getColumn("mass")!, label: "Mass" },
  ];
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [dropDownOpen, setDropDownOpen] = React.useState(false);
  const [filters, setFilters] = React.useState<ColumnFiltersState[]>([]);
  const dropDownRef = React.useRef<HTMLUListElement>(null);
  useOutsideClick(dropDownRef, () => {
    setDropDownOpen(false);
  });

  const addNewFilter = () => {
    setFilters((prev) => [...prev, columnFilters]);
    setPopupOpen(false);
  };

  return (
    <>
      <button id="filter-btn" onClick={() => setDropDownOpen(!dropDownOpen)}>
        <BsFilter size={18} />
        <span>Filter</span>
        <RiArrowDropDownLine size={28} />
        {dropDownOpen ? (
          <ul id="drop-down" ref={dropDownRef}>
            <li
              className="drp-element add-element"
              onClick={() => setPopupOpen(true)}
            >
              <span>Add new filter</span>
            </li>
            {filters.length === 0 ? (
              <li className="drp-element">...</li>
            ) : (
              filters.map((filter, i) => (
                <li
                  key={i}
                  className="drp-element"
                  onClick={() => setColumnFilters(filter)}
                >{`filter_${i + 1}`}</li>
              ))
            )}
          </ul>
        ) : null}
      </button>
      {popupOpen ? (
        <PopUp close={() => setPopupOpen(false)}>
          <h2>Filtering</h2>

          <div id="fields">
            {columnsToFilter.map((column, id) => (
              <div className="field" key={`${column.label}_${id}`}>
                <label>{column.label}</label>
                <FilterInput column={column.column} table={table} />
              </div>
            ))}
          </div>

          <div className="buttons controller-filter-btn">
            <VariantButton
              color="blue"
              onClick={() => addNewFilter()}
              disabled={
                table.getFilteredRowModel().rows.length === 0 ||
                columnFilters.length === 0
              }
            >
              Save
            </VariantButton>
            <VariantButton
              color="red"
              onClick={() => {
                table.resetColumnFilters();
              }}
            >
              Clear
            </VariantButton>
          </div>
        </PopUp>
      ) : null}
    </>
  );
};

export default FilterButton;
