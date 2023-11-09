import React from "react";
import { H2Title } from "~/components/UI/H2Title/H2Title";

export const InfoList = () => {
  return (
    <div className="mx-auto max-w-2xl lg:mx-0 pb-16">
      <H2Title text="Search for your favourite movie" />
      <p className="mt-6 text-lg leading-8 text-gray-600">
        We’re a dynamic group of individuals who are passionate about what we do
        and dedicated to delivering the best results for our clients.
      </p>
    </div>
  );
};
