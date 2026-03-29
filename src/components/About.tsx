'use client';

import { Code2, Layout, Server, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';
import { ABOUT } from '@/constants/data';
import ScrollReveal from '@/components/ScrollReveal';
import StaggerReveal, { staggerItem } from '@/components/StaggerReveal';

const iconMap = {
  Code2: <Code2 size={24} />,
  Layout: <Layout size={24} />,
  Server: <Server size={24} />,
  GitBranch: <GitBranch size={24} />,
};

export default function About() {
  return (
    <section id='about' className='px-6 py-24'>
      <div className='mx-auto max-w-6xl'>
        <ScrollReveal direction='up' className='mb-16 text-center'>
          <p className='mb-2 font-mono text-sm tracking-widest text-accent'>
            <span className='glitch-subtle' data-text='ABOUT ME'>ABOUT ME</span>
          </p>
          <h2 className='glitch-hover text-3xl font-bold text-foreground sm:text-4xl' data-text='Who I Am'>
            Who I Am
          </h2>
        </ScrollReveal>

        <div className='grid gap-12 lg:grid-cols-2'>
          {/* Left: text */}
          <ScrollReveal direction='left'>
            <div>
              {ABOUT.bio.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`text-lg leading-relaxed text-muted ${idx < ABOUT.bio.length - 1 ? 'mb-6' : 'mb-8'}`}
                >
                  {paragraph}
                </p>
              ))}

              {/* Skill tags */}
              <StaggerReveal className='flex flex-wrap gap-2' stagger={0.05}>
                {ABOUT.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={staggerItem}
                    className='rounded-full border border-card-border bg-card-bg px-4 py-1.5 text-sm text-foreground'
                  >
                    {skill}
                  </motion.span>
                ))}
              </StaggerReveal>
            </div>
          </ScrollReveal>

          {/* Right: highlight cards */}
          <StaggerReveal className='grid grid-cols-1 gap-4 sm:grid-cols-2' stagger={0.15}>
            {ABOUT.highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className='rounded-2xl border border-card-border bg-card-bg p-6 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5'
              >
                <div className='mb-3 text-accent'>{iconMap[item.icon]}</div>
                <h3 className='glitch-hover mb-1 text-lg font-semibold text-foreground' data-text={item.title}>
                  {item.title}
                </h3>
                <p className='text-sm leading-relaxed text-muted'>{item.desc}</p>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
