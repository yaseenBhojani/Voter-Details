"use client";

import { useState } from "react";
import Card from "./Card";
import PDFDown from "./PDFDown";

export default function Form({ onSubmit }) {
  const [data, setData] = useState({ items: [] });
  const onFormSubmit = async (e) => {
    e.preventDefault();
    const input = document.getElementById("nic");
    const val = input.value;
    const dataJson = await onSubmit(val);
    setData(dataJson);
    console.log(dataJson);
  };
  return (
    <>
      <form className="flex items-center" onSubmit={onFormSubmit}>
        <label htmlFor="nic" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <input
            type="text"
            pattern="\d*"
            maxLength="13"
            minLength="13"
            min="13"
            max="13"
            id="nic"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter NIC number"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          Search
        </button>
      </form>
      <div className="mb-8"></div>
      <PDFDown data={data} />
      <div className="mb-8"></div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 w-full"
        id="printDetails"
      >
        {data.items.map((voterData) => (
          <Card data={voterData} key={voterData.name} />
        ))}
      </ul>
    </>
  );
}
