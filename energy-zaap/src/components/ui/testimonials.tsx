"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "Head of Growth",
    company: "TechNexus B2B",
    content: "A Energy Zapp mudou o jogo para nossa operação. Antes perdíamos quase metade das leads em fluxos de chatbot.",
    rating: 5,
    video: "/videos/testimonial-1.mp4" // Exemplo de suporte a vídeo
  },
  {
    name: "Camila Ortiz",
    role: "Diretora Comercial",
    company: "Scale Up Solutions",
    content: "Agora conseguimos entender exatamente como a IA conduziu a conversa e avançou a negociação.",
    rating: 5,
    video: "/videos/testimonial-2.mp4" // Adicione o caminho do vídeo aqui
  },
  {
    name: "Felipe Andrade",
    role: "Founder",
    company: "Nexya.ai",
    content: "O volume de atendimento virou algo surreal. O que antes exigia vários atendentes agora roda automaticamente.",
    rating: 5,
    video: "/videos/testimonial-3.webm"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#F8FAFC]">
      {/* Top Blur Transition (Dark to Light) - Seamless Overlap */}
      <div className="absolute -top-px inset-x-0 h-64 bg-gradient-to-b from-[#071018] via-[#071018]/40 to-transparent z-30 pointer-events-none" />
      <div className="absolute -top-px inset-x-0 h-64 backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,black_20%,transparent)] z-20 pointer-events-none" />

      {/* Subtle Glow Back */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00FFA3]/10 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-[#00FFA3]/30 bg-[#00FFA3]/10 text-[#00b372] text-xs font-bold uppercase tracking-widest mb-4">
             <Star className="w-3 h-3 fill-[#00b372]" /> Prova Social
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#071018]">
            Resultados que falam por <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#071018] to-[#64748B]">si mesmos.</span>
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="break-inside-avoid relative overflow-hidden bg-white border border-slate-200 rounded-[40px] p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-[#00FFA3] hover:shadow-[0_20px_40px_-15px_rgba(0,255,163,0.15)] flex flex-col group"
            >
              {testi.video && (
                <div className="relative mb-6 aspect-[9/16] w-full rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 group/video shadow-sm">
                  <video 
                    src={testi.video} 
                    className="w-full h-full object-cover"
                    controls
                    muted
                    loop
                    playsInline
                  />
                  {!testi.video.includes('#') && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent flex items-end p-6 pointer-events-none group-hover/video:opacity-0 transition-opacity">
                      <div className="flex items-center gap-3 text-white text-xs uppercase tracking-[0.2em] font-bold">
                        <div className="w-2 h-2 rounded-full bg-[#00FFA3] shadow-[0_0_10px_#00FFA3]" />
                        Depoimento em Vídeo
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex gap-1 mb-6">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#00b372] fill-[#00b372]" />
                ))}
              </div>
              
              <p className="text-[#334155] text-lg leading-relaxed mb-8 italic">
                "{testi.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-[#00FFA3]/10 border border-[#00FFA3]/20 flex items-center justify-center font-bold text-[#00b372] text-base shrink-0">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-[#071018] font-semibold text-base">{testi.name}</h4>
                  <p className="text-[#64748B] text-sm">{testi.role}, <span className="text-[#00b372] font-medium">{testi.company}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      
      {/* Bottom Blur Transition (Light to Dark) - Seamless Overlap */}
      <div className="absolute -bottom-px inset-x-0 h-64 bg-gradient-to-t from-[#071018] via-[#071018]/40 to-transparent z-30 pointer-events-none" />
      <div className="absolute -bottom-px inset-x-0 h-64 backdrop-blur-3xl [mask-image:linear-gradient(to_top,black_20%,transparent)] z-20 pointer-events-none" />
    </section>
  );
}
