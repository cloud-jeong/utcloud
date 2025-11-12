import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../public/images/logo.jpeg";
import classes from "./Header.module.css";

export default function Header() {
	const nav = [
		{ name: "홈", path: "/" },
		{
			name: "블로그",
			path: "https://velog.io/@utcloud/posts",
			target: "_blank",
		},
		// { name: "서비스", path: "/services" },
		// { name: "프로젝트", path: "/projects" },
		{ name: "문의하기", path: "/contact" },
	];

	return (
		<header className="bg-white shadow-sm">
			<div className="container mx-auto flex justify-between items-center py-4 px-6">
				<Link className={classes.logo} href="/">
					<Image src={logoImg} alt="UTCloud logo" priority />
				</Link>
				<nav className="space-x-6">
					{nav.map((item) => (
						<Link
							key={item.path}
							href={item.path}
							className="text-gray-700 hover:text-blue-700 font-medium"
							target={item.target}
						>
							{item.name}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
}
