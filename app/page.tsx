"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const WA = "https://wa.me/2349116438322?text=";
  const [amount, setAmount] = useState(500);
  const [t, setT] = useState({h:14,m:32,s:18});
  useEffect(()=>{
    const i=setInterval(()=>setT(v=>{
      if(v.s>0) return {...v,s:v.s-1};
      if(v.m>0) return {...v,m:v.m-1,s:59};
      return {h:v.h>0?v.h-1:23,m:59,s:59};
    }),1000);
    return ()=>clearInterval(i);
  },[]);

  return (
    <main className="min-h-screen bg-[#060608] text-white">
      <div className="bg-[#C9A86A] text-black text-[10px] font-black tracking-[0.2em] py-2 px-6 flex justify-between">
        <span>● LIVE BTC $68,432 • 1,247 STUDENTS ONLINE</span>
        <span>CLOSES IN: {String(t.h).padStart(2,'0')}:{String(t.m).padStart(2,'0')}:{String(t.s).padStart(2,'0')}</span>
      </div>
      <header className="px-6 py-5 flex justify-between items-center max-w-[1280px] mx-auto border-b border-white/10">
        <div className="flex items-center gap-3"><div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-[#C9A86A] to-[#8B6F3A] text-black flex items-center justify-center font-black">G</div><div><p className="font-black tracking-[0.25em] text-[13px]">GRAYSCALE RESEARCH</p><p className="text-[9px] text-[#C9A86A] tracking-[0.2em]">PRIVATE WEALTH EDUCATION</p></div></div>
        <a href={`${WA}Join%20Grayscale%20V2`} className="bg-white text-black px-6 py-2.5 rounded-full font-black text-[11px]">JOIN ON WHATSAPP</a>
      </header>

      <section className="max-w-[1280px] mx-auto px-6 pt-16 pb-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-10">
        <div>
          <div className="inline-flex gap-2 bg-white/10 border border-white/10 rounded-full px-3 py-1.5 text-[10px]"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>127 NEW STUDENTS THIS WEEK</div>
          <h1 className="text-[46px] md:text-[68px] font-black leading-[0.85] tracking-[-0.04em] mt-6">We Don't Teach<br/><span className="text-[#C9A86A]">Get Rich Quick.</span><br/>We Teach Wealth.</h1>
          <p className="text-[#9A9AA3] mt-6 max-w-[520px]">Same research framework used by $10B+ funds. No signals. No hype. Just thesis, risk, and patience. Built for USA investors starting at $100.</p>
          <div className="grid grid-cols-3 gap-3 mt-8 max-w-[460px]">
            {[{k:"1,247+",v:"Students"},{k:"$2.1M+",v:"Portfolios"},{k:"4.9/5",v:"Rating"}].map(i=><div key={i.k} className="bg-[#121215] border border-white/10 rounded-2xl p-4"><p className="font-black text-[18px]">{i.k}</p><p className="text-[10px] text-[#777] uppercase">{i.v}</p></div>)}
          </div>
          <div className="mt-8 bg-[#101012] border border-[#C9A86A]/20 rounded-[20px] p-5 max-w-[460px]">
            <div className="flex justify-between"><span className="text-[12px] text-[#999]">Your Budget</span><span className="font-black text-[#C9A86A] text-[20px]">${amount}</span></div>
            <input type="range" min={100} max={5000} step={100} value={amount} onChange={e=>setAmount(Number(e.target.value))} className="w-full mt-4 accent-[#C9A86A]"/>
            <a href={`${WA}V2%20start%20$${amount}`} className="mt-4 flex justify-center bg-[#C9A86A] text-black font-black py-3.5 rounded-full text-[13px]">SECURE SEAT - WhatsApp →</a>
          </div>
        </div>
        <div className="space-y-3">
          {[
            {n:"STARTER",p:"$100",s:"FOR BEGINNERS",f:["12 Video Lessons","Weekly Report","Discord Access","7-Day Refund"],best:false},
            {n:"PRO",p:"$500",s:"MOST POPULAR - 73% CHOOSE",f:["Everything in Starter","Daily Research M-F","Live Q&A 2x/week","1-on-1 Call 45min","Risk Management Lab"],best:true},
            {n:"ELITE",p:"$2,000",s:"FOR $10K+ CAPITAL",f:["Everything in Pro","Private Telegram","Early Research 24h","Monthly Mentorship"],best:false},
          ].map(x=>(
            <div key={x.n} className={`rounded-[24px] p-[1px] ${x.best?"bg-[#C9A86A]":"bg-white/10"}`}>
              <div className={`rounded-[23px] p-6 ${x.best?"bg-[#FFFDF6] text-black":"bg-[#121215]"}`}>
                <div className="flex justify-between"><div><h3 className="font-black tracking-widest text-[13px]">{x.n}</h3><p className="text-[10px] opacity-60">{x.s}</p></div><p className="font-black text-[28px]">{x.p}</p></div>
                <ul className="mt-4 space-y-2">{x.f.map(f=><li key={f} className="text-[12px] flex gap-2"><span>✓</span>{f}</li>)}</ul>
                <a href={`${WA}${x.n}%20${x.p}`} className={`mt-5 block text-center font-black text-[12px] py-3.5 rounded-full ${x.best?"bg-black text-white":"bg-white text-black"}`}>JOIN {x.n} →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="border-t border-white/10 py-8 text-center text-[10px] text-[#555]">© 2026 Grayscale Research LLC • Education Only • WhatsApp +234 911 643 8322</footer>
    </main>
  );
}
