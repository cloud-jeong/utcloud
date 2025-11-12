interface Project {
	title: string;
	desc: string;
	img: string;
}

export default function ProjectCard({ title, desc, img }: Project) {
	return (
		<div className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition">
			<img src={img} alt={title} className="w-full h-62 object-cover" />
			<div className="p-5">
				<h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
				<p className="text-gray-600 text-sm">{desc}</p>
			</div>
		</div>
	);
}
