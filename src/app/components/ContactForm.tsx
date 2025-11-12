"use client";

import { useState } from "react";

const ContactForm = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [status, setStatus] = useState("");

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setStatus("전송 중...");

		const res = await fetch("/api/contact", {
			method: "POST",
			body: JSON.stringify(form),
		});

		if (res.ok) {
			setStatus("메시지가 전송되었습니다. 감사합니다!");
			setForm({ name: "", email: "", message: "" });
		} else {
			setStatus("전송 실패. 다시 시도해주세요.");
		}
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
			<input
				type="text"
				placeholder="이름"
				value={form.name}
				onChange={(e) => setForm({ ...form, name: e.target.value })}
				className="w-full border p-3 rounded"
				required
			/>
			<input
				type="email"
				placeholder="이메일"
				value={form.email}
				onChange={(e) => setForm({ ...form, email: e.target.value })}
				className="w-full border p-3 rounded"
				required
			/>
			<textarea
				placeholder="문의 내용"
				value={form.message}
				onChange={(e) => setForm({ ...form, message: e.target.value })}
				className="w-full border p-3 rounded"
				rows={5}
				required
			/>
			<button
				type="submit"
				className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800"
			>
				문의 보내기
			</button>
			{status && (
				<p className="text-center mt-3 text-sm text-gray-600">{status}</p>
			)}
		</form>
	);
};

export default ContactForm;
