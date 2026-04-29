import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
	return (
		<div className="py-20 px-6">
			<h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
				문의하기
			</h2>
			{/* <ContactForm /> */}
			<div className="text-center mt-10 text-gray-600">
				<p>이메일: cloud.jung@gmail.com</p>
				주소: 경기도 용인시 기흥구 강남로 6, 6층 603-에이87호(구갈동,
				비즈업오피스)
			</div>
		</div>
	);
}
