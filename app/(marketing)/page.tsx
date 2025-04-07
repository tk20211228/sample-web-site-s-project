import HeroSection from "@/components/hero/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full space-y-9">
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className=" h-[600px] bg-[#CFC1FE] rounded-3xl md:col-span-2">
          <div className="p-5 flex flex-col items-center justify-center h-full">
            <h2 className="text-7xl font-bold">セクション1</h2>
          </div>
        </div>

        <div className="h-[600px] bg-[#FFC5BD] rounded-3xl md:col-span-2">
          <div className="p-5 flex flex-col items-center justify-center h-full">
            <h2 className="text-7xl font-bold">セクション2</h2>
          </div>
        </div>

        <div className="w-full h-[600px] bg-[#FFE2A8] rounded-3xl">
          <div className="p-5 flex flex-col items-center justify-center h-full">
            <h2 className="text-7xl font-bold">セクション3</h2>
          </div>
        </div>

        <div className="w-full h-[600px] bg-[#B0EC9C] rounded-3xl">
          <div className="p-5 flex flex-col items-center justify-center h-full">
            <h2 className="text-7xl font-bold">セクション4</h2>
          </div>
        </div>

        <div className="w-full h-[600px] bg-[#C2E2FF] rounded-3xl md:col-span-2">
          <div className="p-5 flex flex-col items-center justify-center h-full">
            <h2 className="text-7xl font-bold">セクション5</h2>
          </div>
        </div>

        <div className="w-full h-[600px] bg-[#203130] rounded-3xl md:col-span-2">
          <div className="p-5 flex flex-col items-center justify-center h-full">
            <h2 className="text-7xl font-bold">セクション6</h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 p-4 xl:p-18 bg-[#F2F2E8] rounded-3xl h-[1000px]">
        <div className="bg-[#B0EC9C] rounded-3xl xl:col-span-4 xl:row-span-2">
          <div className="p-5 flex flex-col items-center justify-center h-full">
            <h2 className="text-lg font-bold">セクション4</h2>
          </div>
        </div>
        <div className=" bg-[#CFC1FE] rounded-3xl xl:col-span-8">
          <div className="p-5 flex flex-col items-center justify-center h-full">
            <h2 className="text-lg font-bold">セクション1</h2>
          </div>
        </div>
        <div className=" bg-[#C2E2FF] rounded-3xl xl:col-span-3  xl:row-span-2">
          <div className="p-5 flex flex-col items-center justify-center h-full">
            <h2 className="text-lg font-bold">セクション5</h2>
          </div>
        </div>
        <div className="bg-[#FFE2A8] rounded-3xl xl:col-span-5 xl:row-span-2">
          <div className="p-5 flex flex-col items-center justify-center h-full">
            <h2 className="text-lg font-bold">セクション5</h2>
          </div>
        </div>
        <div className=" bg-[#FFC5BD] rounded-3xl xl:col-span-4">
          <div className="p-5 flex flex-col items-center justify-center h-full">
            <h2 className="text-lg font-bold">セクション2</h2>
          </div>
        </div>
      </div>
      <div className="w-full h-[600px] bg-[#203130] rounded-3xl xl:col-span-2">
        <div className="p-5 flex flex-col items-center justify-center h-full">
          <h2 className="text-7xl font-bold">セクション6</h2>
        </div>
      </div>
    </div>
  );
}
