import { ChevronLeft } from "lucide-react";

const ArrowLeftKey = () => {
  return (
    <div className="flex justify-center items-center w-9 h-4 rounded-md bg-black ring-1 ring-zinc-700 shadow-[0_3px_7px_0.1px_rgba(255,255,255,0.8)] hover:scale-[0.98] hover:shadow-none transition-all duration-100">
      <div className="grid grid-cols-1 gap-0.5">
        <div className="text-white text-[7px]">
          <ChevronLeft size={10} strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};

export default ArrowLeftKey;
