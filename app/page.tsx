'use client';

import { useState } from 'react';

const quotes = [
  '每完成一小步，都是進步。',
  '今天也要相信自己的努力。',
  'Keep learning, keep growing.',
  '把複雜的事情拆小，就會變得比較簡單。',
  'Every expert was once a beginner.',
];

const colors = [
  '深海藍｜適合專注完成作業',
  '湖水綠｜適合放鬆整理想法',
  '星空紫｜適合發想新的點子',
  '晨光黃｜適合主動嘗試',
  '霧灰白｜適合冷靜處理事情',
];

export default function Page() {
  const [quote, setQuote] = useState('點擊按鈕，抽取今日一句鼓勵。');
  const [color, setColor] = useState('點擊按鈕，抽取今日幸運色。');

  function randomQuote() {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }

  function randomColor() {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }

  return (
    <main className="min-h-screen bg-[#070b16] text-white">
      <nav className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#070b16]/80 px-8 py-5 backdrop-blur md:px-24">
        <p className="font-bold text-cyan-300">林怡萱</p>
        <div className="flex gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-cyan-300">關於我</a>
          <a href="#project" className="hover:text-cyan-300">專題</a>
          <a href="#explore" className="hover:text-cyan-300">探索</a>
        </div>
      </nav>

      <section className="px-8 py-24 md:px-24">
        <p className="text-sm tracking-[0.2em] text-cyan-300">
          National Chin-Yi University of Technology
        </p>

        <h1 className="mt-6 text-4xl font-bold md:text-5xl">
          林怡萱
        </h1>

        <p className="mt-4 text-xl text-slate-300">
          智慧自動化工程系
        </p>

        <p className="mt-6 max-w-2xl leading-8 text-slate-400">
          將程式設計與智慧控制結合，持續學習 Python、Arduino、ESP32 等技術，
          並將所學應用於專題開發與實作。
        </p>
      </section>

      <section id="about" className="grid gap-6 px-8 py-10 md:grid-cols-3 md:px-24">
        {[
          ['學校', '國立勤益科技大學'],
          ['科系', '智慧自動化工程系'],
          ['技能', 'Python、Arduino、ESP32'],
        ].map(([title, text]) => (
          <div
            key={title}
            className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-cyan-300/60"
          >
            <p className="text-cyan-300">{title}</p>
            <p className="mt-4 text-lg text-slate-200">{text}</p>
          </div>
        ))}
      </section>

      <section id="project" className="px-8 py-14 md:px-24">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-8 md:p-10">
          <p className="text-cyan-300">Capstone Project</p>
          <h2 className="mt-4 text-3xl font-bold">EchoAvatar 居家智慧溝通分身</h2>
          <p className="mt-5 max-w-4xl leading-8 text-slate-300">
            一套結合語音控制、雙向溝通、智慧避障與遠端操控的居家智慧自走車，
            協助行動不便者提升生活自主性與照護效率。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {['語音控制', '雙向溝通', '智慧避障', '遠端操控'].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-center text-cyan-200"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Python', 'Arduino', 'ESP32', 'MQTT'].map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 px-4 py-2 text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="explore" className="grid gap-6 px-8 py-14 md:grid-cols-2 md:px-24">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-8">
          <p className="text-cyan-300">Explore</p>
          <h2 className="mt-4 text-3xl font-bold">今日一句鼓勵</h2>
          <p className="mt-4 text-slate-400">
            點擊按鈕，隨機產生一句給自己的提醒。
          </p>
          <button
            onClick={randomQuote}
            className="mt-6 rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300 active:scale-95"
          >
            產生一句話
          </button>
          <div className="mt-6 rounded-2xl bg-white/5 p-6">
            <p className="text-xl font-bold text-cyan-200">{quote}</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-8">
          <p className="text-cyan-300">Lucky Color</p>
          <h2 className="mt-4 text-3xl font-bold">今日幸運色</h2>
          <p className="mt-4 text-slate-400">
            一個簡單互動小工具，隨機抽出今日色彩與小提醒。
          </p>
          <button
            onClick={randomColor}
            className="mt-6 rounded-full bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-slate-200 active:scale-95"
          >
            抽取幸運色
          </button>
          <div className="mt-6 rounded-2xl bg-cyan-400 p-6 text-slate-950">
            <p className="text-xl font-black">{color}</p>
          </div>
        </div>
      </section>

      <footer className="px-8 py-10 text-center text-slate-500">
        © 2026 林怡萱｜Next.js Final Project
      </footer>
    </main>
  );
}