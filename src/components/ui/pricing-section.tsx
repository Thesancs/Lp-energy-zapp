"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Zap, Check } from "lucide-react";

const plans = [
  {
    name: "Sales Starter",
    description: "Infraestrutura inicial para automatizar atendimento e qualificação de leads.",
    price: 147.00,
    yearlyPrice: 57.70,
    isContact: false,
    buttonText: "Assinar Starter",
    buttonVariant: "outline" as const,
    includes: [
      "Agente Comercial Base",
      "Interpretação de Intenção",
      "Qualificação Automática",
      "Até 250 conversas/mês",
      "Agendamento Automático"
    ],
  },
  {
    name: "Sales Engine",
    description: "IA projetada para conduzir conversas e avançar negociações.",
    price: 547.00,
    yearlyPrice: 279.00,
    isContact: false,
    buttonText: "Assinar Engine",
    buttonVariant: "default" as const,
    popular: true,
    includes: [
      "Tudo no Starter, mais:",
      "Condução Estratégica de Vendas",
      "Follow-ups Inteligentes",
      "Recuperação Automática de Leads",
      "Dashboards de Conversão",
      "Até 500 conversas/mês"
    ],
  },
  {
    name: "Auto Closer",
    description: "Transforme o WhatsApp em um canal de vendas totalmente automatizado.",
    price: 1100.00,
    yearlyPrice: 497.00,
    isContact: false,
    buttonText: "Assinar Auto Closer",
    buttonVariant: "outline" as const,
    includes: [
      "Tudo no Engine, mais:",
      "Quebra Automática de Objeções",
      "Apresentação Dinâmica de Ofertas",
      "Áudio Generativo para Negociação",
      "Fine-tuning da IA Customizado",
      "1.000 conversas"
    ],
  },
  {
    name: "Enterprise",
    description: "Infraestrutura dedicada para operações comerciais de grande escala.",
    price: 0,
    yearlyPrice: 0,
    isContact: true,
    buttonText: "Falar com Especialista",
    buttonVariant: "outline" as const,
    includes: [
      "Servidor Dedicado",
      "Treinamento Customizado",
      "Engenharia de Prompt Especializada",
      "Integrações Avançadas",
      "Suporte Prioritário",
      "SLA comercial"
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("1"); // Default to Yearly as requested historically

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center mb-0">
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-black/40 border border-white/10 p-1 backdrop-blur-md">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10 rounded-full sm:px-6 px-4 sm:py-2 py-1 font-medium transition-colors text-sm",
            selected === "0" ? "text-black font-bold" : "text-[#8892B0] hover:text-white",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switchPricing"}
              className="absolute top-0 left-0 h-10 w-full rounded-full bg-gradient-to-t from-[#00b372] to-[#00FFA3] shadow-[0_0_20px_rgba(0,255,163,0.4)]"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Mensal</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-4 sm:py-2 py-1 font-medium transition-colors text-sm",
            selected === "1" ? "text-black font-bold" : "text-[#8892B0] hover:text-white",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switchPricing"}
              className="absolute top-0 left-0 h-10 w-full rounded-full bg-gradient-to-t from-[#00b372] to-[#00FFA3] shadow-[0_0_20px_rgba(0,255,163,0.4)]"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">Anual</span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection({ onCheckout }: { onCheckout: (name: string, price: string, totalPrice: string, isAnnual: boolean, includes: string[]) => void }) {
  const [isYearly, setIsYearly] = useState(true);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 30,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(parseInt(value) === 1);

  return (
    <div
      id="pricing-plans"
      className="py-32 relative bg-[#071018] overflow-hidden"
      ref={pricingRef}
    >
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0 h-[600px] w-full overflow-hidden [mask-image:radial-gradient(ellipse_80%_100%_at_50%_0%,white,transparent)] "
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a0a_1px,transparent_1px)] bg-[size:70px_80px]"></div>
        <Sparkles
          density={1200}
          direction="bottom"
          speed={0.5}
          color="#00FFA3"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)] opacity-50"
        />
      </TimelineContent>

      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute left-0 top-[-200px] w-full h-[100vh] flex flex-col items-center justify-start flex-none flex-nowrap overflow-hidden z-0 pointer-events-none"
      >
        <div className="relative w-full flex justify-center">
          <div
            className="absolute top-0 h-[800px] w-[1200px] flex-none rounded-full"
            style={{
              border: "1px solid rgba(0,255,163,0.2)",
              backgroundColor: "rgba(0,255,163,0.02)",
              filter: "blur(100px)",
              WebkitFilter: "blur(100px)",
            }}
          ></div>
        </div>
      </TimelineContent>

      <article className="text-center mb-10 pt-16 max-w-3xl mx-auto space-y-4 relative z-50 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center "
            wordLevelClassName="pb-2"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            Invista na automação que gera vendas.
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-lg text-[#8892B0] font-light max-w-2xl mx-auto"
        >
          Selecione o plano ideal de acordo com o tamanho da sua operação. Desative quando não precisar. Cancele a qualquer momento.
        </TimelineContent>

        <div className="mt-8">
          <TimelineContent
            as="div"
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <PricingSwitch onSwitch={togglePricingPeriod} />
          </TimelineContent>
        </div>
      </article>

      <div
        className="absolute top-64 left-[10%] right-[10%] w-[80%] h-full z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(0, 255, 163, 0.15) 0%, transparent 60%)`,
          mixBlendMode: "screen",
        }}
      />

      <div className="grid lg:grid-cols-4 max-w-7xl gap-6 md:gap-8 px-6 mx-auto relative z-20">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="h-full flex"
          >
            <Card
              className={`relative flex flex-col w-full text-white ${plan.popular
                ? "shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_0_80px_rgba(0,255,163,0.2)] border-[#00FFA3]/50 z-20 ring-1 ring-[#00FFA3]/20"
                : "z-10"
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                  <div className="bg-[#c1ff72] text-black text-[11px] font-extrabold uppercase tracking-widest py-1.5 px-6 rounded-full shadow-[0_0_20px_rgba(193,255,114,0.5)]">
                    MAIS ESCOLHIDO
                  </div>
                </div>
              )}

              <CardHeader className="text-left flex-none">
                <h3 className="text-2xl font-medium mb-4">{plan.name}</h3>
                <div className="flex flex-col mb-4">
                  {plan.isContact ? (
                    <div className="flex items-baseline mb-1">
                      <span className="text-4xl font-bold tracking-tighter">Sob Consulta</span>
                    </div>
                  ) : (
                    <div className="flex items-baseline mb-1">
                      {isYearly && !plan.isContact && (
                        <span className="text-xl font-bold text-[#00FFA3] mr-2">12x</span>
                      )}
                      <span className="text-lg font-medium text-[#8892B0] mr-1">R$</span>
                      <span className="text-5xl font-bold tracking-tighter">
                        <NumberFlow
                          format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
                          value={isYearly ? plan.yearlyPrice : plan.price}
                        />
                      </span>
                      {!isYearly && <span className="text-[#8892B0] ml-2 text-sm">/mês</span>}
                    </div>
                  )}

                  {isYearly && !plan.isContact ? (
                    <div className="text-xs text-[#00FFA3] font-medium h-4">
                      Economize R$ {((plan.price * 12) - (plan.yearlyPrice * 12)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} por ano
                    </div>
                  ) : plan.isContact ? (
                    <div className="text-xs text-[#00FFA3] font-medium h-4">
                      SLA Comercial & Suporte Dedicado
                    </div>
                  ) : (
                    <div className="text-xs text-transparent h-4">Espaço</div>
                  )}

                </div>
                <p className="text-sm text-[#8892B0] leading-relaxed">{plan.description}</p>
              </CardHeader>

              <CardContent className="flex flex-col flex-1">
                <button
                  onClick={() => onCheckout(plan.name,
                    isYearly ? plan.yearlyPrice.toFixed(2) : plan.price.toFixed(2),
                    isYearly ? (plan.yearlyPrice * 12).toFixed(2) : plan.price.toFixed(2),
                    isYearly,
                    plan.includes
                  )}
                  className={`w-full mb-8 py-4 text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${plan.popular
                    ? "bg-[#00FFA3] hover:bg-[#00e695] text-black shadow-[0_0_30px_rgba(0,255,163,0.25)]"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                    }`}
                >
                  <Zap className="w-4 h-4" /> {plan.buttonText}
                </button>

                <div className="space-y-4 pt-4 border-t border-white/5 flex-1">
                  <ul className="space-y-3">
                    {plan.includes.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-0.5 rounded-full bg-[#00FFA3]/10 p-1 shrink-0">
                          <Check className="w-3 h-3 text-[#00FFA3]" />
                        </div>
                        <span className="text-sm text-gray-300 leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
