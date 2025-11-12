import Link from "next/link";

export default function Hero() {
	return (
		<section className="bg-linear-to-br from-blue-700 to-blue-900 text-white py-32 text-center">
			<h1 className="text-5xl font-bold mb-6">유티클라우드</h1>
			<p className="text-xl mb-8">
				클라우드 네이티브 시대를 선도하는 <br />
				Kubernetes · MSA · 반도체 수율 품질 시스템 전문기업
			</p>
			<Link
				href="/about"
				className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100"
			>
				회사 소개 보기
			</Link>
		</section>
	);
}
