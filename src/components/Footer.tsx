'use client';

import { Linkedin, Mail } from 'lucide-react';
import { PERSONAL } from '@/constants/data';
import ScrollReveal from '@/components/ScrollReveal';

export default function Footer() {
  return (
    <footer className='border-t border-card-border px-6 py-12'>
      <ScrollReveal direction='up' duration={0.5}>
        <div className='mx-auto flex max-w-6xl flex-col items-center gap-6 text-center'>
          <a href='#' className='glitch-hover font-mono text-lg font-bold text-accent' data-text={PERSONAL.logo}>
            {PERSONAL.logo}
          </a>

          <div className='flex items-center gap-6'>
            <a
              href={`mailto:${PERSONAL.email}`}
              className='text-muted transition-colors hover:text-accent'
              aria-label='Email'
            >
              <Mail size={20} />
            </a>
            <a
              href={PERSONAL.jobStreetUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted transition-colors hover:text-accent'
              aria-label='JobStreet Profile'
            >
              <Linkedin size={20} />
            </a>
          </div>

          <p className='text-sm text-muted'>
            &copy; {new Date().getFullYear()} {PERSONAL.fullName}. All rights reserved.
          </p>
        </div>
      </ScrollReveal>
    </footer>
  );
}
