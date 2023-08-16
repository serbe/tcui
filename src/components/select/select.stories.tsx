import React from "react";

import { Select } from "./index";

const data = [
  { id: 0, name: "name-0" },
  { id: 1, name: "name-1" },
  { id: 2, name: "name-2" },
  { id: 3, name: "name-3" },
];

export const Default = (): JSX.Element => {
  return (
    <div className="relative h-10 w-72 min-w-[200px]">
      <Select data={data} name="default" label="default" />
    </div>
  );
};

export const Web = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative h-10 w-72 min-w-[200px]">
        <Select data={data} name="default1" label="default1" />
      </div>
      <div className="mb-3 xl:w-96">
        <select
          id="default"
          className="peer h-full w-full rounded-[7px] border border-slate-500 border-t-transparent bg-transparent px-3 py-1.5 font-sans text-base font-normal text-slate-500 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-slate-300 empty:!bg-red-500 focus:border-2 focus:border-slate-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-slate-100"
          aria-label="default"
        >
          <option value="0">name-0</option>
          <option value="1">name-1</option>
          <option value="2">name-2</option>
          <option value="3">name-3</option>
        </select>
        <label
          htmlFor="default"
          className="pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-500 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-slate-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:grow after:rounded-tr-md after:border-r after:border-t after:border-slate-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-slate-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-pink-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-slate-500"
        >
          default
        </label>
      </div>
      <div className="relative h-10 w-72 min-w-[200px]">
        <select
          id="web"
          className="peer h-full w-full rounded-[7px] border border-slate-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-slate-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-slate-200 empty:!bg-red-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-slate-50"
        >
          <option value="brazil">Brazil</option>
          <option value="bucharest">Bucharest</option>
          <option value="london">London</option>
          <option value="washington">Washington</option>
        </select>
        <label
          htmlFor="web"
          className="pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-slate-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:grow after:rounded-tr-md after:border-r after:border-t after:border-slate-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-slate-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-pink-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-slate-500"
        >
          Select a City
        </label>
      </div>
    </div>
  );
};
