import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Logo } from "@/components/logo"
import { AnimatedSection } from "@/components/animated-section"
import {
  ArrowRight,
  Zap,
  Clock,
  TrendingUp,
  MessageSquare,
  Bot,
  Sparkles,
  Check,
  Mail,
  Instagram,
  Linkedin,
} from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-2xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Serviços
            </a>
            <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Como Funciona
            </a>
            <a href="#precos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Preços
            </a>
          </nav>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#contato">Começar Agora</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-primary/5" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse-glow"
          style={{ animationDelay: "3s" }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 mb-8 animate-fade-in hover-lift glow-primary">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground">Entrega em até 3 dias • Sem mensalidades</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 animate-fade-in-up text-balance leading-[0.95] tracking-tight">
              Transforme Seu <span className="text-primary drop-shadow-[0_0_30px_rgba(96,165,250,0.5)]">WhatsApp</span>{" "}
              em uma Máquina de{" "}
              <span className="text-secondary drop-shadow-[0_0_30px_rgba(251,146,60,0.5)]">Vendas Automática</span>
            </h1>

            <p
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground/90 mb-14 max-w-4xl mx-auto animate-fade-in-up text-pretty leading-relaxed font-light"
              style={{ animationDelay: "0.2s" }}
            >
              Chatbots inteligentes que atendem, qualificam e vendem para você{" "}
              <span className="text-foreground font-semibold">24 horas por dia</span>. Implementação completa em até 3
              dias.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 group hover-lift glow-primary font-semibold"
                asChild
              >
                <a href="#contato">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 border-border/50 hover:bg-card/50 bg-transparent backdrop-blur-sm hover-lift font-semibold text-light"
                asChild
              >
                <a href="#como-funciona">Ver Como Funciona</a>
              </Button>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-center group">
                <div className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  3 dias
                </div>
                <div className="text-muted-foreground text-lg">Prazo de entrega</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-secondary to-secondary/60 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  R$ 297
                </div>
                <div className="text-muted-foreground text-lg">A partir de</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <div className="text-muted-foreground text-lg">Digital</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-20" animation="scale">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance tracking-tight">O que fazemos por você</h2>
            <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto text-pretty font-light">
              Soluções digitais que transformam a forma como sua empresa se comunica
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <AnimatedSection delay={100} animation="fade-up">
              <Card className="p-10 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 group h-full hover-lift relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 glow-primary">
                    <Bot className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-5 group-hover:text-primary transition-colors duration-300">
                    Chatbots Inteligentes
                  </h3>
                  <p className="text-muted-foreground/80 leading-relaxed text-lg font-light">
                    Atendimento automatizado 24/7 com IA que entende seus clientes e resolve problemas instantaneamente.
                  </p>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200} animation="fade-up">
              <Card className="p-10 bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all duration-500 group h-full hover-lift relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300 glow-secondary">
                    <MessageSquare className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-5 group-hover:text-secondary transition-colors duration-300">
                    Automação WhatsApp
                  </h3>
                  <p className="text-muted-foreground/80 leading-relaxed text-lg font-light">
                    Fluxos de mensagens automatizados que qualificam leads e agendam reuniões sem intervenção manual.
                  </p>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300} animation="fade-up">
              <Card className="p-10 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 group h-full hover-lift relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 glow-primary">
                    <Sparkles className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-5 group-hover:text-primary transition-colors duration-300">
                    Landing Pages com IA
                  </h3>
                  <p className="text-muted-foreground/80 leading-relaxed text-lg font-light">
                    Páginas de alta conversão otimizadas para capturar leads e impulsionar suas vendas online.
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-card/20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <AnimatedSection animation="slide-right">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-balance tracking-tight leading-tight">
                Por que escolher a <span className="text-primary">Exyra Labs</span>?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground/80 mb-12 text-pretty leading-relaxed font-light">
                Somos especialistas em criar automações que realmente funcionam para pequenas empresas.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Zap, title: "Entrega Rápida", desc: "Seu projeto pronto em até 3 dias úteis" },
                  {
                    icon: Clock,
                    title: "Economia de Tempo",
                    desc: "Automatize tarefas repetitivas e foque no crescimento",
                  },
                  {
                    icon: TrendingUp,
                    title: "Resultados Visíveis",
                    desc: "Aumente conversões e reduza custos operacionais",
                  },
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-5 items-start group hover-lift">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 glow-primary">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground/80 text-lg font-light">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} animation="slide-left">
              <Card className="p-10 bg-gradient-to-br from-primary/10 via-card/50 to-secondary/10 border-primary/30 backdrop-blur-sm hover-lift glow-primary">
                <div className="space-y-8">
                  <div className="flex items-center justify-between pb-6 border-b border-border/50">
                    <span className="text-muted-foreground font-semibold text-lg">Antes</span>
                    <span className="text-foreground font-bold text-lg">Depois</span>
                  </div>
                  {[
                    { before: "Atendimento manual 8h/dia", after: "Atendimento 24/7 automatizado" },
                    { before: "Perda de leads", after: "Captura e qualificação automática" },
                    { before: "Processos lentos", after: "Respostas instantâneas" },
                    { before: "Custos altos", after: "Investimento acessível" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between gap-4 group">
                      <span className="text-muted-foreground text-base flex-1">{item.before}</span>
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="text-foreground text-base font-semibold text-right flex-1">{item.after}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-20" animation="scale">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance tracking-tight">Como funciona</h2>
            <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto text-pretty font-light">
              Processo simples e transparente do início ao fim
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {[
              { step: "01", title: "Contato", desc: "Entre em contato via WhatsApp, Instagram ou e-mail" },
              { step: "02", title: "Proposta", desc: "Receba uma proposta personalizada em até 24h" },
              { step: "03", title: "Desenvolvimento", desc: "Criamos sua automação em até 3 dias úteis" },
              { step: "04", title: "Entrega", desc: "Receba seu projeto pronto e funcionando" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100} animation="fade-up">
                <div className="text-center group hover-lift">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6 border-2 border-primary/30 group-hover:border-primary group-hover:scale-110 transition-all duration-300 glow-primary">
                    <span className="text-3xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground/80 text-base font-light leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precos" className="py-20 md:py-32 bg-card/20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-20" animation="scale">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance tracking-tight">Preços transparentes</h2>
            <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto text-pretty font-light">
              Investimento acessível com resultados garantidos
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <AnimatedSection delay={100} animation="fade-up">
              <Card className="p-10 bg-card/50 backdrop-blur-sm border-border/50 h-full flex flex-col hover-lift hover:border-primary/30 transition-all duration-500">
                <h3 className="text-3xl font-bold mb-3">Starter</h3>
                <div className="mb-8">
                  <span className="text-5xl font-bold">R$ 297</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {["Chatbot básico", "1 fluxo de conversa", "Integração WhatsApp", "Suporte por 7 dias"].map(
                    (feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground/80 text-base">{feature}</span>
                      </li>
                    ),
                  )}
                </ul>
                <Button
                  variant="outline"
                  className="w-full bg-transparent hover:bg-card text-base py-6 font-semibold"
                  asChild
                >
                  <a href="#contato">Começar</a>
                </Button>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200} animation="scale">
              <Card className="p-10 bg-gradient-to-br from-primary/15 via-card/50 to-secondary/15 border-primary backdrop-blur-sm h-full flex flex-col relative hover-lift glow-primary">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full shadow-lg">
                  Mais Popular
                </div>
                <h3 className="text-3xl font-bold mb-3">Professional</h3>
                <div className="mb-8">
                  <span className="text-5xl font-bold">R$ 497</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {[
                    "Chatbot avançado com IA",
                    "3 fluxos de conversa",
                    "Integração WhatsApp + Instagram",
                    "Landing page inclusa",
                    "Suporte por 30 dias",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-base font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base py-6 font-semibold glow-primary"
                  asChild
                >
                  <a href="#contato">Começar</a>
                </Button>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300} animation="fade-up">
              <Card className="p-10 bg-card/50 backdrop-blur-sm border-border/50 h-full flex flex-col hover-lift hover:border-primary/30 transition-all duration-500">
                <h3 className="text-3xl font-bold mb-3">Enterprise</h3>
                <div className="mb-8">
                  <span className="text-5xl font-bold">Customizado</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {[
                    "Solução personalizada",
                    "Fluxos ilimitados",
                    "Múltiplas integrações",
                    "Dashboard analytics",
                    "Suporte prioritário",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground/80 text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full bg-transparent hover:bg-card text-base py-6 font-semibold"
                  asChild
                >
                  <a href="#contato">Falar com Vendas</a>
                </Button>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-gradient" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="scale">
            <Card className="max-w-5xl mx-auto p-14 bg-gradient-to-br from-primary/15 via-card/50 to-secondary/15 border-primary/40 backdrop-blur-sm text-center hover-lift glow-primary">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-balance tracking-tight leading-tight">
                Pronto para automatizar seu negócio?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground/80 mb-12 max-w-3xl mx-auto text-pretty font-light leading-relaxed">
                Entre em contato agora e receba uma proposta personalizada em até 24 horas
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 font-semibold hover-lift glow-primary"
                  asChild
                >
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 w-6 h-6" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 border-border/50 hover:bg-card/50 bg-transparent backdrop-blur-sm hover-lift font-semibold"
                  asChild
                >
                  <a href="mailto:contato@exyralabs.com">
                    <Mail className="mr-2 w-6 h-6" />
                    E-mail
                  </a>
                </Button>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-16 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <Logo className="mb-4" />
              <p className="text-muted-foreground text-sm max-w-md">
                Criamos automações que economizam tempo e dinheiro para pequenas empresas.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#servicos" className="hover:text-foreground transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="hover:text-foreground transition-colors">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#precos" className="hover:text-foreground transition-colors">
                    Preços
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-foreground transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:contato@exyralabs.com" className="hover:text-foreground transition-colors">
                    contato@exyralabs.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <a href="https://wa.me/5511999999999" className="hover:text-foreground transition-colors">
                    WhatsApp
                  </a>
                </li>
              </ul>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Exyra Labs. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
