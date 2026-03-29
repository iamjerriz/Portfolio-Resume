import { ArrowDown, FileText } from 'lucide-react';
import { PERSONAL } from '@/constants/data';
import TypeWriter from '@/components/TypeWriter';

export default function Hero() {
  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden px-6'>
      {/* Background gradient orbs */}
      <div className='pointer-events-none absolute -left-40 -top-40 h-125 w-125 rounded-full bg-accent/5 blur-[120px]' />
      <div className='pointer-events-none absolute -bottom-40 -right-40 h-100 w-100 rounded-full bg-emerald-500/5 blur-[100px]' />

      <div className='relative z-10 max-w-3xl text-center'>
        <p className='animate-fade-in-up mb-4 font-mono text-sm tracking-widest '>Web developer</p>

        <h1 className='animate-fade-in-up-delay-1 mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl'>
          <TypeWriter words={[PERSONAL.role, PERSONAL.fullName]} className='text-accent' />
        </h1>

        <p className='animate-fade-in-up-delay-2 mx-auto mb-10 max-w-xl text-lg leading-relaxed'>{PERSONAL.summary}</p>

        <div className='animate-fade-in-up-delay-3 flex flex-col items-center justify-center gap-4 sm:flex-row'>
          <a
            href='#contact'
            className='inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-background transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25'
          >
            Get in Touch
          </a>
          <a
            href='#experience'
            className='inline-flex items-center gap-2 rounded-full border border-card-border px-8 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent'
          >
            <FileText size={16} />
            View Resume
          </a>
        </div>

        <a href='#about' className='mt-16 inline-flex animate-bounce text-muted transition-colors hover:text-accent' aria-label='Scroll to about'>
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
