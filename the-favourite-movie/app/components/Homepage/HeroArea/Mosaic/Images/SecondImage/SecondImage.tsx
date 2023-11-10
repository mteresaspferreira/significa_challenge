export const SecondImage = ({image}:any) => {
  return (
      <div className="relative">
        <img
          src={image}
          alt="second image"
          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
      </div>
  );
};
