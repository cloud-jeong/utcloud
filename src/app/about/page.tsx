export default function AboutPage() {
	return (
		<div className="py-20 px-6">
			<h2 className="text-4xl font-bold text-center mb-10 text-purple-700">
				유티클라우드
			</h2>

			<div className="text-center text-gray-600">
				<p className="text-2xl mb-10 text-blue-300">
					UTCloud는 Cloud Native 기술 기반의 인프라 혁신을 선도하는 IT 전문
					기업입니다. <br /> Kubernetes, DevOps, Observability, Infrastructure
					as Code(IaC) 등 최신 기술을 바탕으로 <br />
					고객의 비즈니스 민첩성과 운영 효율성을 극대화합니다.
				</p>

				<h3 className="text-4xl  mb-10 font-bold text-center text-zinc-400">
					핵심 가치
				</h3>
				<ul className="text-2xl mb-10 text-blue-300">
					<li>
						<strong>Unique Technology</strong> – 차별화된 기술력으로 클라우드
						전환의 새로운 표준을 제시합니다.
					</li>
					<li>
						<strong>Your Technology</strong> – 고객의 비즈니스 목표에 맞춘
						맞춤형 솔루션을 제공합니다.
					</li>
					<li>
						<strong>Ultra Efficiency</strong> – 자동화와 최적화를 통해 최고의
						운영 효율성을 실현합니다.
					</li>
				</ul>

				<section>
					<h2 className="text-4xl mb-10 font-bold text-center text-zinc-400">
						주요 서비스
					</h2>
					<div className="text-center  flex justify-center gap-4 text-blue-600">
						<div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-200">
							<h3>Cloud Native 인프라 구축</h3>
							<p className="muted">
								Kubernetes 기반의 확장형 인프라 설계, Multi-Cloud 및 Hybrid
								Cloud 아키텍처 구성, 운영 가이드라인 제공.
							</p>
						</div>

						<div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-200">
							<h3>DevOps & CI/CD 자동화</h3>
							<p className="">
								GitOps(ArgoCD), Jenkins, GitHub Actions 기반 CI/CD 파이프라인
								설계 및 구현, 배포 안정성 확보.
							</p>
						</div>

						<div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-200">
							<h3>Observability & SRE</h3>
							<p className="">
								Prometheus, Grafana, OpenTelemetry 기반 모니터링·로깅·트레이싱
								체계 구축과 SRE 운영 컨설팅.
							</p>
						</div>
					</div>
				</section>
			</div>

			<div className="text-center mt-10 text-gray-600">
				주소: 경기도 용인시 기흥구 강남로 6, 6층 603-에이87호(구갈동,
				비즈업오피스)
			</div>
		</div>
	);
}
