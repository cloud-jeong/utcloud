import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
	title: "유티클라우드 | K8s & MSA 클라우드 컨설팅 전문기업",
	description:
		"Kubernetes, MSA, 반도체 품질 시스템 개발 전문기업 - 유티클라우드",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ko">
			<body className="bg-gray-50 text-gray-800 font-sans">
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
