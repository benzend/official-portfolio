# Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (uses next/core-web-vitals config)

# Code Style Guidelines
- TypeScript strict mode: interfaces prefixed with `I`, explicit typing preferred
- Import order: external libs → internal components (relative paths) → styles
- Component exports: named exports for utilities, default exports for main components
- File naming: PascalCase for components (`.tsx`), camelCase for utilities (`.ts`)
- React patterns: `'use client'` directive for client components, useCallback for events
- Error handling: defensive programming with undefined checks and optional chaining
- Styling: Tailwind utility-first approach, styled-jsx for keyframe animations
- Animation: Framer Motion for scroll animations, React Spring for interactions
- Architecture: Mixed App Router (`app/`) and Pages Router (`pages/`) support
- Content: Markdown posts in `_posts/`, use `@/*` path aliases for absolute imports