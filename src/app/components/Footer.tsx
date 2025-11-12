export default function Footer() {
	return (
		<footer className="bg-blue-900 text-white py-10 text-center">
			<p className="text-lg font-semibold">유티클라우드 (UTCloud)</p>
			<p className="text-sm text-gray-300 mt-2">
				© {new Date().getFullYear()} UTCloud. All rights reserved.
			</p>
		</footer>
	);
}
