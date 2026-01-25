const CapsLockKey = () => {
  return (
    <div className="flex items-end w-17 h-8 rounded-md bg-black ring-1 ring-zinc-700 shadow-[0_3px_7px_0.1px_rgba(255,255,255,0.8)] hover:scale-[0.98] hover:shadow-none transition-all duration-100">
      <div className="ml-1.5 mb-1">
        <div className="text-white text-[7px]">caps lock</div>
      </div>
    </div>
  );
};

export default CapsLockKey;
