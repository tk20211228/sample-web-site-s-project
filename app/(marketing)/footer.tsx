export default function Footer() {
  return (
    <footer className="bg-[#203130] text-white text-center py-4 mt-8 rounded-t-3xl">
      <div className="container mx-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-sm hover:underline">
            プライバシーポリシー
          </a>
          <a href="#" className="text-sm hover:underline">
            利用規約
          </a>
        </div>
      </div>
    </footer>
  );
}
