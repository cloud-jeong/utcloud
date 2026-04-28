import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type { ContactFormData } from '@/types/contact';

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();
    const { name, email, company, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: '필수 항목을 입력해 주세요.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: '올바른 이메일을 입력해 주세요.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"UTCloud 홈페이지" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `[UTCloud 문의] ${name}님의 상담 신청`,
      text: [
        `이름: ${name}`,
        `이메일: ${email}`,
        `회사명: ${company || '(미입력)'}`,
        '',
        `문의 내용:`,
        message,
      ].join('\n'),
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #2d82f5; margin-bottom: 24px;">UTCloud 문의 접수</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 80px;">이름</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">이메일</td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">회사명</td>
              <td style="padding: 8px 0;">${company || '(미입력)'}</td>
            </tr>
          </table>
          <hr style="margin: 16px 0; border-color: #e5e7eb;" />
          <p style="color: #6b7280; font-size: 14px; margin-bottom: 8px;">문의 내용</p>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] email send error:', err);
    return NextResponse.json({ error: '이메일 발송에 실패했습니다.' }, { status: 500 });
  }
}
