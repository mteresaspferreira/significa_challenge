import { Form } from "@remix-run/react";
import React from "react";
import { Input } from "~/components/UI/Input/Input";
import { PrimaryButton } from "~/components/UI/PrimaryButton/PrimaryButton";
import Select from "~/components/UI/Select/Select";

const type = [
  { id: 0, name: "movie" },
  { id: 1, name: "series" },
  { id: 2, name: "episode" },
];

export const Filters = () => {
  return (
    <div className="w-full flex">
      <Form
        method="get"
        preventScrollReset
        className="w-full flex justify-start items-end">
        <div className="grid grid-cols-3 gap-4 pr-4">
          <Input label="Title" type="text" name="title" placeholder="name" />
          <Input
            label="Year"
            type="number"
            name="year"
            placeholder="year"
          />
          <Select text="type" options={type} />
          <select name="type" id="type">
            <option value="movie">movie</option>
            <option value="series">series</option>
            <option value="episode">episode</option>
          </select>
        </div>
        <PrimaryButton text="search" />
      </Form>
    </div>
  );
};
