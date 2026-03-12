"use client";

import Head from 'next/head';
import { useState } from 'react';
import {
  ArrowRight,
  Bot,
  Check,
  CreditCard,
  Fingerprint,
  Globe,
  Image as ImageIcon,
  MessageSquare,
  Mic,
  QrCode,
  Target,
  TrendingUp,
  X,
  Zap,
  Lock,
  Wallet,
  ShieldCheck,
  Smartphone,
  User,
  Mail,
  FileText,
  Menu,
  PieChart,
  MessageCircle,
  ChevronDown
} from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ParticleNetwork } from "@/components/ui/particle-network";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import PricingSection from "@/components/ui/pricing-section";
import { TestimonialsSection } from "@/components/ui/testimonials";
import { TimelineContent } from "@/components/ui/timeline-animation";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/5 bg-[#0A0F0C]/40 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00FFA3]/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Recolher pergunta" : "Expandir pergunta"}
        className="w-full p-6 text-left flex items-center justify-between gap-4 group"
      >
        <span className="text-lg font-medium text-white/90 group-hover:text-white transition-colors">{question}</span>
        <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#00FFA3]/10 text-[#00FFA3]' : 'text-[#8892B0]'}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 text-[#8892B0] font-light leading-relaxed border-t border-white/5 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<{ name: string, price: string, totalPrice: string, isAnnual: boolean, includes: string[] } | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'pix'>('credit_card');

  // Login State
  const [loginOpen, setLoginOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);

    // Only email required now
    setTimeout(() => {
      if (email.includes('@')) {
        // Success - Simulating redirection
        alert('Login realizado com sucesso! Redirecionando para a plataforma...');
        setLoginOpen(false);
      } else {
        setLoginError('Por favor, insira um e-mail válido.');
      }
      setIsLoggingIn(false);
    }, 1500);
  };

  const openCheckout = (name: string, price: string, totalPrice: string, isAnnual: boolean, includes: string[]) => {
    setCheckoutPlan({ name, price, totalPrice, isAnnual, includes });
    setCheckoutOpen(true);
    setPaymentMethod('credit_card');
  };

  return (
    <>
      <Head>
        <title>Energy Zapp | Infraestrutura de Vendas com Inteligência Artificial</title>
        <meta name="description" content="Transforme seu WhatsApp em uma máquina de vendas com a Energy Zapp. IA treinada com 15 anos de experiência comercial real para conduzir conversas e gerar receita." />
        <meta name="keywords" content="IA comercial, automação whatsapp, chatbot vendas, inteligência artificial, energy zapp" />
        <meta property="og:title" content="Energy Zapp | Infraestrutura de Vendas com IA" />
        <meta property="og:description" content="Nossa IA não apenas responde, ela vende. Conheça a infraestrutura comercial que gera receita no WhatsApp." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-[#071018] text-white selection:bg-[#00FFA3]/30 overflow-hidden font-sans">

        {/* --- TOP GREEN LIGHT GLOW --- */}
        <div className="absolute top-0 inset-x-0 h-[800px] flex justify-center pointer-events-none z-0 overflow-hidden">
          <div className="w-[1200px] h-[400px] bg-[#00FFA3]/25 blur-[150px] -translate-y-1/2 rounded-[100%]" />
        </div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

        {/* --- FLOATING PILL NAV --- */}
        <div className="fixed top-6 w-full z-50 px-4 flex justify-center">
          <nav className="w-full max-w-[800px] border border-white/[0.08] bg-[#0A0F0C]/80 backdrop-blur-3xl rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <div className="px-6 h-14 flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src="/Energyzapp.svg"
                  alt="Logo Energy Zapp"
                  width={120}
                  height={40}
                  className="h-32 w-auto object-contain"
                  priority
                />
              </div>

              <div className="hidden md:flex items-center gap-8 text-sm text-[#8892B0] font-medium">
                <a href="#" className="hover:text-white transition-colors">Recursos</a>
                <a href="#" className="hover:text-white transition-colors">Casos de Uso</a>
                <a href="#" className="hover:text-white transition-colors">Preços</a>
              </div>

              <div className="flex items-center gap-6">
                <button
                  onClick={() => setLoginOpen(true)}
                  aria-label="Abrir modal de login"
                  className="text-sm text-[#8892B0] font-medium hover:text-white transition-colors"
                >
                  Entrar
                </button>
                <button className="h-9 px-5 rounded-full bg-white/[0.08] border border-white/[0.12] text-white text-xs font-bold hover:bg-white/[0.15] transition-all">
                  Criar Conta
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* --- HERO SECTION WITH SCROLL ANIMATION --- */}
        <section className="relative pt-32 pb-10 flex flex-col items-center z-10 w-full mx-auto overflow-hidden">
          {/* Animated Background */}
          <ParticleNetwork />

          <ContainerScroll
            titleComponent={
              <div className="flex flex-col items-center px-4">
                <div className="px-4 py-2 border border-[#00FFA3]/20 bg-[#00FFA3]/[0.05] rounded-full text-[#00FFA3] text-xs font-semibold tracking-widest uppercase mb-10 flex items-center justify-center gap-3 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,163,0.1)] mx-auto w-max max-w-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFA3] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFA3]"></span>
                  </span>
                  Sistema Auto-Closer
                </div>

                <h1 className="text-4xl md:text-[clamp(2.5rem,8vw,7rem)] font-medium tracking-tighter leading-[1.1] md:leading-[1] mb-8 text-white px-4">
                  Chatbots respondem.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00FFA3] to-[#00FFA3]/40 italic font-light">A Energy Zapp gera receita.</span>
                </h1>

                <p className="text-lg md:text-2xl text-[#8892B0] font-light max-w-6xl leading-relaxed tracking-tight mb-16 mx-auto px-6">
                  Diferente de menus e fluxos engessados, a <span className="text-white font-medium">Energy Zapp</span> foi treinada com 15 anos de experiência comercial real para conduzir conversas e transformar leads em clientes. Não é um chatbot. É <span className="text-white font-medium">infraestrutura comercial de IA.</span>
                </p>

                <button
                  onClick={() => document.getElementById('pricing-plans')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="Ativar minha infraestrutura de vendas e ver planos de preço"
                  className="group relative h-14 px-8 rounded-full bg-[#00FFA3] text-black font-semibold text-lg hover:bg-[#00e695] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_40px_rgba(0,255,163,0.3)] mx-auto"
                >
                  Ativar minha infraestrutura de vendas
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 duration-300 transition-transform" aria-hidden="true" />
                </button>
              </div>
            }
          >
            {/* DASHBOARD MOCKUP INSIDE CARD */}
            <div className="flex h-full w-full bg-[#0A0F0C] text-white">
              {/* Sidebar (imagem 1) */}
              <div className="hidden md:flex w-52 bg-[#0A0F0C] border-r border-white/5 p-4 flex-col gap-2">
                <div className="bg-[#00FFA3] text-black font-medium px-4 py-3 rounded-xl flex items-center gap-3 cursor-pointer">
                  <Menu className="w-5 h-5" /> Painel
                </div>
                <div className="text-[#8892B0] hover:bg-white/5 hover:text-white px-4 py-3 rounded-xl flex items-center gap-3 transition-colors cursor-pointer">
                  <PieChart className="w-5 h-5" /> WhatsApp
                </div>
                <div className="text-[#8892B0] hover:bg-white/5 hover:text-white px-4 py-3 rounded-xl flex items-center gap-3 transition-colors cursor-pointer">
                  <MessageCircle className="w-5 h-5" /> Chats
                </div>
                <div className="text-[#8892B0] hover:bg-white/5 hover:text-white px-4 py-3 rounded-xl flex items-center gap-3 transition-colors cursor-pointer">
                  <User className="w-5 h-5" /> Agente IA
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 bg-[#030704] flex flex-col overflow-hidden">

                <div className="p-5 md:p-8">
                  {/* --- Screen 1: Painel de Controle --- */}
                  <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-2">Painel <span className="text-[#8892B0] font-light text-2xl">de Controle</span></h2>

                  {/* Cards de métricas */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-8">
                    {[
                      { title: "Leads no WhatsApp", value: "1.241", sub: "Leads quentes hoje", perc: 100 },
                      { title: "Reuniões agendadas", value: "1.116", sub: "Qualificado pelo Agente", perc: 90 },
                      { title: "Pedidos confirmados", value: "1.004", sub: "Vendas diretas via IA", perc: 81 },
                      { title: "Leads em Follow Up", value: "831", sub: "Aguardando resposta", perc: 67 },
                    ].map((item, i) => (
                      <div key={i} className="bg-[#0A0F0C] border border-white/5 rounded-2xl p-5 relative flex flex-col justify-between min-h-[160px]">
                        <div>
                          <div className="text-[#8892B0] font-medium text-[13px] mb-3 leading-tight pr-10">{item.title}</div>
                          <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
                        </div>
                        <div className="text-[10px] text-[#8892B0] mt-auto font-light leading-tight">{item.sub}</div>
                        <div className={`absolute top-5 right-5 w-9 h-9 rounded-full border-[2px] border-[#00FFA3] flex items-center justify-center bg-[#0A0F0C]`}>
                          <span className={`text-[8px] font-bold text-[#00FFA3]`}>{item.perc}%</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                    {/* Gráfico Vendas por Período */}
                    <div className="col-span-1 lg:col-span-2 bg-[#0A0F0C] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-[#00FFA3] font-medium flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" /> Vendas por Período
                        </h3>
                        <span className="text-white text-sm font-medium">Total no range: <span className="text-[#8892B0] font-normal">11.835</span></span>
                      </div>
                      {/* Gráfico Simulado */}
                      <div className="h-40 w-full mb-4 mt-8 relative">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
                        <div className="absolute bottom-0 w-full h-[1px] bg-white/5" />
                        <div className="absolute top-[66%] w-full h-[1px] bg-white/5" />
                        <div className="absolute top-[33%] w-full h-[1px] bg-white/5" />
                        <div className="absolute top-0 w-full h-[1px] bg-white/5" />

                        {/* SVG Line Chart Style */}
                        <svg className="absolute inset-0 w-full h-full pb-2" preserveAspectRatio="none" viewBox="0 0 100 100">
                          {/* Gradient under line */}
                          <defs>
                            <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#00FFA3" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#00FFA3" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d="M0,90 L5,75 L15,85 L20,80 L25,82 L30,70 L35,75 L40,65 L45,60 L50,45 L55,48 L60,35 L65,37 L70,40 L75,37 L80,25 L85,32 L90,28 L95,25 L100,10 L100,100 L0,100 Z" fill="url(#chartGlow)" />
                          {/* Main Line */}
                          <path d="M0,90 L5,75 L15,85 L20,80 L25,82 L30,70 L35,75 L40,65 L45,60 L50,45 L55,48 L60,35 L65,37 L70,40 L75,37 L80,25 L85,32 L90,28 L95,25 L100,10" fill="none" stroke="#00FFA3" strokeWidth="1.5" strokeLinejoin="round" />
                          <circle cx="5" cy="75" r="1.5" fill="#00FFA3" />
                          <circle cx="20" cy="80" r="1.5" fill="#00FFA3" />
                          <circle cx="45" cy="60" r="1.5" fill="#00FFA3" />
                          <circle cx="60" cy="35" r="1.5" fill="#00FFA3" />
                          <circle cx="80" cy="25" r="1.5" fill="#00FFA3" />
                          <circle cx="100" cy="10" r="1.5" fill="#00FFA3" />
                        </svg>
                      </div>
                      <p className="text-[#8892B0] text-xs">Passe o mouse sobre a linha para ver detalhes por dia.</p>
                    </div>

                    {/* Perfil de Vendas */}
                    <div className="col-span-1 bg-[#0A0F0C] border border-white/5 rounded-2xl p-6">
                      <h3 className="text-[#00FFA3] font-medium mb-6 flex items-center gap-2"><PieChart className="w-4 h-4" /> Perfil de Vendas</h3>

                      <div className="mb-6">
                        <div className="text-white font-medium text-sm mb-1">Taxa de Conversão</div>
                        <div className="flex items-end gap-2 mb-1">
                          <span className="text-2xl font-bold text-white">81%</span>
                          <span className="text-[#00FFA3] font-bold text-xs bg-[#00FFA3]/10 px-1.5 py-0.5 rounded">ALTA</span>
                        </div>
                        <div className="text-xs text-[#8892B0]">Leads → Pedidos</div>
                      </div>

                      <div className="mb-6">
                        <div className="text-[#8892B0] text-sm mb-1">Agenda Ocupada</div>
                        <div className="flex items-end gap-2 mb-1">
                          <span className="text-2xl font-bold text-white">92%</span>
                          <span className="text-[#00FFA3] font-bold text-xs bg-[#00FFA3]/10 px-1.5 py-0.5 rounded">HOT</span>
                        </div>
                        <div className="text-xs text-[#8892B0]">Disponibilidade de reuniões</div>
                      </div>

                      <div>
                        <div className="text-[#8892B0] text-sm mb-1">Lead LTV</div>
                        <div className="flex items-end gap-2 mb-1">
                          <span className="text-2xl font-bold text-white">R$ 4.2k</span>
                          <span className="text-[#00FFA3]/60 font-bold text-xs bg-[#00FFA3]/5 px-1.5 py-1.5 rounded">+12%</span>
                        </div>
                        <div className="text-xs text-[#8892B0]">Valor médio por conversão</div>
                      </div>
                    </div>
                  </div>

                  {/* --- Screen 2: WhatsApp --- */}
                  <h2 className="text-2xl font-bold mb-6 mt-16 text-white flex items-center gap-3">WhatsApp</h2>
                  <div className="bg-[#0A0F0C] border border-white/5 rounded-2xl p-6 xl:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-white/5 pb-6">
                      <div className="font-bold text-xl tracking-tight text-white">WhatsApp</div>
                      <div className="flex flex-wrap gap-4 text-[#8892B0] text-sm">
                        <button className="hover:text-white transition-colors">Atualizar</button>
                        <button className="hover:text-white transition-colors">Reconectar</button>
                        <button className="hover:text-white transition-colors">Logout</button>
                      </div>
                    </div>

                    <div className="mb-8 border-b border-white/5 pb-8 text-sm">
                      <div className="text-[#8892B0] mb-2">Status</div>
                      <div className="text-white font-bold mb-4 tracking-wide flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-[#00FFA3] rounded-full animate-pulse shadow-[0_0_10px_#00FFA3]"></div>
                        CONNECTED
                      </div>
                      <div className="text-[#8892B0] mb-2">Provider: <span className="text-[#8892B0]/80 font-mono text-xs ml-1">zap-2-baileys</span></div>
                      <div className="text-[#8892B0] mb-2">Tenant: <span className="text-[#8892B0]/80 font-mono text-xs ml-1">demo-nexyaai</span></div>
                      <div className="text-[#8892B0] mb-1">Última conexão: <span className="text-[#8892B0]/80 font-mono text-xs ml-1">2026-03-11T00:09:20.239Z</span></div>
                    </div>

                    <div className="text-sm">
                      <div className="text-[#8892B0] mb-4">QR Code</div>
                      <div className="text-[#8892B0]/60">Nenhum QR disponível no momento.</div>
                    </div>
                  </div>

                  {/* --- Screen 3: Agente IA --- */}
                  <h2 className="text-2xl font-bold mb-2 mt-20 text-white flex gap-2 items-center">Agente <span className="text-[#00FFA3]">IA</span></h2>
                  <p className="text-[#8892B0] text-sm mb-6">Configure instruções, personalidade e materiais de contexto.</p>

                  <div className="bg-[#0A0F0C] border border-white/5 rounded-2xl p-6 xl:p-8 mb-20">
                    <h3 className="text-white font-bold mb-8 text-lg border-b border-white/5 pb-4">Configuração</h3>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-white font-semibold text-sm mb-3">AccountId</label>
                        <input disabled value="demo-nexyaai" className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-white text-sm outline-none" />
                      </div>

                      <div>
                        <label className="block text-white font-semibold text-sm mb-3">Personalidade</label>
                        <div className="relative">
                          <select className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-[#8892B0] text-sm appearance-none outline-none cursor-pointer">
                            <option>vendas</option>
                            <option>suporte</option>
                            <option>híbrido</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8892B0] pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-white font-semibold text-sm mb-3">Instruções do agente</label>
                        <textarea rows={7} className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-white text-sm outline-none resize-none leading-relaxed" defaultValue={`Tom: animada, FELIZ, energia ALTA, alegre, confiante. Profissional e leve.
Mensagens curtas, humanas, diretas. Use exclamações naturalmente.
Nunca diga que é IA/robô/assistente virtual.

Pronúncia sempre por extenso:
- 24/7 = "vinte e quatro horas, sete dias por semana"`}></textarea>
                      </div>

                      <button className="mt-4 px-8 py-3.5 rounded-xl bg-[#00FFA3] text-black font-semibold hover:bg-[#00e695] transition-colors shadow-[0_0_20px_rgba(0,255,163,0.2)] flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        Treinar agente
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </ContainerScroll>
        </section>

        {/* --- A TESE (Mental Demo Glass Morphism) --- */}
        <section className="py-32 relative z-10 w-full max-w-[1200px] mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white">
                O problema <br /><span className="text-[#00FFA3]">do mercado.</span>
              </h2>
              <p className="text-xl text-[#8892B0] font-light leading-relaxed">
                Nos últimos anos, empresas correram para automatizar. O resultado são fluxos intermináveis e menus que matam a intenção de compra. Quando um lead demonstra interesse, a conversa trava. A venda morre no meio do fluxo.
              </p>
              <div className="flex flex-col gap-5 pt-4">
                <div className="flex items-center gap-4 text-white/70">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-red-500/20 bg-red-500/5 text-red-400">
                    <Bot className="w-4 h-4" />
                  </div>
                  <span className="text-lg">Bots que respondem, mas não vendem</span>
                </div>
                <div className="flex items-center gap-4 text-white/70">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-red-500/20 bg-red-500/5 text-red-400">
                    <X className="w-4 h-4" />
                  </div>
                  <span className="text-lg">A venda morre no meio do fluxo engessado</span>
                </div>
              </div>
            </div>

            {/* Premium Glass Mockup */}
            <div className="relative group">
              <div className="absolute inset-0 bg-[#00FFA3]/5 blur-[100px] rounded-[3rem] group-hover:bg-[#00FFA3]/10 transition-colors duration-700" />

              <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent">
                <div className="bg-[#0A0F0C] rounded-[2.4rem] p-8 border border-white/[0.05] shadow-2xl overflow-hidden relative">

                  {/* Chatbot Antigo */}
                  <div className="mb-12 relative opacity-50 blur-[0.5px] grayscale hover:grayscale-0 hover:opacity-100 hover:blur-none transition-all duration-500">
                    <div className="text-[10px] uppercase tracking-widest text-[#8892B0] mb-4 font-bold">Status Quo</div>
                    <div className="flex flex-col gap-3">
                      <div className="self-end bg-white/10 text-white/80 py-3 px-5 rounded-2xl rounded-tr-sm text-sm max-w-[85%] border border-white/5">
                        "Tem esse produto ainda?"
                      </div>
                      <div className="self-start bg-[#1a1a1a] text-white/60 py-3 px-5 rounded-2xl rounded-tl-sm text-sm max-w-[85%] border border-white/5 leading-relaxed">
                        "Digite 1 para vendas.<br />Digite 2 para suporte.<br />Digite 3 para atendimento."
                      </div>
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

                  {/* Energy Zapp */}
                  <div className="relative">
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#00FFA3] rounded-r-lg shadow-[0_0_15px_#00FFA3]" />
                    <div className="text-[10px] uppercase tracking-widest text-[#00FFA3] mb-4 font-bold px-4">O novo modelo de vendas</div>
                    <div className="flex flex-col gap-3 px-4">
                      <div className="self-end bg-white/10 text-white py-3 px-5 rounded-2xl rounded-tr-sm text-sm max-w-[85%] border border-white/10">
                        "Tem esse produto ainda?"
                      </div>
                      <div className="self-start relative bg-[#00FFA3]/10 text-white py-3 px-5 rounded-2xl rounded-tl-sm text-sm max-w-[85%] border border-[#00FFA3]/20 shadow-[0_4px_30px_rgba(0,255,163,0.1)]">
                        "Tem sim! Temos a pronta entrega. Voce está buscando para uso pessoal ou para empresa?"
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- POSICIONAMENTO --- */}
        <section className="py-32 relative z-10 w-full max-w-[1200px] mx-auto px-6 text-center">

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
            <TextGenerateEffect
              words="Responder não é vender."
              duration={0.6}
              highlightWords={["vender."]}
            />
          </h2>

          <div className="text-2xl text-[#8892B0] font-light max-w-3xl mx-auto leading-relaxed mb-16">
            <TextGenerateEffect
              words="A maioria das soluções apenas responde perguntas. Venda acontece quando alguém entende a intenção do cliente, conduz a conversa e quebra objeções. Isso exige inteligência comercial."
              duration={1.0}
              highlightWords={["entende", "conduz", "inteligência", "comercial."]}
            />
          </div>

          <TimelineContent
            animationNum={0}
            customVariants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } }
            }}
            className="bg-[#0A0F0C]/80 backdrop-blur-3xl border border-white/10 p-10 md:p-16 rounded-[40px] relative overflow-hidden text-left shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_20px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00FFA3]/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2 text-left" />

            <p className="text-[#00FFA3] uppercase tracking-widest text-sm font-semibold mb-6">Infraestrutura comercial de IA</p>
            <p className="text-3xl md:text-4xl text-white font-medium tracking-tighter leading-tight max-w-2xl mb-10">
              Diferente de plataformas que apenas respondem mensagens, a Energy Zapp foi projetada para conduzir conversas até a venda.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <TimelineContent
                animationNum={1}
                customVariants={{
                  hidden: { x: -20, opacity: 0 },
                  visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.5 } }
                }}
                className="border border-white/[0.05] bg-white/[0.02] p-6 rounded-2xl"
              >
                <span className="text-[#8892B0] text-lg">Menos tarefas operacionais</span><br />
                <span className="text-2xl text-white font-medium">Mais receita gerada</span>
              </TimelineContent>

              <TimelineContent
                animationNum={2}
                customVariants={{
                  hidden: { x: 20, opacity: 0 },
                  visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.7 } }
                }}
                className="border border-[#00FFA3]/10 bg-[#00FFA3]/[0.02] p-6 rounded-2xl shadow-[inset_0_0_30px_rgba(0,255,163,0.02)]"
              >
                <span className="text-[#8892B0] text-lg">Mais vendas direto no WhatsApp</span><br />
                <span className="text-2xl text-[#00FFA3] font-medium">Sem aumentar a equipe</span>
              </TimelineContent>
            </div>
          </TimelineContent>

        </section>

        {/* --- NÍVEIS DE INTELIGÊNCIA (BENTO GRID IRREGULAR) --- */}
        <section className="py-32 relative z-10 w-full max-w-[1200px] mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tighter">Três níveis de inteligência.</h2>
            <p className="text-[#8892B0] text-xl font-light">Para diferentes níveis de atendimento.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">

            <div className="group border border-white/10 bg-[#0A0F0C]/80 backdrop-blur-2xl rounded-[40px] p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:-translate-y-2 hover:border-[#00FFA3]/30 transition-all duration-500 flex flex-col justify-between">
              <div className="w-12 h-12 bg-white/[0.03] border border-white/[0.05] rounded-xl flex items-center justify-center">
                <MessageSquare className="text-white/70 w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white mb-3">Atendimento Inteligente</h3>
                <p className="text-[#8892B0] font-light">Linguagem natural e respostas contextualizadas que interpretam a intenção em segundos.</p>
              </div>
            </div>

            <div className="group border border-white/10 bg-[#0A0F0C]/80 backdrop-blur-2xl rounded-[40px] p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:-translate-y-2 hover:border-[#00FFA3]/30 transition-all duration-500 flex flex-col justify-between">
              <div className="w-12 h-12 bg-[#00FFA3]/10 border border-[#00FFA3]/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-[#00FFA3] w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white mb-3">Condução de Vendas</h3>
                <p className="text-[#8892B0] font-light">Perguntas estratégicas e tratamento de objeções para levar o lead até o fechamento.</p>
              </div>
            </div>

            <div className="group md:col-span-1 md:row-span-2 border border-[#00FFA3]/30 bg-[#0A0F0C]/80 backdrop-blur-2xl rounded-[40px] p-8 flex flex-col justify-between relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_0_80px_rgba(0,255,163,0.15)] hover:-translate-y-2 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FFA3]/10 blur-[80px] pointer-events-none group-hover:bg-[#00FFA3]/20 transition-all duration-500" />
              <div className="w-14 h-14 bg-[#c1ff72] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(193,255,114,0.5)]">
                <Target className="text-black w-6 h-6" />
              </div>

              <div className="mt-8">
                <h3 className="text-3xl font-medium text-white mb-4">Auto Closer</h3>
                <p className="text-[#8892B0] font-light text-lg">
                  Apresentação de ofertas, envio de materiais e cálculos interativos de orçamento no meio da conversa. O fechamento perfeito.
                </p>
              </div>

              <div className="mt-12 h-32 w-full rounded-xl bg-black/40 border border-white/5 relative overflow-hidden backdrop-blur-md">
                <div className="absolute rounded-lg border border-white/10 bg-white/5 top-4 left-4 p-2.5 flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#00FFA3]/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#00FFA3]" />
                  </div>
                  <div className="w-24 h-1 bg-white/10 rounded" />
                </div>
                <div className="absolute rounded-lg border border-white/10 bg-white/5 bottom-4 right-4 p-2.5 flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#00FFA3] shadow-[0_0_10px_#00FFA3] flex items-center justify-center" />
                  <div className="w-16 h-1 bg-white/20 rounded" />
                </div>
              </div>
            </div>

            <div className="md:col-span-2 border border-[#00FFA3]/10 bg-[#0A0F0C]/80 backdrop-blur-2xl rounded-[40px] p-8 flex flex-col justify-center relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:-translate-y-2 hover:border-[#00FFA3]/30 transition-all duration-500">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay"></div>
              <p className="text-2xl md:text-3xl text-white font-medium tracking-tighter leading-snug">
                "Cada conversa segue princípios utilizados por <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFA3] to-[#c1ff72]">times comerciais de alta performance</span> para transformar leads em receita."
              </p>
            </div>
          </div>
        </section>

        {/* Transition Removed */}

        {/* --- QUEM SOMOS (ALL IN BI) --- */}
        <section className="py-32 relative z-10 w-full max-w-[1200px] mx-auto px-6">
          <div className="relative p-10 md:p-20 rounded-[40px] bg-[#0A0F0C]/80 border border-white/5 backdrop-blur-3xl overflow-hidden group shadow-2xl">
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00FFA3]/5 blur-[100px] rounded-full group-hover:bg-[#00FFA3]/10 transition-all duration-700" />

            <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">
              <div className="space-y-8">
                <div className="flex flex-col gap-4">
                  <div className="text-[#00FFA3] text-[11px] font-bold uppercase tracking-[0.2em] leading-none">
                    Expertise Comercial • Performance Máxima
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white leading-tight">
                  Quem está por trás da <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00FFA3]">Energy Zapp</span>
                </h2>

                <div className="space-y-6 text-[#8892B0] text-lg font-light leading-relaxed">
                  <p>
                    A <span className="text-white font-medium">Energy Zapp</span> foi criada por especialistas em inteligência comercial, dedicada a fornecer infraestrutura de IA de alta performance para o crescimento de empresas.
                  </p>
                  <p>
                    Nosso time acumula <span className="text-[#00FFA3] font-medium">mais de 15 anos de experiência real em operações de vendas</span>, estruturando funis comerciais, processos de qualificação e estratégias de conversão para empresas de diferentes setores.
                  </p>
                </div>

                <div className="flex flex-col gap-4 py-8 border-y border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FFA3]/40" />
                    <p className="text-white/80 italic font-light">"A maioria das ferramentas automatiza respostas."</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FFA3] shadow-[0_0_10px_#00FFA3]" />
                    <p className="text-white font-medium">"Poucas sabem conduzir uma venda."</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="space-y-8">
                  <p className="text-xl text-white/90 font-light leading-relaxed">
                    A Energy Zapp nasce exatamente dessa visão: unimos <span className="text-[#00FFA3] font-medium">experiência comercial real</span> com <span className="text-white font-medium">inteligência artificial</span> para criar uma infraestrutura capaz de transformar conversas em receita.
                  </p>

                  <div className="bg-black/20 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
                    <p className="text-[#8892B0] text-sm uppercase tracking-widest font-bold mb-4">Nosso objetivo é simples:</p>
                    <p className="text-2xl md:text-3xl text-white font-medium tracking-tight">
                      Transformar o WhatsApp de um canal de atendimento em uma <span className="text-[#00FFA3]">máquina de vendas.</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-6 pt-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0C1722] bg-[#1a2b3b] flex items-center justify-center">
                          <User className="w-5 h-5 text-[#8892B0]" />
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-[#8892B0]">
                      <span className="text-white font-bold">+15 anos</span> de expertise em <br />operações comerciais reais.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CARTA FINAL / FOOTER --- */}
        <TestimonialsSection />
        <PricingSection onCheckout={openCheckout} />

        {/* --- FAQ SECTION --- */}
        <section className="py-32 relative z-10 w-full max-w-[900px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tighter">Perguntas Frequentes.</h2>
            <p className="text-[#8892B0] text-xl font-light">Tudo o que você precisa saber sobre a Energy Zapp.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "A Energy Zapp é um chatbot comum de menus?",
                a: "Não. Diferente de chatbots que usam menus engessados (digite 1 para X), a Energy Zapp usa Inteligência Artificial Generativa treinada com expertise comercial para entender o que o lead diz, responder naturalmente e conduzir a venda."
              },
              {
                q: "Preciso deixar meu celular ou computador ligado 24h?",
                a: "Não. Nossa infraestrutura funciona 100% na nuvem. Uma vez configurada, a IA responde seus leads instantaneamente, 24 horas por dia, 7 dias por semana, mesmo que você esteja offline."
              },
              {
                q: "Posso utilizar meu número atual do WhatsApp?",
                a: "Sim, você pode conectar seu número de WhatsApp Business ou pessoal atual via QR Code, de forma simples e rápida, sem perder suas conversas existentes."
              },
              {
                q: "Como a IA aprende sobre os meus produtos e preços?",
                a: "Você fornece as instruções, materiais de apoio e informações sobre seus produtos no painel. Nossa IA processa esses dados e utiliza nossa base de 15 anos de experiência comercial para aplicar as melhores técnicas de fechamento ao seu negócio."
              },
              {
                q: "A IA consegue identificar quando um lead está pronto para comprar?",
                a: "Sim. Ela é treinada para qualificar leads em tempo real, identificar sinais de compra e objeções, agindo de forma proativa para levar a conversa até o fechamento ou agendamento."
              },
              {
                q: "Existe algum período de fidelidade nos planos?",
                a: "No plano mensal, não há fidelidade. No plano anual, você garante um desconto agressivo (mais de 60%) em troca do compromisso de 12 meses."
              },
              {
                q: "A IA envia áudios ou apenas mensagens de texto?",
                a: "Nos planos avançados, oferecemos tecnologia de áudio generativo, onde a IA pode converter as respostas em áudios naturais, aumentando a personalização e a confiança do lead na negociação."
              },
              {
                q: "Consigo integrar com meu CRM ou outras ferramentas?",
                a: "Sim. A Energy Zapp possui integrações e Webhooks que permitem enviar os dados dos leads qualificados e vendas realizadas diretamente para o seu CRM ou outras ferramentas de automação."
              }
            ].map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </section>

        {/* --- CARTA FINAL / FOOTER --- */}
        <footer className="w-full relative py-32 mt-10 border-t border-white/[0.02] bg-[#071018] overflow-hidden">
          {/* Glow de Footer */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00FFA3]/10 blur-[150px] pointer-events-none" />

          <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10 flex flex-col items-center">

            <h2 className="text-5xl md:text-[5rem] font-medium tracking-tighter text-white mb-8 leading-[1.1]">
              Ficou alguma dúvida? <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00FFA3]">Entre em contato conosco.</span>
            </h2>

            <p className="text-xl text-[#8892B0] font-light mb-16 max-w-2xl text-balance">
              Nossa equipe de especialistas está pronta para ajudar você a transformar seu atendimento em uma verdadeira máquina de vendas com IA.
            </p>

            <button
              aria-label="Falar com um especialista via WhatsApp"
              className="h-16 px-10 rounded-full bg-[#00FFA3] text-black font-semibold text-lg hover:scale-[1.03] transition-all flex items-center gap-3 shadow-[0_0_40px_rgba(0,255,163,0.3)] mb-32"
            >
              Falar com um Especialista
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="flex flex-col md:flex-row items-center justify-between w-full pt-8 border-t border-white/[0.05] text-[#8892B0]/50 text-sm">
              <span>© {new Date().getFullYear()} Energy Zapp. Todos os direitos reservados.</span>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visitar nosso Twitter" className="hover:text-white transition-colors">Twitter</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visitar nosso LinkedIn" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="/termos" aria-label="Ler nossos termos de uso" className="hover:text-white transition-colors">Termos</a>
              </div>
            </div>

          </div>
        </footer>

        {/* --- PREMIUM CHECKOUT OVERLAY --- */}
        {checkoutOpen && checkoutPlan && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto bg-black/60 backdrop-blur-md">
            {/* Backdrop Blur */}
            <div
              className="absolute inset-0 transition-opacity"
              onClick={() => setCheckoutOpen(false)}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-5xl bg-[#121212] border border-white/5 rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300 my-auto">

              {/* Promo Top Bar */}
              <div className="bg-[#00FFA3] py-2 px-4 flex items-center justify-center overflow-hidden">
                <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
                  <span className="text-[10px] md:text-xs text-black font-bold tracking-widest uppercase">
                    5% DE DESCONTO NO PIX • PAGAMENTO EM ATÉ 12X • INFRAESTRUTURA DE IA ATIVADA EM SEGUNDOS
                  </span>
                  <span className="text-[10px] md:text-xs text-black font-bold tracking-widest uppercase ml-12">
                    5% DE DESCONTO NO PIX • PAGAMENTO EM ATÉ 12X • INFRAESTRUTURA DE IA ATIVADA EM SEGUNDOS
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex flex-col md:flex-row min-h-[600px]">

                {/* Left Column: Product Summary */}
                <div className="w-full md:w-[45%] bg-[#0A0F0C] p-8 md:p-10 border-r border-white/5 flex flex-col">
                  <div className="mb-12 flex justify-center">
                    <Image
                      src="/Energyzapp.svg"
                      alt="Energy Zapp Logo"
                      width={80}
                      height={80}
                      className="w-20 h-20 object-contain"
                    />
                  </div>

                  {/* Hero Banner in Modal */}
                  <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-8 border border-white/10 group">
                    <Image
                      src="/images/checkout-banner.png"
                      fill
                      alt="Checkout Banner"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="text-[10px] text-[#00FFA3] font-bold uppercase tracking-widest mb-1 font-sans">Tecnologia Engine Mente</div>
                      <div className="text-white font-medium">Ativação Instantânea</div>
                    </div>
                  </div>

                  <div className="space-y-6 flex-grow">
                    <div>
                      <div className="text-[#8892B0] font-medium text-xs uppercase tracking-widest mb-2 font-sans">Plano Escolhido</div>
                      <div className="flex items-end gap-3">
                        <h2 className="text-3xl font-bold text-white leading-none">{checkoutPlan.name}</h2>
                        <span className="text-[#00FFA3] text-sm font-medium mb-1 font-sans">{checkoutPlan.isAnnual ? 'ANUAL' : 'MENSAL'}</span>
                      </div>
                    </div>

                    <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/[0.05]">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[#8892B0] text-sm">Valor total</span>
                        <div className="text-right">
                          <div className="text-white font-bold text-2xl">
                            {checkoutPlan.isAnnual ? `12x R$ ${checkoutPlan.price}` : `R$ ${checkoutPlan.totalPrice}`}
                          </div>
                          {checkoutPlan.isAnnual ? (
                            <div className="text-[10px] text-[#00FFA3] font-medium mt-1">Total de R$ {checkoutPlan.totalPrice}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className="pt-4 border-t border-white/[0.05] space-y-3">
                        {checkoutPlan.includes.slice(0, 4).map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-[13px] text-white/70 italic leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-[#00FFA3]" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 flex items-center gap-4 py-6 border-t border-white/5">
                    <ShieldCheck className="w-6 h-6 text-[#8892B0]" />
                    <div className="text-[11px] text-[#8892B0] leading-snug">
                      <span className="text-white font-medium">Ambiente 100% Seguro.</span><br />
                      Seus dados são criptografados de ponta a ponta e processados seguindo normas da LGPD.
                    </div>
                  </div>
                </div>

                {/* Right Column: Checkout Form */}
                <div className="w-full md:w-[55%] p-8 md:p-12 relative flex flex-col bg-[#121212]">

                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-10">
                      <div className="relative">
                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-[#00FFA3] rounded-full" />
                        <h3 className="text-2xl font-bold text-white tracking-tight">Finalizar</h3>
                      </div>
                    </div>

                    {/* Simplified Timer Visual */}
                    <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-xl border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Oferta expira em 44:25</span>
                    </div>
                  </div>

                  <div className="space-y-8 flex-grow">

                    {/* Step 1: Personal Data */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-[#ffffff10] border border-white/10 flex items-center justify-center text-white font-bold text-sm">1</div>
                        <span className="text-white/60 font-bold uppercase text-[10px] tracking-widest">Dados Pessoais</span>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        <div className="group relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8892B0] group-focus-within:text-[#00FFA3] duration-300 transition-colors" />
                          <input
                            type="text"
                            placeholder="Nome completo"
                            className="w-full h-14 bg-white/[0.02] border border-white/10 rounded-2xl px-12 text-sm text-white outline-none focus:border-[#00FFA3]/40 focus:bg-[#00FFA3]/[0.02] transition-all duration-300"
                          />
                        </div>

                        <div className="group relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8892B0] group-focus-within:text-[#00FFA3] duration-300 transition-colors" />
                          <input
                            type="email"
                            placeholder="Seu melhor e-mail"
                            className="w-full h-14 bg-white/[0.02] border border-white/10 rounded-2xl px-12 text-sm text-white outline-none focus:border-[#00FFA3]/40 focus:bg-[#00FFA3]/[0.02] transition-all duration-300"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="group relative">
                            <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8892B0] group-focus-within:text-[#00FFA3] duration-300 transition-colors" />
                            <input
                              type="text"
                              placeholder="WhatsApp"
                              className="w-full h-14 bg-white/[0.02] border border-white/10 rounded-2xl px-12 text-sm text-white outline-none focus:border-[#00FFA3]/40 focus:bg-[#00FFA3]/[0.02] transition-all duration-300"
                            />
                          </div>
                          <div className="group relative">
                            <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8892B0] group-focus-within:text-[#00FFA3] duration-300 transition-colors" />
                            <input
                              type="text"
                              placeholder="CPF / CNPJ"
                              className="w-full h-14 bg-white/[0.02] border border-white/10 rounded-2xl px-12 text-sm text-white outline-none focus:border-[#00FFA3]/40 focus:bg-[#00FFA3]/[0.02] transition-all duration-300"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 2: Payment Selector */}
                    <div className="space-y-6 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-[#ffffff10] border border-white/10 flex items-center justify-center text-white font-bold text-sm">2</div>
                        <span className="text-white/60 font-bold uppercase text-[10px] tracking-widest font-sans">Método de Pagamento</span>
                      </div>

                      <div className="flex gap-4">
                        <button
                          onClick={() => setPaymentMethod('credit_card')}
                          className={`flex-1 h-20 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 ${paymentMethod === 'credit_card' ? 'bg-[#00FFA3]/10 border-[#00FFA3]/40 shadow-[0_0_30px_rgba(0,255,163,0.1)]' : 'bg-white/[0.02] border-white/10 grayscale opacity-60 hover:opacity-100 hover:grayscale-0'}`}
                        >
                          <CreditCard className={`w-6 h-6 ${paymentMethod === 'credit_card' ? 'text-[#00FFA3]' : 'text-white'}`} />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white">Cartão de Crédito</span>
                        </button>
                        <button
                          onClick={() => setPaymentMethod('pix')}
                          className={`flex-1 h-20 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 ${paymentMethod === 'pix' ? 'bg-[#00FFA3]/10 border-[#00FFA3]/40 shadow-[0_0_30px_rgba(0,255,163,0.1)]' : 'bg-white/[0.02] border-white/10 grayscale opacity-60 hover:opacity-100 hover:grayscale-0'}`}
                        >
                          <QrCode className={`w-6 h-6 ${paymentMethod === 'pix' ? 'text-[#00FFA3]' : 'text-white'}`} />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white">Pix (Instantâneo)</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-white/5 space-y-6">
                    <button className="w-full h-16 bg-[#00FFA3] hover:bg-[#00e695] text-black font-bold text-lg rounded-2xl shadow-[0_0_40px_rgba(0,255,163,0.3)] hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3">
                      <Lock className="w-5 h-5" />
                      CONCLUIR MINHA ATIVAÇÃO
                    </button>

                    <div className="flex items-center justify-center gap-8 opacity-40 hover:opacity-100 transition-opacity duration-500">
                      <ShieldCheck className="w-5 h-5 text-white" />
                      <Lock className="w-5 h-5 text-white" />
                      <CreditCard className="w-5 h-5 text-white" />
                      <Smartphone className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Close Button Inside Modal */}
                  <button
                    onClick={() => setCheckoutOpen(false)}
                    aria-label="Fechar checkout"
                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/50"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- LOGIN MODAL --- */}
        <AnimatePresence>
          {loginOpen && (
            <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
              {/* Backdrop for closing */}
              <div
                className="absolute inset-0"
                onClick={() => setLoginOpen(false)}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-md bg-[#0A0F0C] border border-white/10 rounded-[32px] p-8 shadow-[0_0_50px_rgba(0,255,163,0.1)] overflow-hidden"
              >
                {/* Background Logo Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none scale-150">
                  <Image
                    src="/Energyzapp.svg"
                    alt=""
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col items-center mb-8 relative z-10">
                  <div className="flex flex-col items-center justify-center py-6">
                    <Image
                      src="/Energyzapp.svg"
                      alt="Energy Zapp Logo"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setLoginOpen(false)}
                    aria-label="Fechar modal de login"
                    className="absolute -top-4 -right-4 w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center text-[#8892B0] transition-colors"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>

                <form onSubmit={handleLogin} className="space-y-5 relative z-10">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#8892B0] ml-1">Email corporativo</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8892B0]" />
                      <input
                        type="email"
                        required
                        placeholder="Teste@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 bg-white/[0.03] border border-white/10 rounded-2xl pl-11 pr-4 text-white text-sm outline-none focus:border-[#00FFA3]/50 focus:bg-[#00FFA3]/5 transition-all placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoggingIn}
                    className="w-full h-14 bg-[#00FFA3] text-black font-bold rounded-2xl hover:bg-[#00e695] transition-all flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(0,255,163,0.2)] disabled:opacity-50 disabled:cursor-not-allowed group mt-8"
                  >
                    {isLoggingIn ? (
                      <div className="w-6 h-6 border-[3px] border-black/20 border-t-black rounded-full animate-spin" />
                    ) : (
                      <>
                        Entrar na Plataforma
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
        }
      `}</style>
      </main>
    </>
  );
}
