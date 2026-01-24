import { SunDim } from "lucide-react"

const F1Key = () => {
  return (
    <div className="flex justify-center items-center w-8 h-8 rounded-md bg-black ring-1 ring-zinc-700 shadow-[0_3px_4px_0.2px_rgba(255,255,255,0.5)] hover:scale-[0.98] hover:shadow-none transition-all duration-100">
        <div className="grid grid-cols-1 gap-1">
            <div className="text-white text-[7px]"><SunDim size={7} /></div>
            <div className="text-white text-[7px]">F1</div>
        </div>     
    </div>
  )
}

export default F1Key
