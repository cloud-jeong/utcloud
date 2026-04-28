'use client';

interface HeroProps {
  openModal: () => void;
}

export default function Hero({ openModal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-white via-brand-50 to-blue-50">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-brand-100/40 blur-3xl translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-100/30 blur-3xl -translate-x-1/4"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div className="fade-in">
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 mb-6">
              <span className="section-dot"></span>
              <span className="text-brand-700 text-xs font-semibold tracking-wide uppercase">Cloud Native Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6">
              클라우드 네이티브<br />
              <span className="gradient-text">시대를 선도하는</span><br />
              <span className="text-gray-800">파트너</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              UTCloud는 Cloud Native 기술로 인프라 혁신을 함께 만들어가는 IT 전문 기업입니다.<br />
              Kubernetes, DevOps, Observability, IaC 등 검증된 기술을 활용해
              고객이 더 빠르고 안정적으로 비즈니스를 운영할 수 있도록 돕습니다.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={openModal} className="btn-outline px-7 py-3.5 text-base">유티클라우드</button>
              <a href="#services" className="btn-primary px-7 py-3.5 text-base">주요 서비스</a>
              <a href="#contact"  className="btn-ghost px-7 py-3.5 text-base">문의하기</a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-gray-100">
              <div>
                <p className="stat-number">50<span className="text-brand-400 text-2xl">+</span></p>
                <p className="text-sm text-gray-500 mt-1">구축 프로젝트</p>
              </div>
              <div>
                <p className="stat-number">99<span className="text-brand-400 text-2xl">%</span></p>
                <p className="text-sm text-gray-500 mt-1">서비스 가용성</p>
              </div>
              <div>
                <p className="stat-number">10<span className="text-brand-400 text-2xl">+</span></p>
                <p className="text-sm text-gray-500 mt-1">년 전문 경험</p>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="fade-in hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-brand-800 rounded-3xl rotate-3 opacity-10"></div>
              <div className="relative bg-white rounded-3xl shadow-brand-lg p-8 border border-gray-100">
                {/* Mock dashboard card */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Cloud Dashboard</p>
                    <p className="text-xs text-gray-500">실시간 인프라 모니터링</p>
                  </div>
                  <span className="ml-auto text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">● 정상</span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/dashboard.png" alt="클라우드 대시보드 예시" className="rounded-xl w-full mb-4" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-brand-50 rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-brand-600">99.9%</p>
                    <p className="text-xs text-gray-500">업타임</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-green-600">12ms</p>
                    <p className="text-xs text-gray-500">응답속도</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-purple-600">2.4TB</p>
                    <p className="text-xs text-gray-500">처리량</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
