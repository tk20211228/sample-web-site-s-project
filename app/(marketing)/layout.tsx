import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="container mx-auto px-4">
        <Header />
        <div className="flex flex-col items-center justify-center px-0.5">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
