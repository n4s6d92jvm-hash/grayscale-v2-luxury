"use client";
import { useState, useEffect } from "react";
export default function Home() {
  const [amount, setAmount] = useState(500);
  const WHATSAPP = "https://wa.me/2349116438322?text=";
  const [btc, setBtc] = useState(68450.32);
  useEffect(()=>{const i=setInterval(()=>setBtc(b=>b+(Math.random()-0.5)*15),3000);return()=>clearInterval(i)},[]);
  const plans=[
    {name:"STARTER",price:"$100",period:"/month",features:["Crypto Basics Course","Weekly Market Analysis","Portfolio Tracker","Discord Community"],popular:false,link:"Starter%20$100"},
    {name:"PRO",price:"$500",period:"/3 months",features:["Everything in Starter","Daily Research Notes","1-on-1 Strategy Call","Risk Management Lab","Live Q&A"],popular:true,link:"Pro%20$500"},
    {name:"ELITE",price:"$2,000",period:"/year",features:["Everything in Pro","Advanced DeFi Course","Private Mentorship","Early Research Access"],popular:false,link:"Elite%20$2000"},
  ];
  return(
    <main className="min-h-screen bg-[#050507] text-white">
      <div className="bg-[#0a0a0c] border-b border-white/10 py-2 px-6 text-[11px] flex gap-6"><span>BTC ${btc.toFixed(2)}</span><span>ETH $3421</span></div>
      <header className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto"><span className="font-black tracking-widest text-sm">GRAYSCALE RESEARCH</span><a href={`${WHATSAPP}Hello`} className="bg-white text-black font-bold px-5 py-2.5 rounded-full text-xs">WhatsApp</a></header>
      <section className="px-6 pt-16 pb-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div><h1 className="text-5xl font-black leading-[0.9] mb-5">Learn to Invest in Crypto, <span className="text-gray-500">the Smart Way.</span></h1><p className="text-gray-400 mb-8">We teach research & risk, not hype. From $100.</p><div className="bg-white/[0.04] border border-white/10 rounded-
