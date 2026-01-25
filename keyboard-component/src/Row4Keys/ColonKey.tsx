const ColonKey = () => {
  return (
    <div className="flex justify-center items-center w-8 h-8 rounded-md bg-zinc-950 ring-1 ring-zinc-700 shadow-[0_3px_7px_0.1px_rgba(255,255,255,0.8)] hover:w-7.5 hover:h-7.5 hover:shadow-none transition-all duration-100">
      <div className="grid grid-cols-1">
        <div className="text-white text-[7px]">:</div>
        <div className="text-white text-[7px]">;</div>
      </div>
    </div>
  );
};

export default ColonKey;
