export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">UTCloud</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-white transition-colors">서비스</a>
            <a href="#about"    className="hover:text-white transition-colors">회사 소개</a>
            <a href="#projects" className="hover:text-white transition-colors">프로젝트</a>
            <a href="#contact"  className="hover:text-white transition-colors">문의하기</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs">
          <p>© 2026 UTCloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
