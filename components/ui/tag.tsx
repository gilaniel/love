export const Tag = ({ v }: { v: string }) => {
  return (
    <div className="rounded-[8px] px-2 py-1 bg-[#171717] text-[12px] text-white/60 hover:bg-black/80 transition-all">
      {v}
    </div>
  );
};
