import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function StatusDot({ live = true }: { live?: boolean }) {
  return live ? (
    <span className="dot-live" />
  ) : (
    <span className="inline-block h-[0.4375rem] w-[0.4375rem] rounded-full bg-muted-foreground/50" />
  );
}

export function Pill({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-medium",
        tone === "accent"
          ? "border-accent/25 bg-accent-soft text-accent"
          : "border-border bg-muted text-muted-foreground",
      )}
    >
      {children}
    </span>
  );
}

export function BrowserFrame({
  url = "app.signalcopy.com",
  children,
  className,
}: {
  url?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card shadow-panel",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-border bg-surface px-3 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        </div>
        <div className="mx-auto w-full max-w-[18rem] rounded-md border border-border bg-background px-3 py-1 text-center font-mono text-[11px] text-muted-foreground">
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

export function WindowFrame({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("overflow-hidden rounded-xl border border-border bg-card shadow-card", className)}
    >
      <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-2.5">
        <span className="text-xs font-semibold text-ink">{title}</span>
        <div className="flex gap-3 text-muted-foreground">
          <span className="text-[10px]">—</span>
          <span className="text-[10px]">□</span>
          <span className="text-[10px]">✕</span>
        </div>
      </div>
      {children}
    </div>
  );
}

function StatCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-background p-3">
      <p className="text-[11px] text-muted-foreground">{label}</p>
      <p className="mt-1 text-xl font-semibold tabular-nums text-ink">{value}</p>
    </div>
  );
}

function StatusRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2.5">
      <span className="text-[13px] text-muted-foreground">{label}</span>
      <span className="flex items-center gap-1.5 text-[13px] font-medium text-ink">
        <StatusDot />
        {value}
      </span>
    </div>
  );
}

export function HeroDashboard() {
  const signals = [
    { pair: "GBPUSD", side: "BUY", state: "Executed" },
    { pair: "XAUUSD", side: "SELL", state: "Executed" },
    { pair: "EURUSD", side: "BUY", state: "Monitoring" },
  ];

  return (
    <BrowserFrame>
      <div className="bg-background p-4 sm:p-6">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-baseline gap-3">
            <span className="text-sm font-semibold tracking-tight text-ink">SignalCopy</span>
            <span className="text-xs text-muted-foreground">Overview</span>
          </div>
          <span className="hidden h-6 w-6 rounded-full bg-muted sm:block" />
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <StatusRow label="Connected Machine" value="Online" />
          <StatusRow label="Telegram" value="Connected" />
          <StatusRow label="MT5" value="Connected" />
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <StatCell label="Signals Today" value="24" />
          <StatCell label="Open Trades" value="4" />
        </div>

        <div className="mt-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Recent Signals
          </p>
          <div className="mt-2 divide-y divide-border overflow-hidden rounded-lg border border-border">
            {signals.map((s) => (
              <div key={s.pair} className="flex items-center justify-between bg-background px-3 py-2.5">
                <span className="font-mono text-[13px] font-medium text-ink">{s.pair}</span>
                <span
                  className={cn(
                    "font-mono text-[11px] font-semibold",
                    s.side === "BUY" ? "text-accent" : "text-ink-soft",
                  )}
                >
                  {s.side}
                </span>
                <Pill tone={s.state === "Executed" ? "accent" : "neutral"}>{s.state}</Pill>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function InstallMockup() {
  return (
    <WindowFrame title="SignalCopy Setup">
      <div className="space-y-4 bg-background p-5">
        <p className="text-sm text-muted-foreground">Installing…</p>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full w-3/4 rounded-full bg-accent" />
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2.5">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-accent-foreground">
            ✓
          </span>
          <span className="text-[13px] text-ink">SignalCopy Agent</span>
        </div>
      </div>
    </WindowFrame>
  );
}

export function ConnectMockup() {
  return (
    <WindowFrame title="SignalCopy">
      <div className="space-y-4 bg-background p-5">
        <div>
          <p className="text-sm font-semibold text-ink">Connect this device</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Sign in to link this machine to your account.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-surface px-3 py-2.5">
          <p className="text-[11px] text-muted-foreground">Account</p>
          <p className="font-mono text-[13px] text-ink">user@example.com</p>
        </div>
        <div className="rounded-md bg-accent px-3 py-2 text-center text-[13px] font-medium text-accent-foreground">
          Connect
        </div>
      </div>
    </WindowFrame>
  );
}

export function RemoteMockup() {
  return (
    <BrowserFrame url="sc.com" className="shadow-card">
      <div className="space-y-3 bg-background p-5">
        <p className="text-sm font-semibold text-ink">Dashboard</p>
        <StatusRow label="Machine" value="Online" />
        <StatusRow label="Telegram" value="Connected" />
        <StatusRow label="MT5" value="Connected" />
      </div>
    </BrowserFrame>
  );
}

export function TelegramMockup() {
  const sources = ["Forex Signals", "Gold Signals", "GBP Signals"];
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
      <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3">
        <span className="text-[13px] font-semibold text-ink">Telegram Sources</span>
        <Pill tone="accent">
          <StatusDot />
          Monitoring
        </Pill>
      </div>
      <div className="divide-y divide-border">
        {sources.map((s) => (
          <div key={s} className="flex items-center justify-between px-4 py-3">
            <span className="flex items-center gap-2.5 text-[13px] text-ink">
              <StatusDot />
              {s}
            </span>
            <span className="text-[11px] text-muted-foreground">Selected</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Mt5Mockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
      <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3">
        <span className="text-[13px] font-semibold text-ink">MetaTrader 5</span>
        <Pill tone="accent">
          <StatusDot />
          Connected
        </Pill>
      </div>
      <dl className="divide-y divide-border">
        {[
          ["Status", "Connected"],
          ["Account", "••••••••4821"],
          ["Broker", "Demo Broker"],
        ].map(([k, v]) => (
          <div key={k} className="flex items-center justify-between px-4 py-3">
            <dt className="text-[13px] text-muted-foreground">{k}</dt>
            <dd className="font-mono text-[13px] text-ink">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function MachinesMockup() {
  const machines = ["Main VPS", "Home PC", "Trading VPS"];
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
      <div className="border-b border-border bg-surface px-4 py-3 text-[13px] font-semibold text-ink">
        My Machines
      </div>
      <div className="divide-y divide-border">
        {machines.map((m) => (
          <div key={m} className="flex items-center justify-between px-4 py-3.5">
            <span className="flex items-center gap-2.5 text-[13px] font-medium text-ink">
              <StatusDot />
              {m}
            </span>
            <span className="text-[11px] text-muted-foreground">Online</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FullDashboard() {
  const nav = ["Overview", "Machines", "Telegram", "Signals", "MT5", "Trades", "Settings"];
  const activity = [
    ["10:42", "GBPUSD BUY", "Signal received"],
    ["10:43", "GBPUSD", "Trade executed"],
    ["10:51", "XAUUSD SELL", "Signal received"],
  ];

  return (
    <BrowserFrame>
      <div className="grid bg-background md:grid-cols-[180px_1fr]">
        <aside className="hidden border-r border-border bg-surface p-3 md:block">
          <p className="px-2 pb-3 text-sm font-semibold tracking-tight text-ink">SignalCopy</p>
          <nav className="space-y-0.5">
            {nav.map((n, i) => (
              <span
                key={n}
                className={cn(
                  "block rounded-md px-2 py-1.5 text-[13px]",
                  i === 0 ? "bg-background font-medium text-ink shadow-sm" : "text-muted-foreground",
                )}
              >
                {n}
              </span>
            ))}
          </nav>
        </aside>

        <div className="p-4 sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
            <div>
              <p className="text-[11px] text-muted-foreground">Machine</p>
              <p className="text-base font-semibold text-ink">Main Windows VPS</p>
            </div>
            <Pill tone="accent">
              <StatusDot />
              Online
            </Pill>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <StatusRow label="Telegram" value="Connected" />
            <StatusRow label="MT5" value="Connected" />
            <StatCell label="Signals Today" value="24" />
            <StatCell label="Open Trades" value="4" />
          </div>

          <div className="mt-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Recent Activity
            </p>
            <div className="mt-2 divide-y divide-border overflow-hidden rounded-lg border border-border">
              {activity.map(([time, pair, note]) => (
                <div key={time} className="flex items-center gap-4 px-3 py-3">
                  <span className="font-mono text-[11px] text-muted-foreground">{time}</span>
                  <span className="font-mono text-[13px] font-medium text-ink">{pair}</span>
                  <span className="ml-auto text-[12px] text-muted-foreground">{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
