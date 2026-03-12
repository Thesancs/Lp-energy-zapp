"use client";
import { TestimonialsColumn } from "./testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Parei de perder venda no final de semana. A IA atende todo mundo na hora e já deixa o agendamento pronto.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Ricardo Mendes",
    role: "Neo Outlet",
  },
  {
    text: "O pessoal achou que eu tinha contratado 5 vendedores novos. Ela responde tão rápido que o cliente nem percebe que é robô.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Bruno Sales",
    role: "Studio Alpha",
  },
  {
    text: "Finalmente um sistema que não trava. Coloquei pra rodar e em dois dias já tinha fechado três contratos no automático.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Mariana Costa",
    role: "Lumni Joias",
  },
  {
    text: "O que eu mais gostei foi a facilidade. Não sou do TI e consegui configurar tudo sozinha em menos de uma hora.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Ana Silveira",
    role: "Espaço Vida",
  },
  {
    text: "Eu usava outros bots, mas eram muito robóticos. Essa IA da Energy parece que está lendo a mente do cliente.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Zainab Garcia",
    role: "Tech Sinergy",
  },
  {
    text: "Minha taxa de conversão dobrou. Antes as leads chegavam e esfriavam no WhatsApp, agora o fechamento é imediato.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Aline Khan",
    role: "Boutique Prime",
  },
  {
    text: "O suporte dos caras é nota 10. Precisei de uma mão na integração e resolveram em minutos.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Fabio Diniz",
    role: "Diniz Imobiliária",
  },
  {
    text: "Agora eu durmo tranquila sabendo que tem alguém vendendo pra mim 24 horas por dia.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Sonia Santos",
    role: "Santos Consultoria",
  },
  {
    text: "O investimento se pagou na primeira semana. É a melhor ferramenta que já usei pro meu WhatsApp comercial.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Helder Lima",
    role: "Garage VIP",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Seamless Transition Overlays (White Theme) */}
      <div className="absolute -top-px inset-x-0 h-48 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />
      <div className="absolute -bottom-px inset-x-0 h-48 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

      {/* Subtle Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00FFA3]/10 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00FFA3]/20 bg-[#00FFA3]/5 text-[#00FFA3] text-xs font-bold uppercase tracking-widest mb-6">
            Depoimentos
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-6">
            O que nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-[#00CC82]">usuários dizem</span>
          </h2>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            Veja como a Energy Zapp está transformando a operação comercial de centenas de empresas.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
      </div>
    </section>
  );
}
