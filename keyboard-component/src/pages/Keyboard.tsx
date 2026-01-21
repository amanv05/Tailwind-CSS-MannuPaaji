import EscKey from "../Row1Keys/EscKey";
import F1Key from "../Row1Keys/F1Key";
import F2Key from "../Row1Keys/F2Key";
import F3Key from "../Row1Keys/F3Key";
import NormalKey from "../components/NormalKey";



const Keyboard = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-6 items-start bg-zinc-800 w-141.5 h-60 rounded-xl p-2">
      <div className="flex gap-1.5 row-span-1">
      <EscKey />
      <F1Key />
      <F2Key />
      <F3Key />
      <NormalKey />
      <NormalKey />
      <NormalKey />
      <NormalKey />
      <NormalKey />
      <NormalKey />
      <NormalKey />
      <NormalKey />
      <NormalKey />
      <NormalKey />
      </div >
      <div className="flex gap-1.5 row-span-1">
      <NormalKey />

      </div>
      
    </div>
  )
}

export default Keyboard
