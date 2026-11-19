# Ardavan Shahrabi — Portfolio

My personal portfolio site: education, skills, experience, projects, and a contact form.

**Live:** https://ardavan-portfolio.vercel.app

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, statically rendered) + React 19
- TypeScript
- Tailwind CSS v4 + [shadcn/ui](https://ui.shadcn.com) primitives
- [Motion](https://motion.dev) for animations
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode
- [Formspree](https://formspree.io) for the contact form
- Deployed on Vercel

## Getting started

Requires Node.js 24.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Updating content

All text content — profile, about, experience, projects, publication, education, skills,
certifications, and volunteering — lives in [`lib/data.ts`](lib/data.ts). Edit that file;
the page renders from it.

## Project structure

```
app/
  layout.tsx            Root layout, fonts, SEO metadata
  page.tsx              The single-page portfolio
  not-found.tsx         Custom 404 page
  opengraph-image.tsx   Generated social-share preview image
  icon.tsx              Generated favicon
  sitemap.ts, robots.ts SEO files
components/
  HoverMenu.tsx         Section navigation dropdown
  ContactForm.tsx       Formspree contact form
  BackToTop.tsx         Scroll-to-top button
  Providers.tsx         Theme + motion providers
  ui/                   shadcn/ui components (button, card, theme toggle)
lib/
  data.ts               All portfolio content
public/                 Profile photo
```

## License

See [LICENSE](LICENSE).
