import EscKey from "../Row1Keys/EscKey";
import F10Key from "../Row1Keys/F10Key";
import F11Key from "../Row1Keys/F11Key";
import F12Key from "../Row1Keys/F12Key";
import F1Key from "../Row1Keys/F1Key";
import F2Key from "../Row1Keys/F2Key";
import F3Key from "../Row1Keys/F3Key";
import F4Key from "../Row1Keys/F4Key";
import F5Key from "../Row1Keys/F5Key";
import F6Key from "../Row1Keys/F6Key";
import F7Key from "../Row1Keys/F7Key";
import F8Key from "../Row1Keys/F8Key";
import F9Key from "../Row1Keys/F9Key";
import PowerButton from "../Row1Keys/PowerButton";
import NormalKey from "../components/NormalKey";



const Keyboard = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-6 items-start bg-zinc-900 w-141.5 h-60 rounded-xl p-2">
      <div className="flex gap-1.5 row-span-1">
      <EscKey />
      <F1Key />
      <F2Key />
      <F3Key />
      <F4Key />
      <F5Key />
      <F6Key />
      <F7Key />
      <F8Key />
      <F9Key />
      <F10Key />
      <F11Key />
      <F12Key />
      <PowerButton />
      </div >
      <div className="flex gap-1.5 row-span-1">
      <NormalKey />

      </div>
      
    </div>
  )
}

export default Keyboard
