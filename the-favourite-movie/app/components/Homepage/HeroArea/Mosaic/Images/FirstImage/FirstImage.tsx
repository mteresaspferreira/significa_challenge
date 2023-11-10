export const FirstImage = ({image}:any) => {
  return (
    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
      <div className="relative">
        <img
          src={image}
          alt="first image"
          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
      </div>
    </div>
  );
};
