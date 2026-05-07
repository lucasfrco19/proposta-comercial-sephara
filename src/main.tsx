import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  Cloud,
  Fingerprint,
  GraduationCap,
  Layers3,
  LockKeyhole,
  Network,
  Printer,
  Router,
  ShieldCheck,
  TicketCheck,
  Utensils,
  WifiOff,
  Zap,
} from "lucide-react";
import { Button } from "./components/ui/button";
import logo from "./assets/logo-transparent.png";
import dashboardAdminNeutral from "./assets/dashboard-admin-neutral.png";
import sceneDashboardOffice from "./assets/scene-dashboard-office-realistic.png";
import sceneInstallation from "./assets/scene-installation-realistic.png";
import sceneLocalHub from "./assets/scene-local-hub-realistic.png";
import sceneMealServe from "./assets/scene-meal-serve-realistic.png";
import sceneTabletOps from "./assets/scene-tablet-ops-realistic.png";
import systemInSchool from "./assets/system-in-school.png";
import municipalOperationsNeutral from "./assets/municipal-operations-neutral.png";
import studentsEqualMeals from "./assets/students-equal-meals.png";
import "./index.css";

const proposalHighlights = [
  { value: "2", label: "Unidades escolares na implantação inicial" },
  { value: "0", label: "Dependência da internet escolar" },
  { value: "1", label: "Base central de gestão e auditoria" },
  { value: "24/7", label: "Backup VPS e sincronização automática" },
];

const workflow = [
  {
    icon: Fingerprint,
    title: "Identificação segura",
    text: "O aluno é identificado por biometria no terminal da escola, com validação local e registro individualizado da retirada.",
  },
  {
    icon: TicketCheck,
    title: "Controle da retirada",
    text: "Antes de liberar a merenda, o sistema verifica se já existe retirada no dia e reduz ocorrências de duplicidade.",
  },
  {
    icon: Printer,
    title: "Comprovante operacional",
    text: "Quando a retirada é autorizada, o ticket é impresso e o atendimento fica disponível para consulta posterior.",
  },
  {
    icon: Cloud,
    title: "Base administrativa",
    text: "Os dados são sincronizados com o servidor central, formando um histórico confiável para escola e gestão municipal.",
  },
];

const equipment = [
  "Servidor local dedicado (mini PC)",
  "Leitor biométrico profissional",
  "Impressora térmica de ticket",
  "Modem 4G exclusivo do sistema",
  "Nobreak de proteção elétrica",
  "Licenciamento do software",
  "Instalação completa",
  "Treinamento operacional",
];

const dashboardItems = [
  "Consulta de alunos atendidos no dia",
  "Consulta de alunos não atendidos",
  "Relatórios diários por unidade",
  "Acompanhamento de consumo por turma",
  "Consolidação por escola",
  "Histórico mensal para análise",
  "Exportação de relatórios para prestação de contas",
];

const schoolBenefits = [
  "Rotina de distribuição mais organizada",
  "Registro confiável da retirada por aluno",
  "Redução de desperdício alimentar",
  "Diminuição de retiradas duplicadas",
  "Histórico automático de consumo",
  "Menor dependência de planilhas e controles manuais",
];

const cityBenefits = [
  "Visão consolidada da distribuição alimentar",
  "Indicadores por unidade escolar",
  "Planejamento de compras com base em consumo real",
  "Auditoria digital da operação",
  "Maior transparência administrativa",
  "Melhor governança dos recursos destinados à alimentação escolar",
];

const governanceItems = [
  "Registro individualizado da retirada",
  "Histórico consultável por escola e período",
  "Redundância entre base local e servidor remoto",
  "Acesso administrativo para acompanhamento da Secretaria",
  "Base preparada para conferência, auditoria e prestação de contas",
  "Operação desenhada para reduzir falhas manuais",
];

const expansionItems = [
  "Controle de presença escolar biométrico",
  "Controle de entrada e saída",
  "Controle de transporte escolar",
  "Controle de biblioteca",
  "Cartão digital do aluno municipal",
  "Integração com a Secretaria de Educação",
];

const implementationSteps = [
  "Instalação dos equipamentos nas unidades escolares",
  "Configuração do servidor local, modem 4G e VPS",
  "Cadastro inicial e validação dos alunos",
  "Treinamento da equipe operacional",
  "Ativação do painel administrativo",
  "Monitoramento inicial da rotina de merenda",
];

const architectureNodes = [
  {
    icon: Fingerprint,
    label: "Biometria",
    text: "Identificação individual do aluno no momento da retirada.",
  },
  {
    icon: Printer,
    label: "Ticket",
    text: "Comprovante impresso para organização da operação.",
  },
  {
    icon: WifiOff,
    label: "Offline",
    text: "Terminal local segue ativo mesmo sem internet escolar.",
  },
  {
    icon: Cloud,
    label: "VPS",
    text: "Backup remoto e sincronização automática dos registros.",
  },
];

const heroMediaFrames = [sceneMealServe, studentsEqualMeals, sceneTabletOps, sceneInstallation];
const solutionMediaFrames = [sceneMealServe, sceneTabletOps, sceneLocalHub];
const glowBridgeVideoUrl =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7.mp4";

const clientFeedbacks = [
  {
    id: 12,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    segment: "Serviços B2B",
    testimonial:
      "A Sephara organizou nossa captação comercial, automatizou follow-ups e nos deu uma visão de pipeline que antes dependia de conferência manual.",
    author: "Diretoria Comercial",
    role: "Operação de serviços",
  },
  {
    id: 32,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    segment: "Saúde privada",
    testimonial:
      "O atendimento ficou mais rápido e mais consistente. A equipe passou a receber clientes com contexto, histórico e próximos passos definidos.",
    author: "Sócia-Operadora",
    role: "Clínica particular",
  },
  {
    id: 47,
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    segment: "Mercado imobiliário",
    testimonial:
      "Conectamos CRM, financeiro e indicadores em um painel simples. Foi a primeira vez que a gestão conseguiu enxergar a operação em tempo real.",
    author: "Gestor de Expansão",
    role: "Rede imobiliária",
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Navbar() {
  const items = [
    { label: "Solução", id: "solucao", dropdown: true },
    { label: "Operação", id: "operacao" },
    { label: "Investimento", id: "investimento" },
    { label: "Expansão", id: "expansao", dropdown: true },
  ];

  return (
    <header className="relative z-20">
      <nav className="flex w-full items-center justify-between px-8 py-5">
        <button
          className="flex items-center"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Sephara IA"
        >
          <img className="h-12 w-auto md:h-14" src={logo} alt="Sephara IA" />
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-1 text-base text-foreground/90 transition hover:text-foreground"
            >
              {item.label}
              {item.dropdown && <ChevronDown className="h-4 w-4" />}
            </button>
          ))}
        </div>

        <Button
          variant="heroSecondary"
          size="sm"
          className="rounded-full px-4 py-2 text-sm"
          onClick={() => scrollToSection("investimento")}
        >
          Ver proposta
        </Button>
      </nav>
      <div className="mt-[3px] h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[560px] overflow-hidden bg-background md:min-h-screen">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,hsl(var(--primary)/0.22),transparent_34rem)]" />
      <Navbar />

      <div className="relative z-10 flex flex-col items-center px-4 pt-16 text-center md:pt-20">
        <motion.p
          className="liquid-glass rounded-full px-5 py-2 text-sm font-medium text-foreground/80"
          initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          Sephara IA | Proposta comercial para gestão municipal
        </motion.p>

        <motion.h1
          className="hero-gradient-text mt-4 font-display text-[clamp(88px,18vw,230px)] font-normal leading-[1.02] tracking-[-0.024em]"
          initial={{ opacity: 0, y: 44, filter: "blur(14px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          Sephara
        </motion.h1>

        <motion.p
          className="mt-4 max-w-md text-center text-lg leading-8 text-hero-sub opacity-80"
          initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
          animate={{ opacity: 0.8, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.65, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
        >
          Controle biométrico, operação offline e gestão em tempo real
          <br />
          para a distribuição da merenda escolar em Niterói
        </motion.p>

        <motion.div
          className="mb-[66px] mt-8"
          initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.65, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button
            variant="heroSecondary"
            className="px-[29px] py-[24px]"
            onClick={() => scrollToSection("investimento")}
          >
            Analisar proposta
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function LoopingVideoCard({
  images,
  className = "",
  overlayClassName = "",
}: {
  images: string[];
  className?: string;
  overlayClassName?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 2600);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [images]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-out ${
            activeIndex === index
              ? "scale-100 opacity-100"
              : "scale-[1.03] opacity-0"
          }`}
        />
      ))}
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}

function SocialProofSection() {
  return (
    <section className="light-canvas relative overflow-hidden pt-20 md:pt-28">
      <div className="light-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pb-20 md:pb-24">
        <BlurIn className="mx-auto max-w-5xl text-center">
          <div className="light-chip light-body inline-flex items-center gap-2 rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.24em]">
            <ShieldCheck className="h-3.5 w-3.5" />
            Protocolo de inovação municipal
          </div>
          <h2 className="light-heading mt-8 text-4xl font-bold leading-[1.12] text-[#181c1e] md:text-6xl">
            Inteligência operacional para
            <span className="block pb-2 md:pb-3 bg-gradient-to-r from-[#4f14a0] to-[#731be5] bg-clip-text text-transparent">
              segurança alimentar
            </span>
          </h2>
          <p className="light-body mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4a4453]">
            Uma proposta comercial para a rede municipal de Niterói, unindo
            biometria, operação offline, dados auditáveis e governança pública
            em uma solução clara, segura e pronta para a rotina escolar.
          </p>
        </BlurIn>

        <BlurIn delay={0.08} className="mt-14">
          <div className="light-glass rounded-[28px] border border-white/60 p-3 shadow-[0_30px_80px_rgba(79,20,160,0.12)]">
            <LoopingVideoCard
              images={heroMediaFrames}
              className="aspect-[16/9] rounded-[22px]"
              overlayClassName="bg-gradient-to-t from-[#f7fafd]/70 via-transparent to-white/15"
            />
          </div>
        </BlurIn>

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
          <BlurIn>
            <div className="light-body">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4f14a0]">
                Infraestrutura tecnológica
              </p>
              <h3 className="light-heading mt-5 text-4xl font-semibold leading-tight text-[#181c1e]">
                Eficiência do hardware à nuvem.
              </h3>
              <p className="mt-6 text-lg leading-8 text-[#4a4453]">
                A solução integra terminal biométrico, impressora, servidor
                local, modem dedicado e backup VPS em uma arquitetura pensada
                para continuidade operacional dentro da escola.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  {
                    icon: Fingerprint,
                    title: "Terminal biométrico local",
                    text: "Validação local, com resposta imediata para a equipe escolar.",
                  },
                  {
                    icon: Cloud,
                    title: "Servidor local e base central",
                    text: "Sincronização automática e histórico administrativo para escola e Secretaria.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Operação protegida",
                    text: "Redundância local, backup em VPS e continuidade mesmo em cenários de instabilidade.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="light-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="light-heading text-lg font-semibold text-[#181c1e]">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-[#4a4453]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </BlurIn>

          <BlurIn delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-4 sm:pt-12">
                <div className="light-panel overflow-hidden rounded-[28px]">
                  <img
                    src={systemInSchool}
                    alt="Uso do sistema Sephara IA dentro da escola"
                    className="h-56 w-full object-cover sm:h-[240px]"
                  />
                </div>
                <div className="light-panel overflow-hidden rounded-[28px]">
                  <img
                    src={sceneInstallation}
                    alt="Equipamentos da Sephara IA sendo preparados para instalação na escola"
                    className="h-64 w-full object-cover sm:h-[300px]"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="light-panel overflow-hidden rounded-[28px]">
                  <img
                    src={sceneTabletOps}
                    alt="Operação administrativa com tablet e equipamento biométrico da Sephara IA"
                    className="h-64 w-full object-cover sm:h-[300px]"
                  />
                </div>
                <div className="light-panel overflow-hidden rounded-[28px]">
                  <img
                    src={studentsEqualMeals}
                    alt="Estudantes da rede municipal com uniforme escolar"
                    className="h-56 w-full object-cover sm:h-[240px]"
                  />
                </div>
              </div>
            </div>
          </BlurIn>
        </div>
      </div>
    </section>
  );
}

function BelowHeroMotionSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return undefined;
    }

    let frameId = 0;
    let resetTimeout = 0;
    let restarting = false;

    const fadeWindow = 0.5;

    const animateOpacity = () => {
      const duration = Number.isFinite(video.duration) ? video.duration : 0;
      const currentTime = video.currentTime ?? 0;

      if (!duration || restarting) {
        frameId = window.requestAnimationFrame(animateOpacity);
        return;
      }

      let opacity = 1;

      if (currentTime < fadeWindow) {
        opacity = Math.max(0, Math.min(1, currentTime / fadeWindow));
      } else if (duration - currentTime < fadeWindow) {
        opacity = Math.max(0, Math.min(1, (duration - currentTime) / fadeWindow));
      }

      video.style.opacity = opacity.toString();
      frameId = window.requestAnimationFrame(animateOpacity);
    };

    const handleEnded = () => {
      restarting = true;
      video.style.opacity = "0";
      resetTimeout = window.setTimeout(() => {
        video.currentTime = 0;
        void video.play();
        restarting = false;
      }, 100);
    };

    video.style.opacity = "0";
    void video.play().catch(() => undefined);
    video.addEventListener("ended", handleEnded);
    frameId = window.requestAnimationFrame(animateOpacity);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(resetTimeout);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.18),transparent_42rem)]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />

      <div className="relative h-[340px] w-full overflow-hidden md:h-[470px]">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="sephara-video absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
        >
          <source src={glowBridgeVideoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/5 to-background/80" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0,transparent_48%,rgba(7,6,18,0.28)_100%)]" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#f7fafd]" />
    </section>
  );
}

function BlurIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
  intro,
  className = "",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  intro?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`relative overflow-hidden bg-background py-28 ${className}`}>
      <div className="section-grid pointer-events-none absolute inset-0 opacity-45" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <BlurIn className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-primary/80">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-medium leading-tight text-foreground md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {intro && (
            <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground/68">{intro}</p>
          )}
        </BlurIn>
        {children}
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <BlurIn className="h-full">
      <article className="liquid-glass flex h-full min-h-[260px] flex-col rounded-[24px] p-6">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-medium text-foreground">{title}</h3>
        <p className="mt-4 leading-7 text-foreground/70">{text}</p>
      </article>
    </BlurIn>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="light-body flex gap-3 text-[#4a4453]">
          <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProposalContent() {
  return (
    <div className="light-canvas relative flex flex-col pb-0">
      <div className="light-grid pointer-events-none absolute inset-0 opacity-70" />

      <section id="solucao" className="relative z-10 mx-auto max-w-[1200px] px-6 py-14 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <BlurIn>
            <span className="light-chip light-body inline-flex rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em]">
              Inovação pública
            </span>
            <h2 className="light-heading mt-6 text-4xl leading-[1.08] text-[#181c1e] sm:text-5xl md:text-6xl">
              Funcionamento <span className="text-[#4f14a0]">&amp;</span>
              <br />
              Objetivos
            </h2>
            <p className="light-body mt-6 max-w-xl text-lg leading-8 text-[#4a4453]">
              Uma arquitetura criada para registrar cada retirada, reduzir
              duplicidades, manter a operação ativa sem internet escolar e
              entregar dados confiáveis à gestão municipal.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="light-panel light-body rounded-full px-6 py-3 text-sm font-semibold text-[#181c1e] transition hover:border-[#4f14a0]/30">
                Baixar proposta
              </button>
              <button className="light-body flex items-center gap-2 px-1 py-3 text-sm font-semibold text-[#4f14a0]">
                Ver demonstração
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </BlurIn>

          <BlurIn delay={0.08}>
            <div className="light-panel relative overflow-hidden rounded-[28px] p-4">
              <LoopingVideoCard
                images={solutionMediaFrames}
                className="aspect-[16/10] rounded-[22px]"
                overlayClassName="bg-gradient-to-tr from-[#4f14a0]/10 via-white/12 to-[#d4bbff]/28"
              />
              <div className="light-glass absolute bottom-6 left-6 right-6 rounded-2xl px-5 py-4">
                <div className="light-body flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4f14a0]">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  Operação local com sincronização automática
                </div>
              </div>
            </div>
          </BlurIn>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 py-6">
        <div className="flex flex-col items-center text-center">
          <h3 className="light-heading text-4xl font-semibold text-[#181c1e]">
            Jornada de distribuição inteligente
          </h3>
          <div className="mt-4 h-1 w-20 rounded-full bg-[#4f14a0]" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {workflow.map((item, index) => {
            const Icon = item.icon;

            return (
              <BlurIn key={item.title} delay={index * 0.06}>
                <div className="light-panel h-full rounded-[28px] p-8 text-center transition duration-300 hover:-translate-y-1">
                  <div className="purple-gradient mx-auto flex h-20 w-20 items-center justify-center rounded-[22px] text-white shadow-[0_20px_40px_rgba(79,20,160,0.22)]">
                    <Icon className="h-9 w-9" />
                  </div>
                  <h4 className="light-heading mt-6 text-2xl font-medium text-[#181c1e]">
                    {item.title}
                  </h4>
                  <p className="light-body mt-4 text-sm leading-7 text-[#4a4453]">
                    {item.text}
                  </p>
                  <span className="light-body mt-5 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b7ab2]">
                    Passo 0{index + 1}
                  </span>
                </div>
              </BlurIn>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 py-10 md:py-14">
        <div className="light-glass overflow-hidden rounded-[36px] border border-white/70 p-8 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <BlurIn>
              <div className="light-body">
                <div className="flex items-center gap-3 text-[#4f14a0]">
                  <div className="light-chip flex h-11 w-11 items-center justify-center rounded-xl">
                    <WifiOff className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                    Continuidade operacional
                  </span>
                </div>

                <h3 className="light-heading mt-6 text-4xl font-semibold leading-tight text-[#181c1e] md:text-5xl">
                  Operação offline-first com conexão própria.
                </h3>
                <p className="mt-6 text-lg leading-8 text-[#4a4453]">
                  O sistema não depende da internet escolar para operar. O
                  terminal segue validando alunos, emitindo tickets e
                  registrando ocorrências localmente, enquanto o modem 4G
                  garante sincronização posterior com o VPS central.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Autonomia local",
                    "Redundância 4G + VPS",
                    "Continuidade operacional",
                  ].map((item) => (
                    <span
                      key={item}
                      className="light-panel light-body rounded-full px-4 py-2 text-sm text-[#4f14a0]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </BlurIn>

            <BlurIn delay={0.08}>
              <div className="light-panel overflow-hidden rounded-[28px] p-3">
                <img
                  src={systemInSchool}
                  alt="Terminal Sephara IA em uso dentro da escola"
                  className="h-72 w-full rounded-[22px] object-cover sm:h-[360px] lg:h-[420px]"
                />
              </div>
            </BlurIn>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 py-8 md:py-10">
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <BlurIn>
            <div className="light-body">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4f14a0]">
                Arquitetura técnica
              </p>
              <h3 className="light-heading mt-5 text-4xl font-semibold leading-tight text-[#181c1e]">
                Uma base local robusta conectada à gestão central.
              </h3>
              <p className="mt-6 text-lg leading-8 text-[#4a4453]">
                Cada escola recebe um terminal completo de operação. A gestão
                municipal passa a contar com histórico, backup, indicadores e
                relatórios para acompanhamento administrativo.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {architectureNodes.map((node) => {
                  const Icon = node.icon;
                  return (
                    <div
                      key={node.label}
                      className="light-panel flex h-full gap-4 rounded-[22px] p-5"
                    >
                      <div className="light-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="light-heading text-lg font-semibold text-[#181c1e]">
                          {node.label}
                        </h4>
                        <p className="light-body mt-1 text-sm leading-6 text-[#4a4453]">
                          {node.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </BlurIn>

          <BlurIn delay={0.08}>
            <div className="grid h-full gap-4 sm:grid-cols-2">
              <div className="grid gap-4">
                <div className="light-panel overflow-hidden rounded-[28px]">
                  <img
                    src={sceneLocalHub}
                    alt="Infraestrutura local do sistema Sephara IA instalada em ambiente escolar"
                    className="h-64 w-full object-cover sm:h-[320px] lg:h-full lg:min-h-[300px]"
                  />
                </div>
                <div className="light-panel flex min-h-[180px] flex-col justify-center rounded-[28px] p-6">
                  <p className="light-heading text-xl font-semibold text-[#181c1e]">
                    Núcleo local
                  </p>
                  <p className="light-body mt-3 text-sm leading-7 text-[#4a4453]">
                    Mini PC, biometria, impressora, modem 4G e nobreak em uma
                    configuração pronta para uso.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="light-panel flex min-h-[180px] flex-col justify-center rounded-[28px] p-6">
                  <p className="light-heading text-xl font-semibold text-[#181c1e]">
                    Camada central
                  </p>
                  <p className="light-body mt-3 text-sm leading-7 text-[#4a4453]">
                    VPS, backup, dashboard e relatórios consolidados para a
                    escola e a Secretaria Municipal.
                  </p>
                </div>
                <div className="light-panel overflow-hidden rounded-[28px]">
                  <img
                    src={sceneDashboardOffice}
                    alt="Ambiente administrativo com dashboard da Sephara IA para monitoramento da merenda"
                    className="h-64 w-full object-cover sm:h-[320px] lg:h-full lg:min-h-[300px]"
                  />
                </div>
              </div>
            </div>
          </BlurIn>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 py-10 md:py-14">
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.98fr_1.02fr]">
          <BlurIn>
            <div className="light-body">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4f14a0]">
                Painel administrativo
              </p>
              <h3 className="light-heading mt-5 text-4xl font-semibold leading-tight text-[#181c1e]">
                Painel claro para a direção escolar e leitura executiva para a
                Secretaria.
              </h3>
              <p className="mt-6 text-lg leading-8 text-[#4a4453]">
                A camada administrativa reúne consulta diária, indicadores por
                escola, histórico mensal e relatórios exportáveis, reduzindo a
                dependência de controles paralelos.
              </p>

              <div className="mt-8 grid gap-4">
                {dashboardItems.map((item, index) => (
                  <div
                    key={item}
                    className="group light-panel grid grid-cols-[48px_1fr] items-center gap-4 rounded-[24px] px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#4f14a0]/24 hover:bg-white"
                  >
                    <span className="light-chip flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-semibold shadow-[0_10px_24px_rgba(79,20,160,0.08)] transition duration-300 group-hover:bg-[#4f14a0] group-hover:text-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="light-heading text-base font-semibold leading-snug text-[#181c1e]">
                        {item}
                      </p>
                      <div className="mt-2 h-1 w-12 rounded-full bg-[#4f14a0]/12 transition duration-300 group-hover:w-20 group-hover:bg-[#4f14a0]/30" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BlurIn>

          <BlurIn delay={0.08} className="h-full">
            <div className="light-panel h-full overflow-hidden rounded-[30px] p-3">
              <img
                src={dashboardAdminNeutral}
                alt="Painel administrativo Sephara IA"
                className="h-80 w-full rounded-[24px] object-cover sm:h-[440px] lg:h-full lg:min-h-[720px]"
              />
            </div>
          </BlurIn>
        </div>
      </section>

      <section id="investimento" className="relative order-[20] z-10 mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <div className="text-center">
          <span className="light-chip light-body inline-flex rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em]">
            Modelos de contratação
          </span>
          <h3 className="light-heading mt-6 text-4xl font-bold text-[#4f14a0] sm:text-5xl md:text-6xl">
            Investimento &amp; Escalabilidade
          </h3>
          <p className="light-body mx-auto mt-6 max-w-3xl text-xl leading-9 text-[#4a4453]">
            Dois modelos de contratação para viabilizar a implantação inicial e
            manter a infraestrutura pronta para expansão na rede municipal.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
          <BlurIn>
            <div className="light-panel flex h-full flex-col rounded-[28px] border-t-[6px] border-t-slate-500 p-8 md:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="light-heading text-3xl font-semibold text-[#4f14a0]">
                    Modelo de Implantação
                  </h4>
                  <p className="light-body mt-2 text-[#4a4453]">
                    Infraestrutura dedicada, com equipamentos próprios e base
                    de dados sob controle da operação pública.
                  </p>
                </div>
                <Layers3 className="h-9 w-9 flex-none text-[#4f14a0]" />
              </div>

              <div className="mt-10">
                <p className="light-body text-xs font-semibold uppercase tracking-[0.22em] text-[#8b7ab2]">
                  Custo de implantação
                </p>
                <p className="light-heading mt-2 text-4xl font-bold text-[#181c1e] sm:text-5xl">
                  R$ 18.900
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  "Equipamentos, instalação e configuração",
                  "Licenciamento do software",
                  "Treinamento operacional inicial",
                  "Estrutura pronta para uso imediato",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="light-chip flex h-6 w-6 items-center justify-center rounded-full">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <p className="light-body text-[#181c1e]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-[22px] border border-[#4f14a0]/16 bg-white px-6 py-5">
                <p className="light-body text-sm uppercase tracking-[0.18em] text-[#8b7ab2]">
                  Operação mensal
                </p>
                <p className="light-heading mt-2 text-3xl font-semibold text-[#181c1e]">
                  R$ 700 / mês
                </p>
                <p className="light-body mt-3 text-sm leading-7 text-[#4a4453]">
                  Backup VPS, sincronização automática, dashboard, suporte
                  técnico remoto e manutenção preventiva.
                </p>
              </div>
            </div>
          </BlurIn>

          <BlurIn delay={0.08}>
            <div className="purple-gradient relative flex h-full flex-col overflow-hidden rounded-[28px] p-8 text-white md:p-10">
              <div className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
                Popular
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="light-heading text-3xl font-semibold text-white">
                    Modelo de Assinatura
                  </h4>
                  <p className="light-body mt-2 text-white/72">
                    Estrutura completa em comodato operacional, com suporte,
                    manutenção e evolução contínua.
                  </p>
                </div>
                <Cloud className="h-9 w-9 flex-none text-white" />
              </div>

              <div className="mt-10">
                <p className="light-body text-xs font-semibold uppercase tracking-[0.22em] text-white/56">
                  Mensalidade
                </p>
                <p className="light-heading mt-2 text-4xl font-bold text-white sm:text-5xl">
                  R$ 1.600
                  <span className="light-body ml-2 text-lg font-medium text-white/76">
                    / mês por unidade
                  </span>
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  "Equipamentos inclusos",
                  "Instalação e software",
                  "Backup, VPS e dashboard",
                  "Suporte técnico e manutenção preventiva",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/16">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <p className="light-body text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </BlurIn>
        </div>

      </section>

      <section id="expansao" className="relative order-[18] z-10 mx-auto max-w-[1200px] px-6 py-10 md:py-14">
        <BlurIn>
          <div className="light-glass rounded-[36px] p-4 md:p-6">
            <div className="grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
              <div className="light-panel overflow-hidden rounded-[28px] p-3">
                <img
                  src={municipalOperationsNeutral}
                  alt="Gestão municipal acompanhando dados da merenda com terminal biométrico e impressora"
                  className="h-80 w-full rounded-[22px] object-cover object-center sm:h-[420px] lg:h-full lg:min-h-[470px]"
                />
              </div>

              <div className="light-panel flex h-full flex-col rounded-[28px] p-6 light-body md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4f14a0]">
                  Plataforma escalável
                </p>
                <h4 className="light-heading mt-4 text-4xl font-semibold leading-tight text-[#4f14a0] md:text-5xl">
                  Tecnologia para controlar a rotina de hoje e preparar a rede
                  para novos serviços.
                </h4>
                <p className="mt-5 text-base leading-8 text-[#4a4453] md:text-lg md:leading-8">
                  A Sephara IA conecta escola, Secretaria, auditoria e
                  planejamento alimentar em uma infraestrutura preparada para
                  evoluir sem interromper os serviços ativos.
                </p>

                <div className="mt-auto grid gap-3 pt-7 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-[#4f14a0]/12 bg-[#4f14a0]/[0.04] p-5">
                    <p className="light-heading text-4xl font-semibold leading-none text-[#4f14a0]">
                      99,9%
                    </p>
                    <p className="light-body mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#8b7ab2]">
                      Operação estável
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#4a4453]">
                      Base local ativa com sincronização remota.
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-[#4f14a0]/12 bg-white/62 p-5">
                    <p className="light-heading text-4xl font-semibold leading-none text-[#4f14a0]">
                      VPS
                    </p>
                    <p className="light-body mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#8b7ab2]">
                      Backup seguro
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#4a4453]">
                      Redundância para relatórios e auditoria.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-4">
              {expansionItems.slice(0, 4).map((item, index) => (
                <div
                  key={item}
                  className="light-panel rounded-[24px] bg-white/72 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#4f14a0]/20"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="light-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl">
                      <Network className="h-5 w-5" />
                    </div>
                    <p className="light-body text-xs font-semibold uppercase tracking-[0.18em] text-[#8b7ab2]">
                      Fase {index + 2}
                    </p>
                  </div>
                  <h5 className="light-heading mt-5 text-lg font-semibold leading-snug text-[#181c1e]">
                    {item}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </BlurIn>
      </section>

      <section className="relative order-[19] z-10 mx-auto max-w-[1200px] px-6 py-10 md:py-14">
        <div className="light-glass overflow-hidden rounded-[36px] p-4 md:p-6 lg:p-8">
          <BlurIn>
            <div className="light-panel relative overflow-hidden rounded-[32px] p-3">
              <img
                src={studentsEqualMeals}
                alt="Estudantes da rede municipal com a mesma quantidade de merenda"
                className="h-[280px] w-full rounded-[24px] object-cover object-center sm:h-[360px] lg:h-[430px]"
              />
            </div>
          </BlurIn>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <BlurIn delay={0.04}>
              <div className="light-body">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4f14a0]">
                  Impacto institucional
                </p>
                <h3 className="light-heading mt-5 text-4xl font-semibold leading-tight text-[#181c1e] md:text-5xl">
                  Mais organização na escola e mais previsibilidade para a rede.
                </h3>
                <p className="mt-6 text-lg leading-8 text-[#4a4453]">
                  Ao registrar cada retirada, consolidar dados e manter a operação
                  ativa mesmo sem internet escolar, a solução melhora o
                  atendimento e fortalece a confiança administrativa.
                </p>
              </div>
            </BlurIn>

            <BlurIn delay={0.1}>
              <div className="grid gap-4">
                {[
                  {
                    title: "Redução de desperdício",
                    text: "O consumo registrado por unidade ajuda a gestão a planejar compras e distribuição com mais precisão.",
                  },
                  {
                    title: "Transparência administrativa",
                    text: "Relatórios e registros digitais apoiam fiscalização, prestação de contas e tomada de decisão.",
                  },
                  {
                    title: "Base para novos serviços",
                    text: "A mesma infraestrutura pode evoluir para presença biométrica, controle de acesso, biblioteca e transporte escolar.",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="light-panel rounded-[24px] bg-white/72 p-5">
                    <div className="flex items-start gap-4">
                      <div className="light-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                        {index === 0 ? (
                          <Utensils className="h-5 w-5" />
                        ) : index === 1 ? (
                          <ShieldCheck className="h-5 w-5" />
                        ) : (
                          <GraduationCap className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <h4 className="light-heading text-xl font-semibold text-[#181c1e]">
                          {item.title}
                        </h4>
                        <p className="light-body mt-2 leading-7 text-[#4a4453]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </BlurIn>
          </div>

          <BlurIn delay={0.12} className="mt-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="light-panel rounded-[28px] bg-white/76 p-6 md:p-7">
                <h4 className="light-heading text-2xl font-semibold text-[#181c1e]">
                  Benefícios para a escola
                </h4>
                <div className="mt-5">
                  <CheckList items={schoolBenefits} />
                </div>
              </div>
              <div className="light-panel rounded-[28px] bg-white/76 p-6 md:p-7">
                <h4 className="light-heading text-2xl font-semibold text-[#181c1e]">
                  Benefícios para a Secretaria
                </h4>
                <div className="mt-5">
                  <CheckList items={cityBenefits} />
                </div>
              </div>
            </div>
          </BlurIn>
        </div>
      </section>
    </div>
  );
}

function ClientFeedbackSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return undefined;
    }

    let frameId = 0;
    let resetTimeout = 0;
    let restarting = false;
    const fadeWindow = 0.65;

    const animateOpacity = () => {
      const duration = Number.isFinite(video.duration) ? video.duration : 0;
      const currentTime = video.currentTime ?? 0;

      if (!duration || restarting) {
        frameId = window.requestAnimationFrame(animateOpacity);
        return;
      }

      let opacity = 1;

      if (currentTime < fadeWindow) {
        opacity = Math.max(0, Math.min(1, currentTime / fadeWindow));
      } else if (duration - currentTime < fadeWindow) {
        opacity = Math.max(0, Math.min(1, (duration - currentTime) / fadeWindow));
      }

      video.style.opacity = opacity.toString();
      frameId = window.requestAnimationFrame(animateOpacity);
    };

    const handleEnded = () => {
      restarting = true;
      video.style.opacity = "0";
      resetTimeout = window.setTimeout(() => {
        video.currentTime = 0;
        void video.play();
        restarting = false;
      }, 100);
    };

    video.style.opacity = "0";
    void video.play().catch(() => undefined);
    video.addEventListener("ended", handleEnded);
    frameId = window.requestAnimationFrame(animateOpacity);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(resetTimeout);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section className="relative -mt-px overflow-hidden bg-background pb-20 pt-44 text-foreground md:pb-28 md:pt-56">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="sephara-video absolute inset-x-0 top-16 h-[52rem] w-full scale-[1.04] object-cover opacity-0 [filter:hue-rotate(54deg)_saturate(1.8)_brightness(0.82)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_86%,transparent_100%)]"
      >
        <source src={glowBridgeVideoUrl} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[#6f18d8]/35 mix-blend-color" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-[radial-gradient(ellipse_at_50%_16%,rgba(155,93,229,0.44),rgba(64,15,119,0.28)_32%,rgba(7,6,18,0.72)_70%,rgba(7,6,18,0.96)_100%)] mix-blend-screen" />
      <div className="pointer-events-none absolute inset-x-0 top-[-1px] h-28 bg-gradient-to-b from-[#f7fafd] via-[#2a123f]/42 to-transparent md:h-36" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[52rem] bg-gradient-to-b from-background/52 via-background/44 via-55% to-background/94" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background via-background/84 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-[#9b5de5]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <BlurIn>
          <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d7b8ff] drop-shadow-[0_2px_10px_rgba(7,6,18,0.85)]">
                Experiência Sephara IA
              </p>
              <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
                Automação aplicada a operações reais.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-foreground/68 lg:pb-2">
              Além da solução para gestão alimentar escolar, a Sephara IA
              desenvolve automações, painéis e fluxos inteligentes para
              operações que precisam reduzir retrabalho, ganhar previsibilidade
              e decidir com dados confiáveis.
            </p>
          </div>
        </BlurIn>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {clientFeedbacks.map((feedback, index) => (
            <BlurIn key={feedback.id} delay={index * 0.08}>
              <motion.article
                className="liquid-glass flex min-h-[360px] flex-col rounded-[26px] p-5 sm:min-h-[390px] sm:p-6"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={feedback.avatar}
                    alt={`Foto de ${feedback.author}`}
                    className="h-16 w-16 rounded-full border border-white/18 object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {feedback.author}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/72 drop-shadow-[0_1px_8px_rgba(7,6,18,0.65)]">
                      {feedback.segment}
                    </p>
                  </div>
                </div>

                <p className="mt-7 text-lg leading-8 text-white/82 sm:text-xl">
                  "{feedback.testimonial}"
                </p>

                <div className="mt-auto pt-8">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/16 to-transparent" />
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/42">
                    {feedback.role}
                  </p>
                </div>
              </motion.article>
            </BlurIn>
          ))}
        </div>

        <BlurIn
          delay={0.16}
          className="mt-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04]"
        >
          <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/80">
                Próximo passo
              </p>
              <h3 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Vamos transformar esta proposta em uma implantação objetiva,
                mensurável e pronta para a rotina da rede municipal.
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/62">
                A Sephara IA entrega equipamentos, software, treinamento,
                suporte e acompanhamento para que a operação comece com clareza
                desde o primeiro dia.
              </p>
            </div>
            <button
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-background transition hover:bg-white/90 md:w-auto"
              type="button"
              onClick={() => scrollToSection("investimento")}
            >
              Revisar investimento
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </BlurIn>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <HeroSection />
      <BelowHeroMotionSection />
      <SocialProofSection />
      <ProposalContent />
      <ClientFeedbackSection />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
