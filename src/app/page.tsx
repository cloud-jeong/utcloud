import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
	const services = [
		{
			title: "Kubernetes 클라우드 구축",
			desc: "엔터프라이즈 수준의 K8S 클러스터 설계, 배포 자동화, 모니터링 통합 지원",
		},
		{
			title: "MSA 오픈소스 통합",
			desc: "CI/CD, Observability, Scheduling/Ochestration, Cloud Native Storage 등 마이크로서비스 운영 환경 구축 및 최적화",
		},
		{
			title: "Cloud Native 관련 교육 사업",
			desc: "Docker, Kubernetes, MSA 관련 오픈소스 설치, 최적화, 운영 관련 노하우 교육",
		},
	];

	const projects = [
		{
			title: "삼성전자 MSA 환경 구축 및 운영 고도화",
			desc: "자체 Kubernetes 기반 MSA 환경 구축 및 대규모 제조 데이터 분석 및 시각화 플랫폼 구축",
			img: "/images/project1.jpg",
		},
		{
			title: "LLM, MCP, AI Agent를 활용한 수율 분석 자동화",
			desc: "n8n, Ollama, MCP Tool을 이용한 반도체 수율 분석 자동화 PoC 구축",
			img: "/images/project2.jpg",
		},
		{
			title: "플랫폼 실시간 모니터링, 자동 복구, 업그레이드 환경",
			desc: "자동화된 클러스터 업그레이드, 모니터링, 스마트 알림, 자동 복구 시스템 구축",
			img: "/images/project3.jpg",
		},
	];

	return (
		<>
			<Hero />
			<section className="py-20 bg-white">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold text-center mb-12 text-blue-700">
						주요 서비스
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{services.map((s) => (
							<ServiceCard key={s.title} {...s} />
						))}
					</div>
				</div>
			</section>

			<section className="py-20 bg-gray-100">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold text-center mb-12 text-blue-700">
						프로젝트 사례
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{projects.map((p) => (
							<ProjectCard key={p.title} {...p} />
						))}
					</div>
				</div>
			</section>
		</>
	);
}
