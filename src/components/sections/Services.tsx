export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 mb-4">
            <span className="section-dot"></span>
            <span className="text-brand-700 text-xs font-semibold tracking-wide uppercase">Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">주요 서비스</h2>
          <p className="text-gray-500 max-w-xl mx-auto">기업의 디지털 전환에 필요한 모든 클라우드 솔루션을 제공합니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Service 1 */}
          <div className="service-card fade-in bg-white border border-gray-100 rounded-2xl p-8 shadow-brand-sm">
            <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Native 인프라 구축</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Kubernetes 기반의 확장형 인프라 설계부터 Multi-Cloud·Hybrid Cloud 아키텍처 구성까지, 기업 환경에 최적화된 클라우드 네이티브 인프라를 구축하고 운영 가이드라인을 함께 제공합니다.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span> Kubernetes 기반 확장형 인프라 설계</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span> Multi-Cloud / Hybrid Cloud 아키텍처</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span> 운영 가이드라인 수립 및 지원</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="service-card fade-in bg-white border border-gray-100 rounded-2xl p-8 shadow-brand-sm">
            <div className="w-12 h-12 bg-brand-700 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">DevOps & CI/CD 자동화</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              GitOps(ArgoCD), Jenkins, GitHub Actions 기반의 CI/CD 파이프라인을 설계·구현하여 배포 안정성을 확보하고, 개발과 운영의 경계를 허무는 자동화 환경을 구축합니다.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-700 rounded-full"></span> GitOps / ArgoCD 기반 배포 자동화</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-700 rounded-full"></span> Jenkins / GitHub Actions 파이프라인 구축</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-700 rounded-full"></span> 배포 안정성 확보 및 롤백 전략</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="service-card fade-in bg-white border border-gray-100 rounded-2xl p-8 shadow-brand-sm">
            <div className="w-12 h-12 bg-brand-950 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">MSA 오픈소스 통합 & Cloud Native 교육</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Istio, Kafka, Prometheus 등 MSA 핵심 오픈소스를 실제 환경에 통합하고, Cloud Native 기술을 조직 내에 빠르게 내재화할 수 있도록 실무 중심의 교육 프로그램을 제공합니다.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-950 rounded-full"></span> MSA 오픈소스 도입 및 통합 (Istio, Kafka 등)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-950 rounded-full"></span> Kubernetes · DevOps 실무 교육</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-950 rounded-full"></span> Cloud Native 기술 내재화 컨설팅</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
