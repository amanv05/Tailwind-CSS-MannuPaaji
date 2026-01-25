import { Volume2 } from "lucide-react";

const F12Key = () => {
  return (
    <div className="flex justify-center items-center w-8 h-8 rounded-md bg-black ring-1 ring-zinc-700 shadow-[0_3px_7px_0.1px_rgba(255,255,255,0.8)] hover:scale-[0.98] hover:shadow-none transition-all duration-100">
      <div className="grid grid-cols-1 gap-1">
        <div className="text-white text-[7px] ml-0.5">
          <Volume2 size={7} />
        </div>
        <div className="text-white text-[7px]">F12</div>
      </div>
    </div>
  );
};

export default F12Key;
