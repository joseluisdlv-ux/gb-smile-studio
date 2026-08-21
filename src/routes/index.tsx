import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  Star,
  Instagram,
  Facebook,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Award,
  Smile,
  Stethoscope,
  Syringe,
  Braces,
  Gem,
  Crown,
  Wand2,
} from "lucide-react";


import heroImg from "@/assets/hero-clinic.jpg";
import teamImg from "@/assets/team.jpg";
import caso1 from "@/assets/caso-1.jpg.";
import caso2 from "@/assets/caso-2.jpg.";
import caso3 from "@/assets/caso-3.jpg.";
import caso4 from "@/assets/caso-4.jpg.";
import caso5 from "@/assets/caso-5.jpg.";
import caso6 from "@/assets/caso-6.jpg.";

const galeria = [
  { src: caso1, alt: "Antes e depois de reabilitação oral em paciente masculino" },
  { src: caso2, alt: "Antes e depois de reabilitação oral em paciente feminina" },
  { src: caso3, alt: "Antes e depois de prótese dentária em paciente masculino" },
  { src: caso4, alt: "Antes e depois de implantes dentários em paciente masculino" },
  { src: caso5, alt: "Close-up do sorriso antes e depois de lentes de contato dental" },
  { src: caso6, alt: "Close-up do sorriso antes e depois de reabilitação com prótese" },
];


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GB Odontologia | Dentista em Itatiba - SP" },
      {
        name: "description",
        content:
          "GB Odontologia em Itatiba/SP: implantes, ortodontia, clareamento, endodontia e estética dental. Agende sua consulta.",
      },
      { property: "og:title", content: "GB Odontologia | Dentista em Itatiba - SP" },
      {
        property: "og:description",
        content: "Seu sorriso é nossa missão. Odontologia completa e acolhedora em Itatiba - SP.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/551148633301?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta";

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const diferenciais = [
  { icon: ShieldCheck, title: "Biossegurança", text: "Protocolos rigorosos de esterilização em todos os atendimentos." },
  { icon: Sparkles, title: "Tecnologia", text: "Equipamentos modernos para diagnósticos precisos e tratamentos confortáveis." },
  { icon: HeartHandshake, title: "Acolhimento", text: "Atendimento humanizado, sem pressa e com plano de tratamento claro." },
  { icon: Award, title: "Experiência", text: "Equipe especializada e atualizada nas principais áreas da odontologia." },
];

const servicos = [
  { icon: Smile, title: "Limpeza e Profilaxia", text: "Remoção de placa e tártaro para uma saúde bucal duradoura." },
  { icon: Stethoscope, title: "Tratamento de Cárie", text: "Restaurações estéticas com resinas de alta durabilidade." },
  { icon: Syringe, title: "Endodontia (Canal)", text: "Tratamento de canal moderno, preciso e sem dor." },
  { icon: Gem, title: "Implantes Dentários", text: "Reposição de dentes com naturalidade e função completa." },
  { icon: Braces, title: "Ortodontia", text: "Aparelhos fixos, estéticos e alinhadores transparentes." },
  { icon: Sparkles, title: "Clareamento Dental", text: "Clareamento em consultório ou supervisionado em casa." },
  { icon: Crown, title: "Prótese Dentária", text: "Próteses fixas e removíveis sob medida para o seu sorriso." },
  { icon: Wand2, title: "Estética Dental", text: "Lentes, facetas e harmonização para um sorriso equilibrado." },
];

const depoimentos = [
  { nome: "Mariana Souza", texto: "Atendimento impecável. Fiz clareamento e o resultado superou todas as expectativas.", nota: 5 },
  { nome: "Carlos Henrique", texto: "Coloquei dois implantes e fui muito bem acompanhado em cada etapa. Recomendo demais.", nota: 5 },
  { nome: "Juliana Prado", texto: "Minha filha perdeu o medo de dentista aqui. Equipe carinhosa e clínica linda.", nota: 5 },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [erro, setErro] = useState("");
  const [lightbox, setLightbox] = useState<number | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = String(data.get("nome") ?? "").trim();
    const telefone = String(data.get("telefone") ?? "").trim();
    const servico = String(data.get("servico") ?? "").trim();
    const mensagem = String(data.get("mensagem") ?? "").trim();

    if (nome.length < 2 || nome.length > 100) return setErro("Informe seu nome completo.");
    if (telefone.replace(/\D/g, "").length < 10) return setErro("Informe um telefone válido com DDD.");

    setErro("");
    const texto = `Olá! Gostaria de agendar uma consulta.\n\nNome: ${nome}\nTelefone: ${telefone}\nServiço desejado: ${servico}${mensagem ? `\nMensagem: ${mensagem}` : ""}`;
    window.open(`https://wa.me/551148633301?text=${encodeURIComponent(texto)}`, "_blank");
    e.currentTarget.reset();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:flex lg:justify-between">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <img
              src="/favicon.png"
              alt="Logo GB Odontologia"
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-accent/50"
            />
            <span className="min-w-0">
              <span className="block font-display text-lg leading-tight font-semibold text-primary">
                GB Odontologia
              </span>
              <span className="block truncate text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase">
                Itatiba · SP
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <a href="#contato" className="btn-gold text-sm">
              Agende Consulta
            </a>
          </nav>

          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="shrink-0 rounded-full border border-border p-2 text-primary lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="reveal border-t border-border bg-background px-4 pb-5 lg:hidden">
            <ul className="flex flex-col">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-border/60 py-3 text-sm text-foreground/80"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="btn-gold mt-4 w-full text-sm"
            >
              Agende Consulta
            </a>
          </nav>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="relative isolate overflow-hidden">
          <img
            src={heroImg}
            alt="Consultório odontológico elegante da GB Odontologia"
            width={1600}
            height={1008}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.24_0.1_24/0.94)_0%,oklch(0.29_0.11_24/0.82)_55%,oklch(0.29_0.11_24/0.35)_100%)]" />
          <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32 lg:py-40">
            <div className="reveal max-w-2xl">
              <p className="text-xs tracking-[0.35em] text-accent uppercase">
                Odontologia em Itatiba · SP
              </p>
              <h1 className="mt-5 font-display text-4xl leading-[1.05] font-semibold text-primary-foreground sm:text-6xl">
                Seu Sorriso é <span className="text-gold">Nossa Missão</span>
              </h1>
              <p className="mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
                Tratamentos completos, estética avançada e um atendimento acolhedor para você
                sorrir com confiança em todas as fases da vida.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#contato" className="btn-gold">
                  Agende sua Consulta
                </a>
                <a href="#servicos" className="btn-outline-gold">
                  Ver Serviços
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs tracking-[0.3em] text-accent uppercase">Sobre a clínica</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-primary sm:text-4xl">
                Cuidado que une técnica, estética e afeto
              </h2>
              <p className="mt-5 text-muted-foreground">
                A GB Odontologia nasceu do desejo de oferecer uma experiência odontológica
                diferente em Itatiba: ambiente sofisticado, escuta atenta e planos de tratamento
                transparentes, do primeiro contato à manutenção do sorriso.
              </p>
              <p className="mt-4 text-muted-foreground">
                Nossa missão é cuidar da saúde bucal de cada paciente com excelência clínica e
                acolhimento genuíno, respeitando o tempo, o conforto e os objetivos de cada
                sorriso.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[
                  { n: "4", l: "anos de atuação" },
                  { n: "700+", l: "sorrisos atendidos" },
                  { n: "8", l: "especialidades" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-secondary px-3 py-4">
                    <p className="font-display text-2xl font-semibold text-primary">{s.n}</p>
                    <p className="mt-1 text-[0.7rem] tracking-wide text-muted-foreground uppercase">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={teamImg}
                alt="Equipe de dentistas da GB Odontologia"
                loading="lazy"
                width={1200}
                height={912}
                className="w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]"
              />
              <div className="absolute -bottom-6 left-6 hidden rounded-xl bg-primary px-5 py-4 text-primary-foreground shadow-[var(--shadow-soft)] sm:block">
                <p className="font-display text-lg">Equipe especializada</p>
                <p className="text-xs text-primary-foreground/75">
                  Ortodontia · Implantodontia · Estética
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {diferenciais.map((d) => (
              <article key={d.title} className="card-elegant p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent-foreground">
                  <d.icon size={20} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-primary">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* GALERIA */}
        <section id="resultados" className="border-y border-border/60 bg-secondary/60 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-xs tracking-[0.3em] text-accent uppercase">Resultados</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-primary sm:text-4xl">
              Alguns de Nossos Resultados
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">Transformações que falam por si</p>
          </div>
          <div className="mt-8 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:thin]">
            <ul className="mx-auto flex w-max max-w-none gap-4 px-4 sm:px-[max(1rem,calc((100vw-72rem)/2))]">
              {galeria.map((g, i) => (
                <li key={g.src}>
                  <button
                    type="button"
                    onClick={() => setLightbox(i)}
                    aria-label={`Ampliar imagem: ${g.alt}`}
                    className="block h-[320px] overflow-hidden rounded-2xl border border-accent/30 bg-background shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1 hover:border-accent"
                  >
                    <img
                      src={g.src}
                      alt={g.alt}
                      loading="lazy"
                      className="h-[320px] w-auto max-w-none object-cover"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-1 text-center text-xs text-muted-foreground">
            Arraste para o lado para ver mais · toque para ampliar
          </p>
        </section>

        {lightbox !== null && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Imagem ampliada"
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/90 p-4 backdrop-blur-sm"
          >
            <button
              type="button"
              aria-label="Fechar"
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 rounded-full border border-accent/50 p-2 text-accent"
            >
              <X size={20} />
            </button>
            <img
              src={galeria[lightbox]?.src}
              alt={galeria[lightbox]?.alt ?? ""}
              className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain"
            />
          </div>
        )}



        {/* SERVIÇOS */}
        <section id="servicos" className="surface-marsala py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.3em] text-accent uppercase">Nossos serviços</p>
              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                Odontologia completa em um só lugar
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {servicos.map((s) => (
                <article
                  key={s.title}
                  className="rounded-xl border border-accent/25 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-white/10"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <s.icon size={20} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/75">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section id="depoimentos" className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
          <div className="text-center">
            <p className="text-xs tracking-[0.3em] text-accent uppercase">Depoimentos</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-primary sm:text-4xl">
              Histórias de quem sorri com a gente
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {depoimentos.map((d) => (
              <article key={d.nome} className="card-elegant p-7">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: d.nota }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{d.texto}"</p>
                <p className="mt-6 font-display text-lg text-primary">{d.nome}</p>
                <p className="text-xs text-muted-foreground">Paciente GB Odontologia</p>
              </article>
            ))}
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="bg-secondary py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
            <div>
              <p className="text-xs tracking-[0.3em] text-accent uppercase">Contato</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-primary sm:text-4xl">
                Agende sua consulta
              </h2>
              <p className="mt-4 text-muted-foreground">
                Preencha o formulário ou fale direto pelo WhatsApp. Retornamos em até 1 dia útil.
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
                  <a href="tel:+551145385119" className="text-foreground/85 hover:text-primary">
                    (11) 4538-5119
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-foreground/85">Av. Campinas, 341 - Vila Brasileira, Itatiba - SP, 13256-500</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-foreground/85">Dra. Isabela Galvão — CRO 140346 | CROSP 026253</span>
                </li>
              </ul>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-8"
              >
                <MessageCircle size={18} /> Falar no WhatsApp
              </a>

              <div className="mt-8 overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Mapa da GB Odontologia em Itatiba"
                  src="https://www.google.com/maps?q=Av.%20Campinas%2C%20341%20-%20Vila%20Brasileira%2C%20Itatiba%20-%20SP%2C%2013256-500&output=embed"
                  loading="lazy"
                  className="h-64 w-full border-0"
                />
              </div>
            </div>

            <form onSubmit={onSubmit} className="card-elegant h-fit p-7">
              <h3 className="font-display text-2xl text-primary">Formulário de agendamento</h3>
              <div className="mt-6 space-y-4">
                {[
                  { name: "nome", label: "Nome completo", type: "text", ph: "Seu nome" },
                  { name: "telefone", label: "Telefone / WhatsApp", type: "tel", ph: "(11) 4538-5119" },
                ].map((f) => (
                  <div key={f.name}>
                    <label htmlFor={f.name} className="text-xs tracking-wide text-muted-foreground uppercase">
                      {f.label}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      required
                      maxLength={255}
                      placeholder={f.ph}
                      className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="servico" className="text-xs tracking-wide text-muted-foreground uppercase">
                    Serviço desejado
                  </label>
                  <select
                    id="servico"
                    name="servico"
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
                  >
                    {servicos.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}
                    <option>Outro / Avaliação</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mensagem" className="text-xs tracking-wide text-muted-foreground uppercase">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    maxLength={1000}
                    placeholder="Conte-nos como podemos ajudar"
                    className="mt-1.5 w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
                  />
                </div>
              </div>

              {erro && <p className="mt-4 text-sm text-primary">{erro}</p>}

              <button type="submit" className="btn-gold mt-6 w-full">
                Solicitar agendamento
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="surface-marsala">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/favicon.png"
                alt="Logo GB Odontologia"
                loading="lazy"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover ring-1 ring-accent/50"
              />
              <span className="font-display text-lg">GB Odontologia</span>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/75">
              Odontologia elegante e acolhedora em Itatiba - SP.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: MessageCircle, href: WHATSAPP, label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg">Links rápidos</h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-accent">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg">Horários</h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
              <li>Segunda a Sexta: 08h - 19h</li>
              <li>Sábado: 08h - 13h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg">Contato</h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
              <li>(11) 4538-5119</li>
              <li>Av. Campinas, 341 - Vila Brasileira, Itatiba - SP, 13256-500</li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-4">
            <p className="text-center text-xs text-primary-foreground/60">
              Dra. Isabela Galvão — CRO 140346 | CROSP 026253
            </p>
          </div>
        </div>
        <div className="border-t border-accent/20 py-5 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} GB Odontologia. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
