import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  Check,
  Globe,
  LayoutDashboard,
  Laptop,
  MonitorSmartphone,
  Send,
  Server,
  TrendingUp,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/navbar";
import { Reveal } from "@/components/site/reveal";
import {
  ConnectMockup,
  FullDashboard,
  HeroDashboard,
  InstallMockup,
  MachinesMockup,
  Mt5Mockup,
  Pill,
  RemoteMockup,
  StatusDot,
  TelegramMockup,
} from "@/components/site/mockups";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SignalCopy — Monitor Telegram Signals, Automate MT5 Trading" },
      {
        name: "description",
        content:
          "SignalCopy runs on your Windows PC or VPS and lets you manage Telegram signal monitoring and MT5 automation from one simple web dashboard.",
      },
      { property: "og:title", content: "SignalCopy — Telegram Signals to MT5, Simplified" },
      {
        property: "og:description",
        content:
          "Install SignalCopy on your Windows PC or VPS, connect Telegram, optionally connect MT5, and control everything from anywhere.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Section({
  id,
  tone = "white",
  className,
  children,
}: {
  id?: string;
  tone?: "white" | "gray";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-b border-border py-20 sm:py-28",
        tone === "gray" ? "bg-surface" : "bg-background",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-5">{children}</div>
    </section>
  );
}

function Heading({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-[2.5rem] sm:leading-[1.12]">
        {title}
      </h2>
      {copy && <p className="mt-4 text-[16.5px] leading-relaxed text-muted-foreground">{copy}</p>}
    </Reveal>
  );
}

function Landing() {
  return (
    <div id="top">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="border-b border-border bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Telegram Signal Automation</p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-ink sm:text-6xl">
                Monitor Telegram Signals.
                <br className="hidden sm:block" /> Automate MT5 Trading.
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
                SignalCopy runs on your Windows PC or VPS and lets you manage your Telegram signals
                and MT5 automation from one simple web dashboard.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button variant="cta" size="lg" className="w-full sm:w-auto">
                  Get Started Free
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                  <a href="#how-it-works">See How It Works</a>
                </Button>
              </div>
              <p className="mt-4 text-[13px] text-muted-foreground">
                Works on your Windows PC or Windows VPS.
              </p>
            </Reveal>

            <Reveal delay={120} className="mx-auto mt-14 max-w-4xl">
              <HeroDashboard />
            </Reveal>
          </div>
        </section>

        {/* WHAT IS SIGNALCOPY */}
        <Section id="product" tone="gray">
          <Heading
            eyebrow="What is SignalCopy"
            title="Everything you need to manage Telegram signals in one place."
            copy="SignalCopy connects your Telegram signal sources to your Windows machine and gives you a simple web dashboard to monitor signals and automate MT5 trading."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {[
              {
                icon: Activity,
                label: "Monitor",
                text: "Keep an eye on the Telegram sources you follow from your SignalCopy dashboard.",
              },
              {
                icon: TrendingUp,
                label: "Automate",
                text: "Connect MT5 and let SignalCopy handle trade execution based on your selected signals.",
              },
              {
                icon: Globe,
                label: "Control",
                text: "Manage your connected machine, Telegram sources and trading setup from anywhere.",
              },
            ].map((b, i) => (
              <Reveal key={b.label} delay={i * 90} className="bg-background p-8">
                <b.icon className="size-5 text-accent" strokeWidth={1.6} />
                <p className="eyebrow mt-5">{b.label}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* HOW IT WORKS */}
        <Section id="how-it-works">
          <Heading eyebrow="How it works" title="Get started in a few simple steps." />
          <div className="mt-16 space-y-20">
            {[
              {
                n: "01",
                title: "Install the app",
                text: "Download SignalCopy and install it on your Windows PC or Windows VPS.",
                visual: <InstallMockup />,
              },
              {
                n: "02",
                title: "Connect your account",
                text: "Open SignalCopy and connect it to your SignalCopy account.",
                visual: <ConnectMockup />,
              },
              {
                n: "03",
                title: "Control it from anywhere",
                text: "Once connected, open your SignalCopy web dashboard from any browser and manage your setup remotely.",
                visual: <RemoteMockup />,
              },
            ].map((step, i) => (
              <Reveal
                key={step.n}
                className={cn(
                  "grid items-center gap-10 md:grid-cols-2 md:gap-16",
                  i % 2 === 1 && "md:[&>div:first-child]:order-2",
                )}
              >
                <div>
                  <span className="font-mono text-[12px] font-semibold tracking-widest text-accent">
                    STEP {step.n}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-3 max-w-md text-[15.5px] leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
                <div>{step.visual}</div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 rounded-xl border border-border bg-surface p-8">
            <div className="grid items-center gap-6 text-center sm:grid-cols-[1fr_auto_1fr] sm:text-left">
              <div className="flex items-center justify-center gap-3 sm:justify-start">
                <Server className="size-5 text-ink-soft" strokeWidth={1.6} />
                <div>
                  <p className="text-[14px] font-medium text-ink">Your Windows machine</p>
                  <p className="text-[13px] text-muted-foreground">Running the SignalCopy app</p>
                </div>
              </div>
              <div className="mx-auto font-mono text-[12px] text-accent">— controlled by —</div>
              <div className="flex items-center justify-center gap-3 sm:justify-end">
                <div className="text-right">
                  <p className="text-[14px] font-medium text-ink">Web dashboard</p>
                  <p className="text-[13px] text-muted-foreground">From any browser, anywhere</p>
                </div>
                <LayoutDashboard className="size-5 text-ink-soft" strokeWidth={1.6} />
              </div>
            </div>
          </Reveal>
        </Section>

        {/* TELEGRAM */}
        <Section tone="gray">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <Heading
                eyebrow="Telegram"
                title="Connect Telegram in minutes."
                copy="Connect your Telegram account, choose the channels, groups or users you want to monitor, and start receiving signals in your SignalCopy dashboard."
              />
              <Reveal delay={80} className="mt-8 flex flex-wrap items-center gap-3">
                {["Connect Telegram", "Select Sources", "Start Monitoring"].map((s, i) => (
                  <div key={s} className="flex items-center gap-3">
                    {i > 0 && <span className="text-muted-foreground">→</span>}
                    <span className="rounded-full border border-border bg-background px-3.5 py-1.5 text-[13px] text-ink">
                      {s}
                    </span>
                  </div>
                ))}
              </Reveal>
            </div>
            <Reveal delay={100}>
              <TelegramMockup />
            </Reveal>
          </div>
        </Section>

        {/* MT5 */}
        <Section>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal className="order-2 md:order-1">
              <Mt5Mockup />
            </Reveal>
            <div className="order-1 md:order-2">
              <Reveal>
                <Pill>Optional</Pill>
              </Reveal>
              <Heading
                title="Connect MT5 when you're ready to automate."
                copy="Connect your MetaTrader 5 setup and turn the signals you monitor into automated trade execution."
              />
              <Reveal delay={60} className="mt-5 text-[14px] text-muted-foreground">
                MT5 is optional — you can use SignalCopy for monitoring only.
              </Reveal>
            </div>
          </div>
        </Section>

        {/* DASHBOARD */}
        <Section tone="gray">
          <Heading
            eyebrow="Dashboard"
            align="center"
            title="Your trading setup, from anywhere."
            copy="Your SignalCopy app can keep running on your Windows PC or VPS while you manage it from the web."
          />
          <Reveal delay={100} className="mt-14">
            <FullDashboard />
          </Reveal>
        </Section>

        {/* WHERE IT RUNS */}
        <Section>
          <Heading
            eyebrow="Where it runs"
            title="Run it where you want."
            copy="Use your own Windows PC or Windows VPS. Install SignalCopy once, keep it running, and manage it remotely from the web."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                n: "Option 01",
                icon: Laptop,
                title: "Windows PC",
                text: "Run SignalCopy on your own computer.",
              },
              {
                n: "Option 02",
                icon: Server,
                title: "Windows VPS",
                text: "Keep SignalCopy running 24/7 on your own VPS.",
              },
            ].map((o, i) => (
              <Reveal
                key={o.title}
                delay={i * 90}
                className="rounded-xl border border-border bg-card p-8 shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{o.n}</span>
                  <o.icon className="size-5 text-ink-soft" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ink">{o.title}</h3>
                <p className="mt-2 text-[15px] text-muted-foreground">{o.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-8 flex items-center justify-center gap-2 text-[14px] text-ink">
            <StatusDot />
            Control either one from anywhere.
          </Reveal>
        </Section>

        {/* MULTIPLE MACHINES */}
        <Section tone="gray">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Heading
              eyebrow="Multiple machines"
              title="Need more than one machine?"
              copy="Connect multiple Windows PCs or VPS machines to the same SignalCopy account and manage them from one dashboard."
            />
            <Reveal delay={100}>
              <MachinesMockup />
            </Reveal>
          </div>
        </Section>

        {/* FEATURES */}
        <Section>
          <Heading eyebrow="Features" title="Simple tools for signal-driven traders." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Send, title: "Telegram Monitoring", text: "Monitor the Telegram sources you follow." },
              { icon: TrendingUp, title: "MT5 Automation", text: "Automate trade execution through MetaTrader 5." },
              { icon: Globe, title: "Remote Control", text: "Manage your setup from any browser." },
              { icon: MonitorSmartphone, title: "Multiple Machines", text: "Connect multiple Windows PCs or VPS machines." },
              { icon: Activity, title: "Signal History", text: "Keep track of signals and activity." },
              { icon: LayoutDashboard, title: "Simple Dashboard", text: "Everything in one clean workspace." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 70} className="bg-background p-7">
                <f.icon className="size-[18px] text-accent" strokeWidth={1.6} />
                <h3 className="mt-4 text-[15px] font-semibold text-ink">{f.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* PRICING */}
        <Section id="pricing" tone="gray">
          <Heading
            eyebrow="Pricing"
            align="center"
            title="Simple pricing. Start with one machine."
            copy="Choose the number of Windows machines you want to connect."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              { name: "Free", price: "$0", note: "", vps: "1 VPS", cta: "Start Free", featured: false },
              { name: "Pro", price: "$19", note: "/ month", vps: "3 VPS", cta: "Get Pro", featured: true },
              { name: "Business", price: "$50", note: "/ month", vps: "10 VPS", cta: "Get Business", featured: false },
            ].map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 80}
                className={cn(
                  "rounded-xl border bg-card p-7",
                  p.featured
                    ? "border-accent/40 shadow-panel lg:-my-3 lg:p-8"
                    : "border-border shadow-card",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{p.name}</span>
                  {p.featured && <Pill tone="accent">Most popular</Pill>}
                </div>
                <p className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold tracking-tight text-ink">{p.price}</span>
                  <span className="text-[14px] text-muted-foreground">{p.note}</span>
                </p>
                <ul className="mt-6 space-y-3 border-t border-border pt-6">
                  {[p.vps, "Full access"].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-[14.5px] text-ink">
                      <Check className="size-4 text-accent" strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={p.featured ? "cta" : "outline"}
                  size="lg"
                  className="mt-7 w-full"
                >
                  {p.cta}
                </Button>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-10 space-y-1.5 text-center text-[13.5px] text-muted-foreground">
            <p>All plans include the same core product access — only the number of connected machines differs.</p>
            <p>Use your own Windows PC or Windows VPS.</p>
            <p>Have a coupon? You can apply it during checkout.</p>
          </Reveal>
        </Section>

        {/* FAQ */}
        <Section id="faq">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <Heading eyebrow="FAQ" title="Questions, answered." />
            <Reveal delay={80}>
              <Accordion type="single" collapsible className="w-full">
                {[
                  ["What is SignalCopy?", "SignalCopy is an application for your Windows PC or VPS that monitors the Telegram signal sources you follow and can automate MT5 trading. You manage it from a web dashboard."],
                  ["Do I need a Windows VPS?", "No. A VPS is useful if you want SignalCopy running around the clock, but your own Windows PC works too."],
                  ["Can I use my own Windows PC?", "Yes. Install SignalCopy on your PC, connect your account, and manage it from the web."],
                  ["How do I set up SignalCopy?", "Install the app on your Windows machine, connect it to your SignalCopy account, then open the web dashboard."],
                  ["Can I control SignalCopy from another computer?", "Yes. Sign in to the SignalCopy web dashboard from any browser to manage your connected machines."],
                  ["Can I connect Telegram?", "Yes. Connect your Telegram account, choose the channels, groups or users you want to follow, and start monitoring."],
                  ["Can I connect MetaTrader 5?", "Yes. Connect your MT5 setup to turn the signals you monitor into automated trade execution."],
                  ["Can I connect multiple machines?", "Yes. Connect several Windows PCs or VPS machines to one account, depending on your plan."],
                  ["Is MT5 required?", "No. MT5 is optional. You can use SignalCopy purely to monitor Telegram signals."],
                  ["Does SignalCopy guarantee trading profits?", "SignalCopy is software for automation and monitoring. It does not guarantee profits or trading performance."],
                ].map(([q, a]) => (
                  <AccordionItem key={q} value={q} className="border-border">
                    <AccordionTrigger className="text-left text-[15.5px] font-medium text-ink hover:no-underline">
                      {q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[14.5px] leading-relaxed text-muted-foreground">
                      {a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </Section>

        {/* FINAL CTA */}
        <section className="bg-ink py-24">
          <Reveal className="mx-auto max-w-2xl px-5 text-center">
            <h2 className="text-3xl font-semibold text-background sm:text-[2.5rem] sm:leading-[1.12]">
              Start with one machine.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[16.5px] leading-relaxed text-background/70">
              Install SignalCopy on your Windows PC or VPS and control your setup from anywhere.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="onDark" size="lg" className="w-full sm:w-auto">
                Get Started Free
              </Button>
              <Button variant="onDarkOutline" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#pricing">View Pricing</a>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border bg-background py-14">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <span className="text-[15px] font-semibold tracking-tight text-ink">SignalCopy</span>
              </div>
              <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-muted-foreground">
                Telegram signal monitoring and MT5 automation, from one dashboard.
              </p>
            </div>
            <div>
              <p className="eyebrow">Product</p>
              <ul className="mt-4 space-y-2.5 text-[14px] text-muted-foreground">
                {[
                  ["Product", "#product"],
                  ["How It Works", "#how-it-works"],
                  ["Pricing", "#pricing"],
                  ["FAQ", "#faq"],
                  ["Documentation", "#"],
                  ["Contact", "#"],
                ].map(([l, h]) => (
                  <li key={l}>
                    <a href={h} className="transition-colors hover:text-ink">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Legal</p>
              <ul className="mt-4 space-y-2.5 text-[14px] text-muted-foreground">
                {["Terms", "Privacy", "Risk Disclosure"].map((l) => (
                  <li key={l}>
                    <a href="#" className="transition-colors hover:text-ink">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-6 text-[13px] text-muted-foreground">
            © {new Date().getFullYear()} SignalCopy. Software for monitoring and automation. It does
            not guarantee trading performance.
          </div>
        </div>
      </footer>
    </div>
  );
}
