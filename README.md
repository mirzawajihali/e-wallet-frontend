# 💰 ZenoPay - Digital Wallet Frontend

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.14-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>

<div align="center">
  <h3>🚀 The Future of Digital Payments</h3>
  <p>A modern, secure, and user-friendly digital wallet application built with React and TypeScript</p>
</div>

## 📋 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [✨ Features](#-features)
- [🛠 Technology Stack](#-technology-stack)
- [🚀 Live Demo](#-live-demo)
- [📥 Setup Instructions](#-setup-instructions)
- [🎮 Demo Credentials](#-demo-credentials)
- [📁 Project Structure](#-project-structure)
- [🎨 UI Components](#-ui-components)
- [🔧 Configuration](#-configuration)
- [📱 Responsive Design](#-responsive-design)
- [🚀 Deployment](#-deployment)
- [👥 Contributing](#-contributing)
- [📄 License](#-license)

## 🎯 Project Overview

ZenoPay is a comprehensive digital wallet application that enables users to manage their finances seamlessly. The platform supports multiple user roles (Admin, Agent, User) with role-specific dashboards and functionalities.

### 🎨 Key Highlights

- **Modern UI/UX**: Built with shadcn/ui components and Tailwind CSS
- **Role-Based Access**: Different dashboards for Admin, Agent, and User roles
- **Secure Authentication**: JWT-based auth with Google OAuth integration
- **Real-time Updates**: Optimistic updates with RTK Query
- **Interactive Tours**: Guided onboarding with driver.js
- **Theme Support**: Light/dark mode with system preference detection
- **Responsive Design**: Mobile-first approach with seamless desktop experience

## ✨ Features

### 👤 User Features
- 💳 **My Wallet**: View balance and account details
- ➕ **Add Money**: Multiple funding options (bank transfer, cards, mobile banking)
- 💸 **Withdraw Money**: Cash out to bank accounts or through agents
- 📤 **Send Money**: Instant transfers to other ZenoPay users
- 📊 **Transaction History**: Comprehensive transaction tracking
- 👤 **Profile Management**: Update personal information and settings

### 🛡️ Admin Features
- 📈 **Analytics Dashboard**: Platform insights and metrics
- 💳 **User Management**: Monitor and manage all user wallets
- 📊 **Transaction Monitoring**: Real-time transaction oversight
- 👥 **User Administration**: Comprehensive user management
- 🏪 **Agent Management**: Oversee agent network and performance

### 🏪 Agent Features
- 💰 **Cash In Service**: Help customers deposit money
- 💸 **Cash Out Service**: Process customer withdrawals
- 📊 **Commission Tracking**: Monitor earnings and performance
- 👥 **Customer Management**: Handle customer transactions
- 📈 **Performance Analytics**: Track service metrics

### 🔧 Technical Features
- 🎮 **Interactive Tours**: Role-based guided onboarding
- 🌙 **Dark/Light Mode**: Theme switching with persistence
- 📱 **PWA Ready**: Progressive web app capabilities
- 🔄 **Optimistic Updates**: Instant UI feedback
- 🛡️ **Error Boundaries**: Graceful error handling
- 📊 **State Management**: Redux Toolkit with RTK Query

## 🛠 Technology Stack

### **Frontend Framework**
- **React 18.3.1** - Modern React with concurrent features
- **TypeScript 5.6.2** - Type-safe development
- **Vite 6.0.0** - Fast build tool and dev server

### **Styling & UI**
- **Tailwind CSS 3.4.14** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible React components
- **Lucide Icons** - Beautiful, customizable icons
- **CSS Variables** - Dynamic theming support

### **State Management**
- **Redux Toolkit** - Modern Redux with RTK Query
- **RTK Query** - Data fetching and caching
- **React Hook Form** - Form handling with validation

### **Authentication & Security**
- **JWT Tokens** - Secure authentication
- **Google OAuth** - Social login integration
- **Protected Routes** - Role-based access control

### **Development Tools**
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **React Router** - Client-side routing
- **Driver.js** - Interactive guided tours

### **Deployment & Hosting**
- **Vercel** - Edge deployment and hosting
- **GitHub** - Version control and CI/CD

## 🚀 Live Demo

### 🌐 Production URLs
- **Frontend**: [https://your-frontend-domain.vercel.app](https://your-frontend-domain.vercel.app)
- **Backend API**: [https://your-backend-domain.vercel.app](https://your-backend-domain.vercel.app)

### 📖 API Documentation
- **Swagger UI**: [https://your-backend-domain.vercel.app/api-docs](https://your-backend-domain.vercel.app/api-docs)

## 📥 Setup Instructions

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn**
- **Git**

### 1. Clone the Repository
```bash
git clone https://github.com/mirzawajihali/e-wallet-frontend.git
cd e-wallet-frontend
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=https://e-wallet-backend-seven.vercel.app/api/v1
VITE_BASE_URL=http://localhost:5173

# Google OAuth
VITE_GOOGLE_CLIENT_ID=your_google_client_id_here

# App Configuration
VITE_APP_NAME=ZenoPay
VITE_APP_VERSION=1.0.0
```

### 4. Start Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### 5. Build for Production
```bash
npm run build
# or
yarn build
```

### 6. Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## 🎮 Demo Credentials

Test the application with these pre-configured accounts:

### 🛡️ **Admin Access**
- **Email**: `main@gmail.com`
- **Password**: `mainadmin123`
- **Features**: Full platform management, analytics, user oversight

### 🏪 **Agent Access**
- **Email**: `agent@gmail.com`
- **Password**: `Agent123!`
- **Features**: Cash in/out services, customer management, commission tracking

### 👤 **User Access**
- **Email**: `user@gmail.com`
- **Password**: `User123!`
- **Features**: Wallet management, money transfers, transaction history

> 💡 **Tip**: Use the copy buttons on the login page to quickly access these credentials!

## 📁 Project Structure

```
e-wallet-frontend/
├── public/                     # Static assets
│   ├── vite.svg
│   └── Images/
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── app-sidebar.tsx   # Navigation sidebar
│   │   ├── ErrorBoundary.tsx # Error handling
│   │   └── TourButton.tsx    # Guided tour trigger
│   ├── modules/              # Feature-based modules
│   │   ├── Auth/             # Authentication components
│   │   ├── Normal/           # Public pages
│   │   ├── Admin/            # Admin dashboard
│   │   └── User/             # User dashboard
│   ├── pages/                # Page components
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   └── Dashboard pages
│   ├── redux/                # State management
│   │   ├── store.ts
│   │   ├── bassApi.ts
│   │   └── feature slices
│   ├── utils/                # Utility functions
│   │   ├── tourService.ts    # Guided tours
│   │   └── helper functions
│   ├── hooks/                # Custom React hooks
│   ├── types/                # TypeScript definitions
│   ├── config/               # App configuration
│   └── styles/               # Global styles
├── .env                      # Environment variables
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── vercel.json              # Deployment configuration
```

## 🎨 UI Components

### Core Components
- **Sidebar Navigation**: Role-based menu with animated transitions
- **Theme Toggle**: Light/dark mode with system preference
- **Form Components**: Validated forms with error handling
- **Data Tables**: Sortable, filterable tables with pagination
- **Modal Dialogs**: Accessible modal components
- **Toast Notifications**: User feedback system

### Design System
- **Color Palette**: Consistent color scheme with CSS variables
- **Typography**: Responsive text scales and hierarchy
- **Spacing**: Consistent spacing using Tailwind's scale
- **Animations**: Smooth transitions and micro-interactions

## 🔧 Configuration

### Environment Variables
```env
# Required
VITE_API_BASE_URL=            # Backend API URL
VITE_BASE_URL=                # Frontend URL
VITE_GOOGLE_CLIENT_ID=        # Google OAuth Client ID

# Optional
VITE_APP_NAME=ZenoPay         # Application name
VITE_APP_VERSION=1.0.0        # Version number
```

### Build Configuration
- **Vite Config**: Optimized for production builds
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency rules
- **Tailwind**: Purged CSS for optimal bundle size

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile-First Approach
- Touch-friendly interface elements
- Optimized navigation for mobile devices
- Responsive images and media
- Progressive enhancement

## 🚀 Deployment

### Vercel Deployment
1. **Connect GitHub**: Link your repository to Vercel
2. **Configure Build**: 
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. **Environment Variables**: Set production environment variables
4. **Deploy**: Automatic deployment on push to main branch

### Manual Deployment
```bash
# Build the application
npm run build

# Deploy to Vercel
vercel --prod

# Or deploy to other platforms
# Upload the 'dist' folder to your hosting provider
```

## 🔍 Performance Optimizations

- **Code Splitting**: Lazy loading with React.lazy()
- **Bundle Optimization**: Tree shaking and minification
- **Image Optimization**: Responsive images and lazy loading
- **Caching**: Service worker for offline functionality
- **CDN**: Global content delivery via Vercel Edge Network

## 🛡️ Security Features

- **JWT Authentication**: Secure token-based auth
- **Protected Routes**: Role-based access control
- **HTTPS Enforcement**: Secure connections in production
- **XSS Protection**: Input sanitization and validation
- **CORS Configuration**: Proper cross-origin setup

## 🐛 Troubleshooting

### Common Issues
1. **Build Errors**: Check TypeScript types and imports
2. **API Connection**: Verify environment variables
3. **OAuth Issues**: Check Google Console configuration
4. **Routing Problems**: Ensure proper route configuration

### Development Tips
- Use React DevTools for debugging
- Check browser console for errors
- Monitor network requests in DevTools
- Use TypeScript for better error catching





---

<div align="center">
  <p>Made with ❤️ for the future of digital payments</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>