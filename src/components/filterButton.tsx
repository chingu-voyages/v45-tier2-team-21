"use client";
import useOutsideClick from "@/hooks/useOutsideClick";
import { Table } from "@tanstack/react-table";
import React from "react";
import { BsFilter } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import FilterInput from "./ui/FilterInput";
import VariantButton from "./ui/VariantButton";
import PopUp from "./ui/PopUp";

type Props = {
  table: Table<any>;
  setGlobalFilter: (value: any) => void;
};

const FilterButton = ({ table, setGlobalFilter }: Props) => {
  const [popupOpen, setPopupOpen] = React.useState(false);
  
  return (
    <>
      <button id="filter-btn" onClick={() => setPopupOpen(!popupOpen)}>
        <BsFilter size={18} />
        <span>Filter</span>
      </button>
      {popupOpen ? (
        <PopUp close={() => setPopupOpen(false)}>
          <h2>Filtering</h2>

          <div id="fields">
            <div className="field">
              <label htmlFor="name">Name : </label>
              <FilterInput column={table.getColumn("name")!} table={table} />
            </div>

            <div className="field">
              <label htmlFor="recclass">Meteorite Composition : </label>
              <FilterInput
                column={table.getColumn("recclass")!}
                table={table}
              />
            </div>

            <div className="field">
              <label htmlFor="year">Year of Strike : </label>
              <FilterInput column={table.getColumn("year")!} table={table} />
            </div>

            <div className="field">
              <label htmlFor="mass">Mass : </label>
              <FilterInput column={table.getColumn("mass")!} table={table} />
            </div>
          </div>
        </PopUp>
      ) : null}
    </>
  );
};

export default FilterButton;
