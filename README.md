# Job-Tasks 
# Mumin Network

A modern video platform built with React and modern web technologies for streaming Islamic content and educational videos.

## 🚀 Technologies Used

### Frontend Framework
- **React 19.1.1** - Modern JavaScript library for building user interfaces
- **React DOM 19.1.1** - React rendering library for web applications

### Build Tools & Development
- **Vite 7.1.6** - Fast build tool and development server
- **@vitejs/plugin-react 5.0.2** - Official Vite plugin for React support

### Styling & UI
- **Tailwind CSS 4.1.13** - Utility-first CSS framework for rapid UI development
- **DaisyUI 5.1.13** - Tailwind CSS component library for pre-built components
- **@tailwindcss/vite 4.1.13** - Vite integration for Tailwind CSS

### Code Quality & Linting
- **ESLint 9.35.0** - JavaScript and React code linting
- **@eslint/js 9.35.0** - ESLint JavaScript configurations
- **eslint-plugin-react-hooks 5.2.0** - ESLint rules for React Hooks
- **eslint-plugin-react-refresh 0.4.20** - ESLint plugin for React Fast Refresh

### Development Tools
- **@types/react 19.1.13** - TypeScript type definitions for React
- **@types/react-dom 19.1.9** - TypeScript type definitions for React DOM
- **globals 16.4.0** - Global variable definitions for ESLint

## 🎯 Key Features

- **Responsive Design** - Mobile-first approach with desktop, tablet, and mobile support
- **Modern UI Components** - Built with Tailwind CSS and DaisyUI
- **Video Platform** - Banner thumbnails, trending videos, and popular channels
- **Interactive Navigation** - Sidebar drawer with main menu and following sections
- **Theme Support** - Light and dark theme toggle functionality
- **Premium Features** - Get Premium button and user subscription options

## 🏗️ Project Structure

```
src/
├── components/
│   ├── navbar/           # Navigation component
│   ├── banner-thumbnail/ # Video banner component  
│   ├── popular-channels/ # Channel listing component
│   ├── categories/       # Video categories component
│   └── trending-videos/  # Trending videos component
├── assets/              # Images, icons, and static files
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css         # Global styles
```

## 📦 Installation & Setup

1. Clone the repository
```bash
git clone <repository-url>
cd mumins-network
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

5. Preview production build
```bash
npm run preview
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint code analysis
- `npm run preview` - Preview production build locally