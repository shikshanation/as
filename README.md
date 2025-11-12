# Modern Homepage with Next.js 16

A comprehensive, production-ready homepage built with the latest web technologies, featuring dynamic sections, form validation, and state management.

## 🚀 Tech Stack

- **Next.js 16** - React framework with App Router and Turbopack
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS** - Utility-first styling with custom configurations
- **Zustand** - Lightweight state management with devtools and persistence
- **Zod** - Schema validation for forms
- **React Hook Form** - Performant form handling with validation
- **React Select** - Accessible, customizable dropdown components

## ✨ Features

### Components Built

1. **Hero Grid** - Full-screen 4-panel image grid with hover effects
2. **Featured Section** - Agentic AI card with side articles
3. **Latest News** - Filterable news cards with categories
4. **Event Highlights** - Main event showcase with upcoming events list
5. **Community TV** - Video player with playlist and speaker info
6. **Newsletter Form** - Multi-field form with validation using react-hook-form, react-select, and Zod
7. **Partner Logos** - Responsive partner showcase with hover effects

### Key Features

- ✅ Fully responsive across all devices
- ✅ Next.js Image optimization with proper sizing strategies
- ✅ Zustand state management with persistence
- ✅ Form validation with Zod schemas
- ✅ React Hook Form integration with react-select
- ✅ TypeScript throughout for type safety
- ✅ Smooth animations and transitions
- ✅ Accessibility features (ARIA labels, semantic HTML)
- ✅ Production-ready code structure

## 📦 Installation

**IMPORTANT:** First, fix npm permissions if you encounter errors:

```bash
sudo chown -R $(whoami) ~/.npm
```

Then install dependencies:

```bash
npm install
```

Required packages:
- `zustand` - State management
- `zod` - Schema validation
- `react-hook-form` - Form handling
- `react-select` - Dropdown components
- `@hookform/resolvers` - React Hook Form + Zod integration

## 🏃 Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the homepage.

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main page assembling all sections
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles + react-select theming
├── components/
│   └── homepage/
│       ├── HeroGrid.tsx           # Hero section with image grid
│       ├── FeaturedSection.tsx    # Featured content with AI card
│       ├── LatestNews.tsx         # News section with filters
│       ├── EventHighlights.tsx    # Events showcase
│       ├── CommunityTV.tsx        # Video player section
│       ├── NewsletterForm.tsx     # Newsletter with validation
│       └── PartnerLogos.tsx       # Partner logos grid
├── store/
│   └── useAppStore.ts        # Zustand state management
└── types/
    └── schemas.ts            # Zod validation schemas
```

## 🎨 Customization

### Update Content

Edit data directly in component files or move to a CMS/API:

```typescript
// Example: Update hero images in HeroGrid.tsx
const heroImages = [
  { id: '1', src: 'your-image.jpg', label: 'Your Label', ... },
  // ...
];
```

### Modify Validation

Update Zod schemas in `src/types/schemas.ts`:

```typescript
export const newsletterSchema = z.object({
  email: z.string().email('Custom error message'),
  // Add more fields...
});
```

### State Management

Access Zustand store anywhere:

```typescript
import { useAppStore } from '@/store/useAppStore';

const { openModal, activeCategory } = useAppStore();
```

## 🎯 Forms with React Hook Form + Zod

Example implementation in NewsletterForm.tsx:

```typescript
const { register, handleSubmit, control, formState: { errors } } = useForm({
  resolver: zodResolver(newsletterSchema),
});
```

## 🌐 Deployment

Build for production:

```bash
npm run build
npm start
```

Deploy to Vercel (recommended):

```bash
vercel
```

## 📝 Notes

- All images use Next.js Image component for optimization
- react-select components have custom Tailwind-based styling
- Zustand store includes devtools integration (dev mode only)
- Forms validate on submit with real-time error feedback

## 🔧 Environment

- Node.js 18+ required
- Supports all modern browsers
- Optimized for both desktop and mobile

---

Built with ❤️ using Next.js 16, TypeScript, and modern React patterns
# as
