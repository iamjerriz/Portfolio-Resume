'use client';

import { Briefcase } from 'lucide-react';
import { EXPERIENCES } from '@/constants/data';
import ScrollReveal from '@/components/ScrollReveal';

export default function Experience() {
  return (
    <section id='experience' className='px-6 py-24'>
      <div className='mx-auto max-w-4xl'>
        <ScrollReveal direction='up' className='mb-16 text-center'>
          <p className='mb-2 font-mono text-sm tracking-widest text-accent'>
            <span className='glitch-subtle' data-text='CAREER'>CAREER</span>
          </p>
          <h2 className='glitch-hover text-3xl font-bold text-foreground sm:text-4xl' data-text='Work Experience'>
            Work Experience
          </h2>
        </ScrollReveal>

        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-4.75 top-0 hidden h-full w-px bg-card-border md:block' />

          <div className='space-y-12'>
            {EXPERIENCES.map((exp, idx) => (
              <ScrollReveal
                key={idx}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={idx * 0.15}
              >
                <div className='relative flex gap-8'>
                  {/* Timeline dot */}
                  <div className='hidden shrink-0 md:block'>
                    <div className='relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-card-bg text-accent'>
                      <Briefcase size={18} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className='w-full rounded-2xl border border-card-border bg-card-bg p-6 transition-all hover:border-accent/30 sm:p-8'>
                    <div className='mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
                      <div>
                        <h3 className='glitch-hover text-xl font-bold text-foreground' data-text={exp.role}>{exp.role}</h3>
                        <p className='text-accent'>{exp.company}</p>
                        {exp.location && <p className='text-xs text-muted'>{exp.location}</p>}
                      </div>
                      <div className='text-right'>
                        <p className='text-sm text-muted'>{exp.period}</p>
                        <p className='text-xs text-muted'>{exp.duration}</p>
                      </div>
                    </div>

                    <ul className='space-y-2'>
                      {exp.description.map((item, i) => (
                        <li key={i} className='flex items-start gap-3 text-sm leading-relaxed text-muted'>
                          <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent' />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {exp.techStack && (
                      <div className='mt-5 flex flex-wrap gap-2'>
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className='rounded-full border border-card-border px-3 py-1 font-mono text-xs text-muted'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
