import { Link } from "@remix-run/react";
import React from "react";

export const CTA = () => {
  return (
    <>
      <div className="mt-10 flex items-center gap-x-6">
        <Link
          to="#"
          className="rounded-md bg-primaryColor-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryColor-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColor-600">
          Get started
        </Link>
        <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">
          Live demo <span aria-hidden="true">→</span>
        </Link>
      </div>
    </>
  );
};
