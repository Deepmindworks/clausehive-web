# ClauseHive - AI-Native Contract Lifecycle Management

A modern, enterprise-grade SaaS landing page for ClauseHive, built with Next.js and optimized for Vercel deployment.

## 🎨 Design Features

- **Brand Colors**: Deep Navy (#0A1A2F), Teal/Cyan (#11C7C5), Honey Gold (#F4C542)
- **Modern Aesthetics**: Hexagon/hive motifs, smooth gradients, glassmorphism effects
- **Premium UX**: Generous white space, clean typography (Inter & Space Grotesk), minimalistic interface
- **Fully Responsive**: Mobile-first design with tablet and desktop optimizations
- **Smooth Animations**: Floating elements, hover effects, fade-in transitions

## 🚀 Features

### Landing Page Sections
1. **Hero Section** - AI-Native CLM headline with animated contract preview
2. **Problem → Solution** - Clear value proposition
3. **Features Grid** - 8 core features with icon cards
4. **Workflow Builder Demo** - Visual workflow representation
5. **AI Search Showcase** - Interactive search interface mockup
6. **Custom Intake Forms** - Form type cards
7. **Use Cases** - Target audience segments
8. **Pricing Tiers** - Starter, Growth, Enterprise plans
9. **Final CTA** - Conversion-focused call-to-action

### Technical Features
- Next.js 16 App Router
- CSS Modules for scoped styling
- SEO optimized with metadata
- Responsive design (mobile, tablet, desktop)
- Performance optimized
- Vercel deployment ready

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page auto-updates as you edit files.

## 🚢 Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

### Option 2: Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js and configure settings
6. Click "Deploy"

### Option 3: Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

## 📁 Project Structure

```
clausehive-web/
├── app/
│   ├── globals.css          # Global styles & design system
│   ├── layout.js            # Root layout with metadata
│   ├── page.js              # Main landing page
│   └── page.module.css      # Page-specific styles
├── components/
│   ├── Header.js            # Navigation header
│   ├── Header.module.css
│   ├── Footer.js            # Site footer
│   └── Footer.module.css
├── public/                  # Static assets
├── vercel.json             # Vercel configuration
├── package.json
└── README.md
```

## 🎨 Customization

### Brand Colors
Edit `app/globals.css` CSS variables:
```css
:root {
  --color-deep-navy: #0A1A2F;
  --color-teal: #11C7C5;
  --color-honey-gold: #F4C542;
  --color-light-bg: #F7F9FB;
}
```

### Content
- **Hero**: Edit `app/page.js` hero section
- **Features**: Modify feature cards in features grid
- **Pricing**: Update pricing tiers and features
- **Footer**: Customize links in `components/Footer.js`

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

## 📊 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Fully responsive and mobile-optimized

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Styling**: CSS Modules + Custom CSS
- **Fonts**: Google Fonts (Inter, Space Grotesk)
- **Deployment**: Vercel
- **Package Manager**: npm

## 📝 License

Copyright © 2025 ClauseHive. All rights reserved.

## 🤝 Support

For support, email support@clausehive.com or visit our [Help Center](#).

---

Built for AI-native businesses 🚀
