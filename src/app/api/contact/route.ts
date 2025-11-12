import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const { name, email, message } = await req.json();

	// 예: 실제 메일 전송 로직 (SendGrid, Mailgun 등)
	console.log(`📧 문의 도착: ${name} (${email}) - ${message}`);

	return NextResponse.json({ ok: true });
}
