'use client';

import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '@/constants/data';
import ScrollReveal from '@/components/ScrollReveal';

export default function Education() {
  return (
    <section id='education' className='px-6 py-24'>
      <div className='mx-auto max-w-4xl'>
        <ScrollReveal direction='up' className='mb-16 text-center'>
          <p className='mb-2 font-mono text-sm tracking-widest text-accent'>
            <span className='glitch-subtle' data-text='EDUCATION'>EDUCATION</span>
          </p>
          <h2 className='glitch-hover text-3xl font-bold text-foreground sm:text-4xl' data-text='Academic Background'>
            Academic Background
          </h2>
        </ScrollReveal>

        <ScrollReveal direction='none' delay={0.2} className='mx-auto max-w-xl'>
          <div className='glow-pulse rounded-2xl border border-card-border bg-card-bg p-8 text-center'>
            <div className='mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent'>
              <GraduationCap size={32} />
            </div>

            <h3 className='glitch-hover mb-2 text-2xl font-bold text-foreground' data-text={EDUCATION.degree}>
              {EDUCATION.degree}
            </h3>
            <p className='glitch-hover mb-4 text-lg text-accent' data-text={EDUCATION.school}>
              {EDUCATION.school}
            </p>
            <p className='text-sm text-muted'>{EDUCATION.year}</p>

            <div className='mt-8 border-t border-card-border pt-6'>
              <p className='text-sm leading-relaxed text-muted'>{EDUCATION.description}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
