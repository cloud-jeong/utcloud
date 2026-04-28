export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 mb-4">
            <span className="section-dot"></span>
            <span className="text-brand-700 text-xs font-semibold tracking-wide uppercase">Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">프로젝트 사례</h2>
          <p className="text-gray-500 max-w-xl mx-auto">다양한 산업의 디지털 전환을 성공적으로 지원한 경험을 소개합니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="project-card fade-in group relative rounded-2xl overflow-hidden shadow-brand-sm border border-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/project1.jpg" alt="삼성전자 MSA 환경 구축 및 운영 고도화" className="w-full h-52 object-cover" />
            <div className="overlay absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/40 to-transparent flex items-end p-6">
              <div>
                <span className="text-brand-300 text-xs font-semibold uppercase tracking-wide">MSA · Kubernetes</span>
                <h3 className="text-white font-bold text-lg mt-1">삼성전자 MSA 환경 구축 및 운영 고도화</h3>
                <p className="text-gray-300 text-sm mt-1">자체 Kubernetes 기반 MSA 환경 구축 및 대규모 제조 데이터 분석·시각화 플랫폼 구축</p>
              </div>
            </div>
            <div className="p-5 bg-white">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full font-medium">Kubernetes</span>
                <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full font-medium">MSA</span>
                <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full font-medium">데이터 시각화</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card fade-in group relative rounded-2xl overflow-hidden shadow-brand-sm border border-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/project2.jpg" alt="LLM, MCP, AI Agent를 활용한 수율 분석 자동화" className="w-full h-52 object-cover" />
            <div className="overlay absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/40 to-transparent flex items-end p-6">
              <div>
                <span className="text-brand-300 text-xs font-semibold uppercase tracking-wide">AI · LLM</span>
                <h3 className="text-white font-bold text-lg mt-1">LLM, MCP, AI Agent를 활용한 수율 분석 자동화</h3>
                <p className="text-gray-300 text-sm mt-1">n8n, Ollama, MCP Tool을 이용한 반도체 수율 분석 자동화 PoC 구축</p>
              </div>
            </div>
            <div className="p-5 bg-white">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full font-medium">LLM</span>
                <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full font-medium">n8n · Ollama</span>
                <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full font-medium">AI Agent</span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card fade-in group relative rounded-2xl overflow-hidden shadow-brand-sm border border-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/project3.jpg" alt="플랫폼 실시간 모니터링, 자동 복구, 업그레이드 환경" className="w-full h-52 object-cover" />
            <div className="overlay absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/40 to-transparent flex items-end p-6">
              <div>
                <span className="text-brand-300 text-xs font-semibold uppercase tracking-wide">Observability · Automation</span>
                <h3 className="text-white font-bold text-lg mt-1">플랫폼 실시간 모니터링, 자동 복구, 업그레이드 환경</h3>
                <p className="text-gray-300 text-sm mt-1">자동화된 클러스터 업그레이드, 모니터링, 스마트 알림, 자동 복구 시스템 구축</p>
              </div>
            </div>
            <div className="p-5 bg-white">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full font-medium">Prometheus</span>
                <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full font-medium">Grafana</span>
                <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full font-medium">Auto Healing</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 fade-in">
          <a href="#contact" className="btn-outline px-8 py-3 text-sm inline-block">더 많은 프로젝트 문의하기</a>
        </div>
      </div>
    </section>
  );
}
