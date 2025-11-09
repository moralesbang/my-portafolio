# Portfolio Configuration Guide

This portfolio is built with multi-language support and easy theme customization.

## 🌐 Translation Management

All text content is managed through JSON files in the `/src/locales/` directory:

- **English**: `src/locales/en.json`
- **Spanish**: `src/locales/es.json`

### How to Update Translations

1. Open the appropriate language file (`en.json` or `es.json`)
2. Find the section you want to edit (e.g., `hero`, `about`, `experience`)
3. Modify the text values
4. Save the file - changes will appear immediately!

**Example:**
```json
{
  "hero": {
    "greeting": "Hi, I'm",
    "title": "Software Engineer"
  }
}
```

### Adding New Sections

1. Add the new text keys to **both** language files
2. Use the `useTranslation` hook in your component:
```tsx
const { t } = useTranslation();
// Access your text: t.newSection.title
```

## 🎨 Theme Customization

All colors are centrally managed in `/src/config/theme.config.ts`.

### How to Change Colors

1. Open `src/config/theme.config.ts`
2. Modify the HSL values for the colors you want to change
3. Save the file - the entire site updates automatically!

**HSL Format**: `"Hue Saturation% Lightness%"`
- **Hue**: 0-360 (color wheel position)
- **Saturation**: 0-100% (color intensity)
- **Lightness**: 0-100% (brightness)

**Example:**
```typescript
primary: "221 83% 53%",  // Blue
accent: "199 89% 48%",   // Cyan
```

### Quick Color Changes

- **Primary color** (main brand): Change `primary` values
- **Accent color** (highlights): Change `accent` values
- **Background**: Change `background` and `foreground` values
- **Gradients**: Change `gradientStart` and `gradientEnd` values

### Popular Color Examples

```typescript
// Tech Blue
primary: "221 83% 53%"

// Vibrant Purple
primary: "271 81% 56%"

// Fresh Green
primary: "142 76% 36%"

// Warm Orange
primary: "25 95% 53%"
```

## 🔗 Updating Personal Links

Update your contact information in `/src/components/portfolio/Contact.tsx`:

1. Email, phone, location in the `contactLinks` array
2. GitHub and LinkedIn URLs in the `socialLinks` array

## 📦 Project Structure

```
src/
├── locales/           # Translation files
│   ├── en.json       # English translations
│   └── es.json       # Spanish translations
├── config/
│   └── theme.config.ts  # Color theme configuration
├── contexts/
│   └── LanguageContext.tsx  # i18n logic
├── components/
│   └── portfolio/    # Portfolio sections
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Skills.tsx
│       ├── Education.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
└── pages/
    └── Index.tsx     # Main page
```

## 🚀 Deployment to GitHub Pages

### Prerequisites
1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Set Source to "GitHub Actions"

### Create Deployment Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

### Configure Vite for GitHub Pages

If your repo is named `username.github.io`, no changes needed!

Otherwise, update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/repository-name/', // Replace with your repo name
  // ... rest of config
})
```

### Deploy

1. Commit and push your changes
2. GitHub Actions will automatically build and deploy
3. Your site will be live at `https://username.github.io/repository-name/`

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 💡 Tips

- Use Visual Edits in Lovable for quick styling changes
- The language switcher automatically saves user preference
- All animations are powered by Framer Motion
- Responsive design works on all devices
- Dark mode uses the same color tokens automatically
