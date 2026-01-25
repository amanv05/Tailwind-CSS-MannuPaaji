import { Option } from "lucide-react";

const OptionKey = () => {
  return (
    <div className="relative w-8 h-8 rounded-md shadow-[0px_5px_7px_0.1px_rgba(255,255,255,0.8)] hover:shadow-none">
      <div className="absolute flex justify-center items-center w-8 h-8 rounded-md bg-zinc-950 ring-1 ring-zinc-700 shadow-[0px_2px_0px_0px_#3f3f46] hover:scale-[0.98] transition-all duration-100">
        <div className="grid grid-cols-1 gap-1">
          <div className="text-white text-[7px] ml-4">
            <Option size={7} />
          </div>
          <div className="text-white text-[7px]">option</div>
        </div>
      </div>
    </div>
  );
};

export default OptionKey;
