import { Button } from "@/components/ui/button";
import { Atom } from "lucide-react";
import Link from "next/link";
import HeaderMenu from "./header-menu";

export default function Header() {
  return (
    <header className="border-b h-16 sticky top-0 flex items-center justify-between bg-background">
      <Button variant="ghost" className="" asChild>
        <Link className="" href="/">
          <Atom className="mr-1 size-6" />
          <span className="text-2xl">LOGO</span>
        </Link>
      </Button>
      <HeaderMenu className="hidden lg:block" />
      <div className="hidden lg:block">
        <Button className="ml-4 rounded-full" size="lg" asChild>
          <Link className="" href="/">
            <span className="text-lg font-mono text-primary-foreground">
              お問い合わせ
            </span>
          </Link>
        </Button>
      </div>
    </header>
  );
}
