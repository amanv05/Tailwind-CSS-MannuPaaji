import EscKey from "../components/EscKey";
import NormalKey from "../components/NormalKey";



const Keyboard = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-6 items-start bg-neutral-900 w-141.5 h-60 rounded-xl p-1.5">
      <div className="flex gap-1.5 row-span-1">
      <EscKey />
      <NormalKey keyName="F1" />
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
