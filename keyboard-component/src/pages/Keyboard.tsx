import NormalKey from "../components/NormalKey";
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
import DeleteKey from "../Row2Keys/DeleteKey";
import TabKey from "../Row3Keys/TabKey";
import CapsLockKey from "../Row4Keys/CapsLockKey";
import ColonKey from "../Row4Keys/ColonKey";
import ReturnKey from "../Row4Keys/ReturnKey";
import StringKey from "../Row4Keys/StringKey";
import Shift2Key from "../Row5Keys/Shift2Key";
import ShiftKey from "../Row5Keys/ShiftKey";

const Keyboard = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-6 items-start bg-zinc-800 w-143 h-60 rounded-xl p-2">
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
      </div>
      <div className="flex gap-1.5 row-span-1">
        <NormalKey upperLetter="~" lowerLetter="`" />
        <NormalKey upperLetter="!" lowerLetter="1" />
        <NormalKey upperLetter="@" lowerLetter="2" />
        <NormalKey upperLetter="#" lowerLetter="3" />
        <NormalKey upperLetter="$" lowerLetter="4" />
        <NormalKey upperLetter="%" lowerLetter="5" />
        <NormalKey upperLetter="^" lowerLetter="6" />
        <NormalKey upperLetter="&" lowerLetter="7" />
        <NormalKey upperLetter="*" lowerLetter="8" />
        <NormalKey upperLetter="(" lowerLetter="9" />
        <NormalKey upperLetter=")" lowerLetter="0" />
        <NormalKey upperLetter="_" lowerLetter="-" />
        <NormalKey upperLetter="+" lowerLetter="=" />
        <DeleteKey />
      </div>
      <div className="flex gap-1.5 row-span-1">
        <TabKey />
        <NormalKey upperLetter="Q" />
        <NormalKey upperLetter="W" />
        <NormalKey upperLetter="E" />
        <NormalKey upperLetter="R" />
        <NormalKey upperLetter="T" />
        <NormalKey upperLetter="Y" />
        <NormalKey upperLetter="U" />
        <NormalKey upperLetter="I" />
        <NormalKey upperLetter="O" />
        <NormalKey upperLetter="P" />
        <NormalKey upperLetter="{" lowerLetter="[" />
        <NormalKey upperLetter="}" lowerLetter="]" />
        <NormalKey upperLetter="|" lowerLetter="\" />
      </div>
      <div className="flex gap-1.5 row-span-1">
        <CapsLockKey />
        <NormalKey upperLetter="A" />
        <NormalKey upperLetter="S" />
        <NormalKey upperLetter="D" />
        <NormalKey upperLetter="F" />
        <NormalKey upperLetter="G" />
        <NormalKey upperLetter="H" />
        <NormalKey upperLetter="J" />
        <NormalKey upperLetter="K" />
        <NormalKey upperLetter="L" />
        <ColonKey />
        <StringKey />
        <ReturnKey />
      </div>
      <div className="flex gap-1.5 row-span-1">
        <ShiftKey />
        <NormalKey upperLetter="Z" />
        <NormalKey upperLetter="X" />
        <NormalKey upperLetter="C" />
        <NormalKey upperLetter="V" />
        <NormalKey upperLetter="B" />
        <NormalKey upperLetter="N" />
        <NormalKey upperLetter="M" />
        <NormalKey upperLetter="<" lowerLetter="," />
        <NormalKey upperLetter=">" lowerLetter="." />
        <NormalKey upperLetter="?" lowerLetter="/" />
        <Shift2Key />
      </div>
    </div>
  );
};

export default Keyboard;
