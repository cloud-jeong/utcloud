'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm${scrolled ? ' scrolled' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand_logo/logo.png"
              alt="UTCloud 로고"
              className="h-9 w-auto object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                const fallback = document.getElementById('text-logo');
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <span id="text-logo" className="hidden text-xl font-bold gradient-text">UTCloud</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="nav-link text-sm">서비스</a>
            <a href="#about"    className="nav-link text-sm">회사 소개</a>
            <a href="#projects" className="nav-link text-sm">프로젝트</a>
            <a href="#contact"  className="nav-link text-sm">문의하기</a>
            <a
              href="https://velog.io/@utcloud/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-4 py-2 text-sm"
            >
              기술블로그
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
            aria-label="메뉴 열기"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden border-t border-gray-100 bg-white ${menuOpen ? 'menu-open' : 'menu-hidden'}`}
      >
        <div className="flex flex-col gap-0 px-4 py-3">
          <a href="#services" className="py-3 text-sm font-medium text-gray-700 hover:text-brand-600 border-b border-gray-50" onClick={closeMenu}>서비스</a>
          <a href="#about"    className="py-3 text-sm font-medium text-gray-700 hover:text-brand-600 border-b border-gray-50" onClick={closeMenu}>회사 소개</a>
          <a href="#projects" className="py-3 text-sm font-medium text-gray-700 hover:text-brand-600 border-b border-gray-50" onClick={closeMenu}>프로젝트</a>
          <a href="#contact"  className="py-3 text-sm font-medium text-gray-700 hover:text-brand-600" onClick={closeMenu}>문의하기</a>
          <a
            href="https://velog.io/@utcloud/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 mb-2 btn-primary text-center py-2.5 text-sm"
            onClick={closeMenu}
          >
            기술블로그
          </a>
        </div>
      </div>
    </nav>
  );
}
