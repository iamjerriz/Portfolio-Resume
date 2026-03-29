'use client';

import { Mail, MapPin, Send, User, Loader2 } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { PERSONAL, CONTACT } from '@/constants/data';
import ScrollReveal from '@/components/ScrollReveal';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'b9c617ae-d32c-4292-86e2-448aec09a08e',
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          subject: `Portfolio Contact: ${formData.get('name')}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Failed to send message. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Failed to send message. Please check your connection.');
    }
  }

  return (
    <section id='contact' className='px-6 py-24'>
      <div className='mx-auto max-w-4xl'>
        <ScrollReveal direction='up' className='mb-16 text-center'>
          <p className='mb-2 font-mono text-sm tracking-widest text-accent'>
            <span className='glitch-subtle' data-text='CONTACT'>
              CONTACT
            </span>
          </p>
          <h2 className='glitch-hover text-3xl font-bold text-foreground sm:text-4xl' data-text='Get in Touch'>
            Get in Touch
          </h2>
          <p className='mt-4 text-muted'>{CONTACT.subtitle}</p>
        </ScrollReveal>

        <div className='grid gap-12 lg:grid-cols-2'>
          {/* Contact info */}
          <ScrollReveal direction='left' delay={0.1}>
            <div className='space-y-8'>
              <div className='flex items-start gap-4'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent'>
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className='mb-1 font-semibold text-foreground'>
                    <span className='glitch-hover' data-text='Email'>Email</span>
                  </h3>
                  <a href={`mailto:${PERSONAL.email}`} className='text-sm text-muted transition-colors hover:text-accent'>
                    {PERSONAL.email}
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent'>
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className='mb-1 font-semibold text-foreground'>
                    <span className='glitch-hover' data-text='Location'>Location</span>
                  </h3>
                  <p className='text-sm text-muted'>{PERSONAL.location}</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent'>
                  <User size={22} />
                </div>
                <div>
                  <h3 className='mb-1 font-semibold text-foreground'>
                    <span className='glitch-hover' data-text='JobStreet'>JobStreet</span>
                  </h3>
                  <a href={PERSONAL.jobStreetUrl} target='_blank' rel='noopener noreferrer' className='text-sm text-muted transition-colors hover:text-accent'>
                    View Profile
                  </a>
                </div>
              </div>

              <div className='rounded-2xl border border-card-border bg-card-bg p-6'>
                <p className='text-sm leading-relaxed text-muted'>{CONTACT.openMessage}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal direction='right' delay={0.2}>
            <div className='rounded-2xl border border-card-border bg-card-bg p-6 sm:p-8'>
              {status === 'success' ? (
                <div className='flex h-full flex-col items-center justify-center py-12 text-center'>
                  <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent'>
                    <Send size={28} />
                  </div>
                  <h3 className='mb-2 text-xl font-bold text-foreground'>{CONTACT.successHeading}</h3>
                  <p className='text-sm text-muted'>{CONTACT.successMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-5'>
                  <div>
                    <label htmlFor='name' className='mb-2 block text-sm font-medium text-foreground'>
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      required
                      className='w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent'
                      placeholder='Your name'
                    />
                  </div>

                  <div>
                    <label htmlFor='email' className='mb-2 block text-sm font-medium text-foreground'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      required
                      className='w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent'
                      placeholder='your@email.com'
                    />
                  </div>

                  <div>
                    <label htmlFor='message' className='mb-2 block text-sm font-medium text-foreground'>
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      required
                      rows={5}
                      className='w-full resize-none rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent'
                      placeholder='Tell me about your project...'
                    />
                  </div>

                  {status === 'error' && (
                    <p className='text-sm text-red-400'>{errorMsg}</p>
                  )}

                  <button
                    type='submit'
                    disabled={status === 'sending'}
                    className='inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25 disabled:opacity-60'
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={16} className='animate-spin' />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
