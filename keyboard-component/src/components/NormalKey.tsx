interface NormalKeyProps {
    upperLetter?: string;
    lowerLetter?: string;
}


const NormalKey = ({upperLetter, lowerLetter}: NormalKeyProps) => {
  return (
    <div className="flex justify-center items-center w-8 h-8 rounded-md bg-zinc-950 ring-1 ring-zinc-700 shadow-[0_3px_4px_0.2px_rgba(255,255,255,0.5)] hover:w-7.5 hover:h-7.5 hover:shadow-none transition-all duration-100">
        <div className="grid grid-cols-1 gap-0.5">
            <div className="text-white text-[7px]">{upperLetter}</div>
            <div className="text-white text-[7px]">{lowerLetter}</div>
        </div>     
    </div>
  )
}

export default NormalKey
