'use client';

import { useState } from 'react';
import type { ContactFormData } from '@/types/contact';

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>({ name: '', email: '', company: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validate() {
    const newErrors = {
      name: !form.name.trim(),
      email: !emailRegex.test(form.email),
      message: !form.message.trim(),
    };
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <div className="fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 bg-brand-300 rounded-full"></span>
              <span className="text-brand-200 text-xs font-semibold tracking-wide uppercase">Contact Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              클라우드 전환,<br />
              지금 바로 시작하세요
            </h2>
            <p className="text-brand-200 leading-relaxed mb-10">
              프로젝트 문의부터 기술 상담까지 UTCloud 전문가가 빠르게 답변드립니다.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-brand-400 uppercase tracking-wide font-medium">이메일</p>
                  <p className="text-white font-medium">cloud.jung@utcloud.io</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="fade-in bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-6">문의하기</h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="홍길동"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="form-input w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 bg-gray-50"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">이름을 입력해 주세요.</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="example@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="form-input w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 bg-gray-50"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">올바른 이메일을 입력해 주세요.</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">회사명</label>
                  <input
                    type="text"
                    placeholder="(주)귀사명"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="form-input w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    문의 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="프로젝트 개요, 문의 사항 등을 입력해 주세요."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-input w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 bg-gray-50 resize-none"
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">문의 내용을 입력해 주세요.</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full py-3.5 mt-6 text-base"
              >
                {status === 'loading' ? '전송 중...' : '접수'}
              </button>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-center">
                  <p className="text-green-700 font-semibold text-sm">✓ 문의가 접수되었습니다!</p>
                  {/* <p className="text-green-600 text-xs mt-1">영업일 기준 24시간 이내에 답변드리겠습니다.</p> */}
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-center">
                  <p className="text-red-700 font-semibold text-sm">문의 전송에 실패했습니다.</p>
                  <p className="text-red-600 text-xs mt-1">잠시 후 다시 시도하거나 이메일로 직접 문의해 주세요.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
