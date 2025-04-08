import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeaderMenu from "./header-menu";
import LOGO from "@/public/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b h-16 sticky top-0 flex items-center justify-between bg-background z-10">
      <Button variant="ghost" className="" asChild>
        <Link className="" href="/">
          <Image src={LOGO} alt="logo" className="size-8" />
          <span className="text-2xl">COLNOVA</span>
        </Link>
      </Button>
      <HeaderMenu className="hidden lg:block" />
      <div className="hidden lg:block">
        <Button
          variant="ghost"
          className="ml-4 rounded-full bg-chart-1"
          size="lg"
          asChild
        >
          <Link className="" href="/">
            <span className="text-lg font-sans text-chart-2">お問い合わせ</span>
          </Link>
        </Button>
      </div>
    </header>
  );
}
