import { SunIcon } from "lucide-react"

const F2Key = () => {
  return (
    <div className="flex justify-center items-center w-8 h-8 rounded-md bg-black ring ring-zinc-700 shadow-[0_3px_4px_0.2px_rgba(255,255,255,0.5)] hover:w-7.5 hover:h-7.5 hover:shadow-none transition-all duration-100">
        <div className="grid grid-cols-1 gap-1">
            <div className="text-white text-[7px]"><SunIcon size={7} /></div>
            <div className="text-white text-[7px]">F2</div>
        </div>     
    </div>
  )
}

export default F2Key
