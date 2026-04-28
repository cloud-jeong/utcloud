'use client';

interface AboutProps {
  modalOpen: boolean;
  closeModal: () => void;
}

export default function About({ modalOpen, closeModal }: AboutProps) {
  return (
    <>
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Image */}
            <div className="fade-in order-2 lg:order-1">
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/utcloud_team.png" alt="UTCloud 팀" className="rounded-2xl w-full shadow-brand-md" />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-brand-md p-5 hidden sm:block">
                  <p className="text-3xl font-extrabold text-brand-600">10+</p>
                  <p className="text-sm text-gray-500 mt-0.5">년의 클라우드 전문 경험</p>
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="fade-in order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 mb-6">
                <span className="section-dot"></span>
                <span className="text-brand-700 text-xs font-semibold tracking-wide uppercase">About</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                기업 성장의 중심에서<br />
                <span className="gradient-text">클라우드 혁신을 이끕니다</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                UTCloud는 클라우드 네이티브 기술을 기반으로 기업의 디지털 전환을 지원하는 IT 전문 기업입니다.
                10년 이상의 경험과 노하우로 최적의 클라우드 솔루션을 제공합니다.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                고객의 비즈니스 목표를 최우선으로 생각하며, 기술 혁신과 안정성을 동시에 추구합니다.
                클라우드 네이티브부터 인프라 구축까지 엔드투엔드 솔루션을 제공합니다.
              </p>

              {/* Values */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">신뢰성</p>
                    <p className="text-xs text-gray-500 mt-0.5">99.9% 서비스 가용성</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">빠른 실행</p>
                    <p className="text-xs text-gray-500 mt-0.5">신속한 프로젝트 납기</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">보안</p>
                    <p className="text-xs text-gray-500 mt-0.5">엔터프라이즈급 보안</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">전문 팀</p>
                    <p className="text-xs text-gray-500 mt-0.5">인증된 클라우드 전문가</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Modal */}
      <div
        id="about-modal"
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm${modalOpen ? ' open' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
      >
        <div id="about-modal-box" className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto">

          {/* Header */}
          <div className="flex items-center justify-between px-8 pt-7 pb-5 border-b border-gray-100">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand_logo/logo.png" alt="UTCloud" className="h-8 w-auto object-contain" />
            </div>
            <button
              onClick={closeModal}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-400 transition-colors"
              aria-label="닫기"
            >
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="px-8 py-6 space-y-7">

            {/* 회사 소개 */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-3 py-1 mb-3">
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                <span className="text-brand-700 text-xs font-semibold tracking-wide uppercase">About UTCloud</span>
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">유티클라우드</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                UTCloud는 Cloud Native 기술 기반의 인프라 혁신을 선도하는 IT 전문 기업입니다.<br />
                Kubernetes, DevOps, Observability, Infrastructure as Code(IaC) 등 최신 기술을 바탕으로
                고객의 비즈니스 민첩성과 운영 효율성을 극대화합니다.
              </p>
            </div>

            {/* 핵심 가치 */}
            <div>
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-4">핵심 가치</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-brand-50 rounded-xl p-4 text-center">
                  <p className="text-brand-700 font-bold text-sm mb-1">Unique Technology</p>
                  <p className="text-gray-500 text-xs leading-relaxed">차별화된 기술력으로 클라우드 전환의 새로운 표준을 제시합니다.</p>
                </div>
                <div className="bg-brand-50 rounded-xl p-4 text-center">
                  <p className="text-brand-700 font-bold text-sm mb-1">Your Technology</p>
                  <p className="text-gray-500 text-xs leading-relaxed">고객의 비즈니스 목표에 맞춘 맞춤형 솔루션을 제공합니다.</p>
                </div>
                <div className="bg-brand-50 rounded-xl p-4 text-center">
                  <p className="text-brand-700 font-bold text-sm mb-1">Ultra Efficiency</p>
                  <p className="text-gray-500 text-xs leading-relaxed">자동화와 최적화를 통해 최고의 운영 효율성을 실현합니다.</p>
                </div>
              </div>
            </div>

            {/* 주소 */}
            <div className="flex items-start gap-3 bg-gray-50 rounded-xl px-5 py-4">
              <svg className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <p className="text-gray-600 text-sm leading-relaxed">
                경기도 용인시 기흥구 서천로201번길 11, 제10층 제티10082호<br />
                <span className="text-gray-400 text-xs">(농서동, 기흥테라타워)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
