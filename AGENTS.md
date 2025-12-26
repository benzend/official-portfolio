# Development Commands
- `npm run dev` - Start development server on port 3080
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (uses next/core-web-vitals config)

# Code Style Guidelines
- TypeScript with strict mode disabled but prefer explicit typing
- Use interfaces for props (prefix with `I`) and types for data models
- Import statements: external libs first, then internal modules using relative paths
- Component exports: named exports for utilities, default for main components
- SCSS Modules: `styles/ComponentName.module.scss` with kebab-case CSS classes
- File naming: PascalCase for components (`.tsx`), camelCase for utilities (`.ts`)
- Use React hooks with useCallback for event handlers
- Error handling: check for undefined before accessing object properties
- Use Tailwind classes for utility styling, SCSS modules for component-specific styles
- Markdown content stored in `_posts/` directory