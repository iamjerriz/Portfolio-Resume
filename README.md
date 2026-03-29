# Jerriz Evangelista | Frontend Developer Portfolio

A modern, dark-themed portfolio website built with Next.js, featuring glitch text effects, scroll-based animations, and a working contact form.

## Live Demo

[View Portfolio](https://portfolio-resume.vercel.app)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Geist Sans & Geist Mono
- **Contact Form:** Web3Forms API
- **Deployment:** Vercel

## Features

- **Dark Minimal Theme** with emerald accent color
- **Glitch Text Effects** — hover-triggered and always-on glitch animations using CSS pseudo-elements
- **TypeWriter Animation** — cycling text with glitch transitions powered by Framer Motion
- **Scroll Reveal Animations** — sections fade/slide in as you scroll with staggered children
- **Responsive Design** — fully optimized for mobile, tablet, and desktop
- **Working Contact Form** — sends real emails via Web3Forms API
- **8-bit Cyberpunk City Background** — canvas-drawn pixel-art city skyline with neon accents and blinking lights

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Animated intro with TypeWriter name/role cycling |
| **About** | Bio, skill tags, and highlight cards |
| **Experience** | Timeline layout with work history |
| **Education** | Academic background card |
| **Projects** | Featured professional projects grid |
| **Contact** | Contact info + functional email form |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Create a `.env.local` file in the root directory:

```env
WEB3FORMS_KEY=your_web3forms_access_key
```

Get your free access key at [web3forms.com](https://web3forms.com).

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout with fonts and metadata
    page.tsx            # Home page assembling all sections
    globals.css         # Theme, animations, glitch effects
  components/
    Navbar.tsx           # Fixed navigation with mobile menu
    Hero.tsx             # Landing section with TypeWriter
    About.tsx            # Bio, skills, and highlights
    Experience.tsx       # Work history timeline
    Education.tsx        # Academic background
    Projects.tsx         # Project showcase grid
    Contact.tsx          # Contact form + info
    Footer.tsx           # Footer with social links
    TypeWriter.tsx       # Glitch text cycling animation
    ScrollReveal.tsx     # Scroll-triggered reveal wrapper
    StaggerReveal.tsx    # Staggered children animation
    CityBackground.tsx   # 8-bit cyberpunk city canvas
  constants/
    data.ts              # All portfolio content centralized
```

## Author

**Jerriz Evangelista**
- Email: iamjerriz@gmail.com
- LinkedIn: [Jerriz Evangelista](https://www.linkedin.com/in/jerriz-evangelista-071069277/)
- JobStreet: [View Profile](https://ph.jobstreet.com/profiles/jerriz-evangelista-11NS2KcNmH)

## License

This project is open source and available for personal use.
