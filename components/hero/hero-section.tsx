export default function HeroSection() {
  return (
    <div className=" pt-4.5">
      <div className="w-full h-[700px] bg-[#F2F2E8] rounded-3xl">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-2 p-4 xl:p-16 h-full">
          <div className="p-5 flex flex-col items-center justify-center h-full xl:col-span-3">
            <h2 className="text-7xl font-bold">迅速なメンテナンス</h2>
          </div>
          <div className="bg-[#B0EC9C] rounded-3xl xl:col-span-2"></div>
        </div>
      </div>
    </div>
  );
}
