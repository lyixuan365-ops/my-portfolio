'use client';

import { useState } from 'react';

const quotes = [
  '每完成一小步，都是進步。',
  '今天也要相信自己的努力。',
  'Keep learning, keep growing.',
  'Every expert was once a beginner.',
  '慢慢來也沒關係，重點是不要停下來。',
  '把複雜的事情拆小，就會變得比較簡單。',
];

export default function Page() {
  const [quote, setQuote] = useState('點擊按鈕，抽取今日一句鼓勵。');

  function generateQuote() {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="sticky top-0 z-10 flex justify-between border-b border-white/10 bg-slate-950/80 px-8 py-4 backdrop-blur md:px-20">
        <p className="font-bold text-cyan-300">林怡萱</p>
        <div className="flex gap-5 text-sm text-slate-300">
          <a href="#about" className="hover:text-cyan-300">關於我</a>
          <a href="#project" className="hover:text-cyan-300">專題</a>
          <a href="#explore" className="hover:text-cyan-300">探索</a>
        </div>
      </nav>

      <section className="px-8 py-20 md:px-20">
        <p className="text-sm tracking-[0.3em] text-cyan-300">
          NATIONAL CHIN-YI UNIVERSITY OF TECHNOLOGY
        </p>
        <h1 className="mt-5 text-4xl font-bold md:text-5xl">林怡萱</h1>
        <p className="mt-4 text-xl text-slate-300">智慧自動化工程系</p>
        <p className="mt-6 max-w-2xl leading-8 text-slate-400">
          將程式設計與智慧控制結合，持續學習 Python、Arduino、ESP32 等技術，
          並將所學應用於專題開發與實作。
        </p>
      </section>

      <section id="about" className="grid gap-6 px-8 py-10 md:grid-cols-3 md:px-20">
        {[
          ['學校', '國立勤益科技大學'],
          ['科系', '智慧自動化工程系'],
          ['技能', 'Python、Arduino、ESP32'],
        ].map(([title, text]) => (
          <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-300/60">
            <p className="text-cyan-300">{title}</p>
            <p className="mt-4 leading-7 text-slate-300">{text}</p>
          </div>
        ))}
      </section>

      <section id="project" className="px-8 py-12 md:px-20">
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
          <p className="text-cyan-300">Project</p>
          <h2 className="mt-3 text-3xl font-bold">EchoAvatar 居家智慧溝通分身</h2>
          <p className="mt-5 max-w-4xl leading-8 text-slate-300">
            一套結合語音控制、雙向溝通、智慧避障與遠端操控的居家智慧自走車，
            協助行動不便者提升生活自主性與照護效率。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {['語音控制', '雙向溝通', '智慧避障', '遠端操控', 'Python', 'Arduino', 'ESP32'].map((tag) => (
              <span key={tag} className="rounded-full border border-cyan-400/40 px-4 py-2 text-cyan-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="explore" className="px-8 py-12 md:px-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
            <p className="text-cyan-300">Explore</p>
            <h2 className="mt-3 text-3xl font-bold">今日一句鼓勵</h2>
            <p className="mt-4 leading-7 text-slate-400">
              點擊按鈕，隨機產生一句鼓勵自己的話。
            </p>
            <button
              onClick={generateQuote}
              className="mt-6 rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300 active:scale-95"
            >
              產生一句話
            </button>
          </div>

          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400 p-8 text-slate-950">
            <p className="font-bold">Today&apos;s Message</p>
            <h3 className="mt-6 text-2xl font-black leading-10">{quote}</h3>
          </div>
        </div>
      </section>

      <footer className="px-8 py-10 text-center text-slate-500">
        © 2026 林怡萱｜Next.js Final Project
      </footer>
    </main>
  );
}