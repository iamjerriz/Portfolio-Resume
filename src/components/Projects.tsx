'use client';

import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/constants/data';
import ScrollReveal from '@/components/ScrollReveal';
import StaggerReveal, { staggerItem } from '@/components/StaggerReveal';

export default function Projects() {
  return (
    <section id='projects' className='px-6 py-24'>
      <div className='mx-auto max-w-6xl'>
        <ScrollReveal direction='up' className='mb-16 text-center'>
          <p className='mb-2 font-mono text-sm tracking-widest text-accent'>
            <span className='glitch-subtle' data-text='PORTFOLIO'>PORTFOLIO</span>
          </p>
          <h2 className='glitch-hover text-3xl font-bold text-foreground sm:text-4xl' data-text='Featured Projects'>
            Featured Projects
          </h2>
        </ScrollReveal>

        <StaggerReveal className='grid gap-6 sm:grid-cols-2' stagger={0.15}>
          {PROJECTS.map((project) => {
            const Wrapper = 'url' in project && project.url ? 'a' : 'div';
            const linkProps = 'url' in project && project.url
              ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <motion.div key={project.title} variants={staggerItem}>
                <Wrapper
                  {...linkProps}
                  className='group block cursor-pointer rounded-2xl border border-card-border bg-card-bg p-6 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 sm:p-8'
                >
                  <div className='mb-4 flex items-center justify-between'>
                    <span className='rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent'>
                      {project.type}
                    </span>
                    <div className='flex gap-3 text-muted'>
                      <ExternalLink size={18} className='transition-colors group-hover:text-accent' />
                    </div>
                  </div>

                  <h3 className='glitch-hover mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-accent' data-text={project.title}>
                    {project.title}
                  </h3>

                  <p className='mb-6 text-sm leading-relaxed text-muted'>{project.description}</p>

                  <div className='flex flex-wrap gap-2'>
                    {project.tags.map((tag) => (
                      <span key={tag} className='rounded-full border border-card-border px-3 py-1 text-xs text-muted'>
                        {tag}
                      </span>
                    ))}
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
