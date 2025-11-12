interface Props {
	title: string;
	desc: string;
}

export default function ServiceCard({ title, desc }: Props) {
	return (
		<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
			<h3 className="text-xl font-semibold mb-3 text-blue-700">{title}</h3>
			<p className="text-gray-600">{desc}</p>
		</div>
	);
}
