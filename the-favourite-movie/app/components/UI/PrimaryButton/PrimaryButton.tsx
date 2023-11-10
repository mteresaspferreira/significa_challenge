import React from "react";

export const PrimaryButton = ({ text }: any) => {
  return (
    <button
      type="submit"
      className="rounded-md bg-primaryColor-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryColor-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColor-500">
      {text}
    </button>
  );
};
