import { TypewriterEffectDemo } from "./font-effct";
import Image from "next/image";
import twoColleaguesFactory from "./images/two-colleagues-factory.jpg";

export default function HeroSection() {
  return (
    <div className="pt-4.5">
      <div className="w-full h-[700px] bg-[#F2F2E8] rounded-3xl">
        <div className="grid grid-cols-1 xl:grid-cols-5 xl:gap-4 p-4 xl:p-16 h-full ">
          <TypewriterEffectDemo className="row-span-1 col-span-1 xl:col-span-3" />
          <div className="rounded-3xl row-span-2 xl:row-span-1 col-span-1 xl:col-span-2 border overflow-hidden relative h-full">
            <Image
              src={twoColleaguesFactory}
              alt="ヒーロー画像"
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
