import { type FormEvent, type ReactNode, useEffect, useMemo, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { ArrowDownRight, ArrowUpRight, Check, ChevronDown, Circle, Code2, Database, Download, ExternalLink, Github, GitBranch, GraduationCap, Layers3, Linkedin, Mail, Menu, Moon, Network, Send, Server, ShieldCheck, Sparkles, Sun, Terminal, X, Zap } from 'lucide-react';
import { buildTracks, experiences, languages, projects, skillGroups, type ProjectCategory } from '@/data/portfolio';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(() => localStorage.getItem('amine-theme') === 'light');
  const [filter, setFilter] = useState<ProjectCategory>('All');
  const [notice, setNotice] = useState('');
  const filteredProjects = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.category === filter), [filter]);

  useEffect(() => {
    document.documentElement.classList.toggle('light', lightMode);
    document.documentElement.classList.toggle('dark', !lightMode);
    localStorage.setItem('amine-theme', lightMode ? 'light' : 'dark');
  }, [lightMode]);

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(''), 4200);
  };

  const downloadCv = () => {
    window.open(`${import.meta.env.BASE_URL}cv/Amine_Boulila_CV.pdf`, '_blank', 'noopener,noreferrer');
    showNotice('Opening the CV PDF.');
  };
  const placeholderLink = (label: string) => showNotice(`${label} URL placeholder — add the public link when ready.`);

  return (
    <div className="noise min-h-[100dvh] overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#top" className="group flex items-center gap-3" data-testid="link-brand">
            <span className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground transition-transform group-hover:rotate-[-6deg]"><Terminal size={17} /></span>
            <span className="font-mono text-sm font-medium tracking-tight">amine<span className="text-primary">.</span>boulila</span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => <a key={item.href} href={item.href} className="font-mono text-[11px] uppercase tracking-[.13em] text-muted-foreground transition-colors hover:text-foreground" data-testid={`link-nav-${item.label.toLowerCase()}`}>{item.label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setLightMode((value) => !value)} className="grid size-9 place-items-center rounded-md border border-border text-muted-foreground transition hover:border-primary hover:text-primary" aria-label="Toggle color theme" data-testid="button-theme-toggle">{lightMode ? <Moon size={16} /> : <Sun size={16} />}</button>
              <a href="#contact" className="hidden items-center gap-2 rounded-md bg-primary px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[.1em] text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_hsl(var(--primary)/.18)] sm:flex" data-testid="link-header-contact">Open to internship <ArrowUpRight size={14} /></a>
            <button onClick={() => setMenuOpen((value) => !value)} className="grid size-9 place-items-center rounded-md border border-border lg:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
          </div>
        </div>
        {menuOpen && <div className="border-t border-border bg-card px-5 py-4 lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => <a key={item.href} onClick={() => setMenuOpen(false)} href={item.href} className="rounded-md px-3 py-3 font-mono text-xs uppercase tracking-[.12em] text-muted-foreground hover:bg-muted hover:text-foreground" data-testid={`link-mobile-${item.label.toLowerCase()}`}>{item.label}</a>)}
          </nav>
        </div>}
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden border-b border-border/70">
          <div className="grid-paper pointer-events-none absolute inset-0 -z-10 opacity-55" />
          <div className="absolute -right-40 top-14 -z-10 size-[28rem] rounded-full bg-primary/10 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-16 md:grid-cols-[1.1fr_.9fr] md:items-end md:pb-32 md:pt-24 lg:px-10">
            <div className="reveal">
              <p className="mb-7 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[.18em] text-primary"><span className="inline-block size-1.5 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/.12)]" /> Tunisia · Software engineering student</p>
              <h1 className="max-w-4xl text-balance text-[3.45rem] font-extrabold leading-[.96] tracking-[-.065em] sm:text-6xl md:text-7xl lg:text-[6.7rem]">Build systems<br /><span className="text-primary">worth running.</span></h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl">I’m <strong className="font-semibold text-foreground">Amine Boulila</strong> — a software engineering student building AI-powered applications, full-stack systems and cloud-ready software.</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#projects" className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-1 hover:shadow-[0_12px_30px_hsl(var(--primary)/.2)]" data-testid="link-hero-projects">View projects <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></a>
                <button onClick={downloadCv} className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-5 py-3.5 text-sm font-semibold transition hover:-translate-y-1 hover:border-primary hover:text-primary" data-testid="button-download-cv"><Download size={16} /> Download CV</button>
              </div>
                <div className="mt-8 flex flex-wrap items-center gap-5 font-mono text-xs text-muted-foreground">
                <a href="https://github.com/amine-boulila" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-primary" data-testid="button-hero-github"><Github size={15} /> GitHub</a>
                <a href="https://linkedin.com/in/amin-boulila" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-primary" data-testid="button-hero-linkedin"><Linkedin size={15} /> LinkedIn</a>
                <a href="mailto:amin.boulila@gmail.com" className="inline-flex items-center gap-2 transition hover:text-primary" data-testid="link-hero-email"><Mail size={15} /> Email</a>
              </div>
            </div>
            <div className="reveal reveal-delay-2 relative min-h-[22rem] md:min-h-[28rem]">
              <div className="absolute inset-0 rounded-xl border border-border/80 bg-card/55 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-border pb-3 font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground"><span>system.map</span><span className="text-primary">online</span></div>
                <div className="relative mt-5 h-[calc(100%-2.4rem)] overflow-hidden rounded-lg bg-background/70">
                  <div className="absolute inset-0 grid-paper opacity-70" />
                  <div className="absolute left-[19%] top-[18%] size-3 rounded-full bg-primary shadow-[0_0_0_8px_hsl(var(--primary)/.12),0_0_24px_hsl(var(--primary)/.5)]" />
                  <div className="absolute left-[67%] top-[32%] size-2 rounded-full bg-primary/70 shadow-[0_0_0_7px_hsl(var(--primary)/.1)]" />
                  <div className="absolute left-[42%] top-[66%] size-2 rounded-full bg-primary/70" />
                  <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 500 330" preserveAspectRatio="none" aria-hidden="true"><path d="M95 70 L335 105 L210 220 L95 70 M335 105 L420 250 L210 220 M210 220 L92 285" fill="none" stroke="hsl(var(--primary))" strokeOpacity=".45" strokeWidth="1" strokeDasharray="4 7" /></svg>
                  <div className="absolute bottom-5 left-5 right-5 border-l border-primary pl-3 font-mono text-[10px] leading-5 text-muted-foreground"><span className="text-primary">const</span> direction = [<br /><span className="pl-3 text-foreground">'ai'</span>, <span className="text-foreground">'full-stack'</span>, <span className="text-foreground">'cloud'</span><br />];<span className="cursor-blink ml-1 text-primary">_</span></div>
                  <div className="float-slow absolute right-5 top-5 grid size-12 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary"><Network size={20} /></div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-3 rounded-lg border border-border bg-card px-4 py-3 font-mono text-[10px] uppercase tracking-[.1em] shadow-xl md:-left-8"><span className="mr-2 inline-block size-1.5 rounded-full bg-primary" /> Open to internship · Jan 2027</div>
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl items-center gap-5 px-5 pb-7 font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground lg:px-10"><span className="h-px w-10 bg-border" /> Scroll to inspect the workbench <ChevronDown size={13} /></div>
        </section>

        <section id="about" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 lg:px-10 lg:py-32">
          <SectionIntro number="01" label="About" title="Engineering with a reason to ship." />
          <div className="mt-14 grid gap-12 md:grid-cols-[.72fr_1.28fr] md:gap-24">
            <p className="line-accent max-w-sm text-2xl font-semibold leading-tight tracking-[-.03em]">The interesting part is where software meets the messy, useful world.</p>
            <div className="max-w-2xl space-y-6 text-base leading-8 text-muted-foreground"><p>I’m studying Software Engineering at the Faculty of Sciences of Tunis, with a focus on the systems behind useful products — the APIs, data flows, models and infrastructure that make an idea dependable.</p><p>My work sits across AI/ML, full-stack engineering, cloud and DevOps, data engineering, and distributed systems. I like solving practical engineering problems and turning experiments into software that can be understood, extended and run.</p><p className="text-foreground">I’m looking for a challenging <span className="text-primary">4–6 month internship / PFE opportunity starting January 2027</span>, with the possibility of continuing full-time afterward.</p></div>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            <InfoCell icon={<Layers3 size={18} />} label="Working across" value="AI · full-stack · cloud" />
            <InfoCell icon={<Code2 size={18} />} label="Approach" value="Prototype → production" />
            <InfoCell icon={<ShieldCheck size={18} />} label="Currently" value="Open to internship · 01.2027" />
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-border bg-card px-5 py-4"><span className="font-mono text-[10px] uppercase tracking-[.12em] text-primary">Languages</span>{languages.map((language) => <span key={language.name} className="font-mono text-xs text-muted-foreground"><strong className="font-medium text-foreground">{language.name}</strong> · {language.level}</span>)}</div>
        </section>

        <section id="skills" className="scroll-mt-20 border-y border-border bg-card/45">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
            <SectionIntro number="02" label="Tech stack" title="A wide toolkit, grounded in fundamentals." description="No percentages. No decorative skill bars. Just the technologies I use to think, build, connect, and ship." />
            <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => <div key={group.label} className="group bg-background p-6 transition hover:bg-muted/60"><div className="mb-10 flex items-start justify-between"><span className="font-mono text-xs text-primary">{group.index}</span><ArrowUpRight size={15} className="text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" /></div><h3 className="text-lg font-semibold">{group.label}</h3><div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded border border-border bg-card px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground transition group-hover:border-primary/30">{item}</span>)}</div></div>)}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 lg:px-10 lg:py-32">
           <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><SectionIntro number="03" label="Selected work" title="Projects with real constraints." description="A living record of systems, interfaces, and experiments — with the implementation details left visible." /><div className="flex flex-wrap gap-2 md:pb-1">{(['All', 'AI / ML', 'Full-stack', 'Backend', 'Cloud / DevOps'] as ProjectCategory[]).map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-full border px-3.5 py-2 font-mono text-[11px] transition ${filter === item ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground hover:border-primary hover:text-primary'}`} data-testid={`button-filter-${item.toLowerCase().replaceAll(' ', '-')}`}>{item}</button>)}</div></div>
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {filteredProjects.length === 0 ? <div className="col-span-full rounded-xl border border-dashed border-border p-16 text-center"><p className="font-mono text-sm text-muted-foreground">No projects in this filter yet.</p></div> : filteredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onNotice={showNotice} />)}
          </div>
        </section>

        <section id="experience" className="scroll-mt-20 border-y border-border bg-card/45">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32"><SectionIntro number="04" label="Experience" title="Learning inside real teams." /><div className="mt-14 max-w-4xl">{experiences.map((experience, index) => <div key={experience.company} className="group grid gap-5 border-t border-border py-8 md:grid-cols-[7rem_1fr] md:gap-10"><div className="font-mono text-sm text-primary">{experience.period}</div><div><div className="flex flex-col justify-between gap-2 sm:flex-row"><div><h3 className="text-xl font-semibold tracking-tight">{experience.company}</h3><p className="mt-1 text-sm text-muted-foreground">{experience.role}</p></div><span className="font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground">0{index + 1} / experience</span></div><div className="mt-6 flex flex-wrap gap-2">{experience.focus.map((item) => <span key={item} className="rounded border border-border bg-background px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground transition group-hover:border-primary/40">{item}</span>)}</div></div></div>)}</div></div>
        </section>

        <section id="education" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 lg:px-10 lg:py-32"><SectionIntro number="05" label="Education" title="A foundation for the long problems." /><div className="mt-14 grid gap-6 md:grid-cols-[1fr_.65fr]"><div className="rounded-xl border border-border bg-card p-7 md:p-9"><div className="mb-12 flex items-center justify-between"><div className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary"><GraduationCap size={21} /></div><span className="font-mono text-xs text-muted-foreground">2027 / expected</span></div><h3 className="text-2xl font-semibold tracking-tight">Faculty of Sciences of Tunis (FST)</h3><p className="mt-2 text-muted-foreground">Software Engineering</p><div className="mt-8 border-t border-border pt-5 font-mono text-xs text-muted-foreground">Engineering studies · Expected graduation 2027</div></div><div className="rounded-xl border border-primary/25 bg-primary/10 p-7 md:p-9"><Sparkles className="text-primary" size={20} /><p className="mt-8 text-xl font-semibold leading-snug tracking-tight">Ranked in the Top 10 of my promotion during pre-engineering studies.</p></div></div></section>

        <section id="building" className="scroll-mt-20 border-y border-border bg-card/45"><div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32"><SectionIntro number="06" label="Currently building" title="The workbench stays open." description="Focus areas I’m actively learning, building, and exploring. This is the part that changes as the questions get better." /><div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">{buildTracks.map((track, index) => <div key={track.title} className="bg-background p-7 transition hover:bg-muted/60 md:p-9"><div className="flex items-center justify-between"><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span><span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.12em] text-primary"><Circle size={8} fill="currentColor" /> {track.status}</span></div><h3 className="mt-12 max-w-sm text-xl font-semibold tracking-tight">{track.title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{track.note}</p></div>)}</div></div></section>

           <section id="github" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 lg:px-10 lg:py-32"><div className="grid gap-12 md:grid-cols-[.8fr_1.2fr] md:items-end"><div><p className="font-mono text-[11px] uppercase tracking-[.18em] text-primary">07 / Building in public</p><h2 className="mt-5 max-w-lg text-4xl font-bold tracking-[-.04em] sm:text-5xl">The code is part of the conversation.</h2></div><div className="max-w-xl"><p className="text-lg leading-8 text-muted-foreground">I like turning what I learn into working software, experiments and reusable tools.</p><a href="https://github.com/amine-boulila" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-md border border-border px-4 py-3 font-mono text-xs uppercase tracking-[.1em] transition hover:border-primary hover:text-primary" data-testid="button-github-public"><Github size={15} /> Visit GitHub <ExternalLink size={14} /></a></div></div><div className="mt-14 rounded-xl border border-dashed border-border bg-card/55 p-6 md:p-8"><div className="flex flex-col justify-between gap-4 border-b border-border pb-5 sm:flex-row sm:items-center"><div><p className="font-mono text-xs text-primary">amine-boulila</p><p className="mt-1 text-sm text-muted-foreground">Repository cards can connect to the public profile as the work evolves.</p></div><GitBranch className="text-muted-foreground" size={20} /></div><div className="grid gap-3 pt-5 md:grid-cols-3"><RepoPlaceholder title="Latest repository" /><RepoPlaceholder title="Experiment / lab" /><RepoPlaceholder title="Developer tool" /></div></div></section>

         <section id="contact" className="scroll-mt-20 border-t border-border"><div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[1fr_.85fr] lg:gap-24"><div><p className="font-mono text-[11px] uppercase tracking-[.18em] text-primary">08 / Contact</p><h2 className="mt-5 max-w-xl text-5xl font-bold leading-[.98] tracking-[-.055em] sm:text-6xl">Let’s build something useful.</h2><p className="mt-7 max-w-lg text-lg leading-8 text-muted-foreground">I’m currently looking for a 4–6 month internship / PFE starting January 2027 in AI/ML, full-stack engineering, cloud/DevOps or related software engineering roles.</p><div className="mt-10 flex flex-wrap gap-3"><a href="https://linkedin.com/in/amin-boulila" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-3 font-mono text-xs transition hover:border-primary hover:text-primary" data-testid="button-contact-linkedin"><Linkedin size={15} /> LinkedIn</a><a href="https://github.com/amine-boulila" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-3 font-mono text-xs transition hover:border-primary hover:text-primary" data-testid="button-contact-github"><Github size={15} /> GitHub</a><button onClick={downloadCv} className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-3 font-mono text-xs transition hover:border-primary hover:text-primary" data-testid="button-contact-cv"><Download size={15} /> Download CV</button></div></div><form onSubmit={(event) => { event.preventDefault(); const form = event.currentTarget; const data = new FormData(form); const subject = encodeURIComponent(`Portfolio message from ${data.get('name') || 'a visitor'}`); const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`); showNotice('Opening your email client with a mailto draft.'); window.location.href = `mailto:amin.boulila@gmail.com?subject=${subject}&body=${body}`; }} className="rounded-xl border border-border bg-card p-6 md:p-8"><div className="mb-8 flex items-center justify-between"><span className="font-mono text-xs text-primary">// send a note</span><Send size={17} className="text-muted-foreground" /></div><div className="grid gap-5"><label className="grid gap-2"><span className="font-mono text-[10px] uppercase tracking-[.12em] text-muted-foreground">Name</span><input required name="name" type="text" placeholder="Your name" className="rounded-md border border-input bg-background px-3.5 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/15" data-testid="input-contact-name" /></label><label className="grid gap-2"><span className="font-mono text-[10px] uppercase tracking-[.12em] text-muted-foreground">Email</span><input required name="email" type="email" placeholder="you@company.com" className="rounded-md border border-input bg-background px-3.5 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/15" data-testid="input-contact-email" /></label><label className="grid gap-2"><span className="font-mono text-[10px] uppercase tracking-[.12em] text-muted-foreground">Message</span><textarea required name="message" rows={5} placeholder="What are you building?" className="resize-none rounded-md border border-input bg-background px-3.5 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/15" data-testid="input-contact-message" /></label><button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-[0_8px_22px_hsl(var(--primary)/.18)]" data-testid="button-contact-submit">Compose email <ArrowUpRight size={16} /></button><p className="font-mono text-[10px] leading-5 text-muted-foreground">This form opens a message in your email client via mailto.</p></div></form></div></div></section>
      </main>

      <footer className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 font-mono text-[10px] uppercase tracking-[.12em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10"><span>© {new Date().getFullYear()} Amine Boulila</span><span className="flex items-center gap-2"><Zap size={12} className="text-primary" /> Built with curiosity · Tunisia</span><a href="#top" className="transition hover:text-primary" data-testid="link-back-top">Back to top ↑</a></div></footer>
      {notice && <div role="status" className="fixed bottom-5 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-start gap-3 rounded-lg border border-primary/30 bg-card px-4 py-3 text-sm shadow-2xl"><Check className="mt-0.5 shrink-0 text-primary" size={16} /><span>{notice}</span><button onClick={() => setNotice('')} className="ml-auto text-muted-foreground hover:text-foreground" aria-label="Dismiss message" data-testid="button-dismiss-notice"><X size={15} /></button></div>}
    </div>
  );
}

const navItems = [
  { label: 'About', href: '#about' }, { label: 'Skills', href: '#skills' }, { label: 'Projects', href: '#projects' }, { label: 'Experience', href: '#experience' }, { label: 'Education', href: '#education' }, { label: 'Building', href: '#building' }, { label: 'Contact', href: '#contact' },
];

function SectionIntro({ number, label, title, description }: { number: string; label: string; title: string; description?: string }) {
  return <div className="max-w-2xl"><p className="font-mono text-[11px] uppercase tracking-[.18em] text-primary">{number} / {label}</p><h2 className="mt-5 text-4xl font-bold leading-[1.02] tracking-[-.05em] sm:text-5xl">{title}</h2>{description && <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">{description}</p>}</div>;
}

function InfoCell({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <div className="bg-card p-5"><div className="flex items-center gap-3 text-primary">{icon}<span className="font-mono text-[10px] uppercase tracking-[.12em] text-muted-foreground">{label}</span></div><p className="mt-5 text-sm font-semibold">{value}</p></div>;
}

function ProjectCard({ project, index, onNotice }: { project: (typeof projects)[number]; index: number; onNotice: (message: string) => void }) {
  return <article className={`group relative overflow-hidden rounded-xl border bg-card transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_18px_50px_hsl(var(--background)/.25)] ${project.standout ? 'border-primary/30 lg:col-span-2' : 'border-border'}`} data-testid={`card-project-${project.id}`}>
    <div className="absolute right-6 top-6 font-mono text-[10px] text-muted-foreground">0{index + 1} / {project.category}</div>
    <div className="p-6 md:p-8"><div className="mb-12 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-md bg-primary/10 text-primary">{project.category === 'AI / ML' ? <Sparkles size={18} /> : project.category === 'Full-stack' ? <Layers3 size={18} /> : <Server size={18} />}</span><span className="font-mono text-[10px] uppercase tracking-[.15em] text-primary">{project.eyebrow}</span></div><h3 className="max-w-3xl text-2xl font-semibold tracking-[-.03em] md:text-3xl">{project.name}</h3><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{project.description}</p>{project.architecture && <div className="mt-7 rounded-lg border border-primary/20 bg-primary/5 p-4 font-mono text-xs leading-6 text-primary md:text-sm">{project.architecture}</div>}<div className={`mt-8 grid gap-7 border-t border-border pt-7 ${project.standout ? 'md:grid-cols-2' : ''}`}><div><p className="font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground">The problem</p><p className="mt-3 text-sm leading-6">{project.problem}</p></div><div><p className="font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground">My contribution</p><p className="mt-3 text-sm leading-6">{project.contribution}</p></div></div><div className="mt-8 flex flex-wrap items-center justify-between gap-4"><div className="flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground">{technology}</span>)}</div><div className="flex shrink-0 gap-3"><button onClick={() => onNotice(`${project.name}: GitHub URL placeholder — add the repository link when ready.`)} className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[.1em] text-muted-foreground transition hover:text-primary" data-testid={`button-project-github-${project.id}`}><Github size={14} /> Code</button><button onClick={() => onNotice(`${project.name}: project demo placeholder — add a demo link when ready.`)} className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[.1em] text-muted-foreground transition hover:text-primary" data-testid={`button-project-demo-${project.id}`}><ExternalLink size={14} /> Demo</button></div></div></div>
  </article>;
}

function RepoPlaceholder({ title }: { title: string }) {
  return <div className="rounded-lg border border-border/80 bg-background p-4"><div className="flex items-center gap-2 text-primary"><Database size={14} /><span className="font-mono text-[10px] uppercase tracking-[.1em]">Repository</span></div><p className="mt-8 text-sm font-semibold">{title}</p><p className="mt-2 font-mono text-[10px] text-muted-foreground">[connect GitHub API later]</p></div>;
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
