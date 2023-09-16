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

type Filter = {
  name?: string;
  recclass?: string;
  year?: {
    min: number;
    max: number;
  };
  mass?: {
    min: number;
    max: number;
  };
};

const FilterButton = ({ table, setGlobalFilter }: Props) => {
  const [dropDownOpen, setDropDownOpen] = React.useState(false);
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [currentFilter, setCurrentFilter] = React.useState<Filter>({});
  const [filters, setFilters] = React.useState<Filter[]>([]);
  const dropDownRef = React.useRef<HTMLUListElement>(null);
  useOutsideClick(dropDownRef, () => {
    setDropDownOpen(false);
  });

  const addNewFilter = () => {
    setFilters((prev) => [...prev, currentFilter]);
    setCurrentFilter({});
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
            {filters.length === 0 ? (
              <li className="drp-element">...</li>
            ) : (
              filters.map((filter, i) => (
                <li key={i}
                  className="drp-element"
                  onClick={() => setCurrentFilter(filter)}
                >{`filter_${i}`}</li>
              ))
            )}
            <li
              className="drp-element add-element"
              onClick={() => setPopupOpen(true)}
            >
              <span>Add new filter</span>
            </li>
          </ul>
        ) : null}
      </button>
      {popupOpen ? (
        <PopUp close={() => setPopupOpen(false)}>
          <h2>Filtering</h2>

          <div id="fields">
            <div className="field">
              <label htmlFor="name">Name : </label>
              <FilterInput
                column={table.getColumn("name")!}
                table={table}
                onChange={(value) => {
                  if (typeof value === "string") {
                    setCurrentFilter(
                      (prev) => ({ ...prev, name: value } as Filter)
                    );
                  }
                } } value={currentFilter.name!}              />
            </div>

            <div className="field">
              <label htmlFor="recclass">Meteorite Composition : </label>
              <FilterInput
                column={table.getColumn("recclass")!}
                value={currentFilter.recclass!}
                table={table}
                onChange={(value) => {
                  if (typeof value === "string") {
                    setCurrentFilter(
                      (prev) => ({ ...prev, recclass: value } as Filter)
                    );
                  }
                }}
              />
            </div>

            <div className="field">
              <label htmlFor="year">Year of Strike : </label>
              <FilterInput
                column={table.getColumn("year")!}
                table={table}
                onChange={(value) => {
                  if (typeof value !== "string") {
                    setCurrentFilter(
                      (prev) => ({ ...prev, year: value } as Filter)
                    );
                  }
                } } value={currentFilter.year!}/>
            </div>

            <div className="field">
              <label htmlFor="mass">Mass : </label>
              <FilterInput
                column={table.getColumn("mass")!}
                table={table}
                onChange={(value) => {
                  if (typeof value !== "string") {
                    setCurrentFilter(
                      (prev) => ({ ...prev, mass: value } as Filter)
                    );
                  }
                } } value={currentFilter.mass!}              />
            </div>
          </div>

          <div className="buttons controller-filter-btn">
            <VariantButton color="blue" onClick={() => addNewFilter()}>
              Save
            </VariantButton>
            <VariantButton
              color="red"
              onClick={() => {
                table.reset();
                setGlobalFilter("");
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
