# Guided Tour System Documentation

## Overview

The ZenoPay e-wallet platform includes a comprehensive guided tour system built with driver.js that provides role-based onboarding experiences for new users. The tour system helps users understand key features and navigation patterns specific to their role (Admin, Agent, or User).

## Features

### ✨ Key Capabilities

- **Role-Based Tours**: Customized tour steps for Admin, Agent, and User roles
- **Persistent State**: Tours are automatically marked as completed and stored in localStorage
- **Smart Targeting**: Uses data attributes to target specific UI elements
- **Responsive Design**: Tour popover positioning adapts to screen size
- **Theme Awareness**: Custom CSS styling that respects light/dark mode
- **User Control**: Users can restart tours or take them again at any time

### 🎯 Tour Content

#### Admin Tour (5 Steps)
1. **Dashboard Overview**: Introduction to the admin dashboard
2. **Sidebar Navigation**: How to navigate between different admin sections
3. **User Management**: Overview of user management capabilities
4. **Wallet Management**: Explanation of wallet administration features
5. **Settings Panel**: How to access and use admin settings

#### Agent Tour (6 Steps)
1. **Dashboard Overview**: Introduction to the agent dashboard
2. **Sidebar Navigation**: Agent-specific navigation features
3. **Transaction Management**: How to handle and process transactions
4. **User Support**: Tools for helping users with their accounts
5. **Commission Tracking**: Understanding earnings and commission structure
6. **Settings Panel**: Agent-specific settings and preferences

#### User Tour (5 Steps)
1. **Dashboard Overview**: Introduction to the user dashboard
2. **Sidebar Navigation**: User navigation and available features
3. **Wallet Overview**: Understanding wallet balance and features
4. **Transaction History**: How to view and track transactions
5. **Settings Panel**: Personal settings and account management

## Implementation

### 🏗️ Architecture

```typescript
// Core service class
class TourService {
  private static instance: TourService;
  private driverInstance: ReturnType<typeof driver> | null = null;

  // Singleton pattern for global access
  public static getInstance(): TourService;
  
  // Main tour methods
  startTour(userRole: 'ADMIN' | 'AGENT' | 'USER'): void;
  restartTour(userRole: 'ADMIN' | 'AGENT' | 'USER'): void;
  isTourCompleted(userRole: string): boolean;
}
```

### 📍 Data Attributes

The tour system uses data attributes to target specific elements:

```html
<!-- Dashboard components -->
<div data-tour="sidebar">...</div>
<header data-tour="dashboard-header">...</header>
<div data-tour="dashboard-content">...</div>

<!-- Specific features -->
<button data-tour="tour-trigger">Take Tour</button>
<input data-tour="wallets-search">...</input>
<table data-tour="wallets-table">...</table>
```

### 🎨 Custom Styling

```css
/* Tour highlight styling */
.driver-active-element {
  outline: 3px solid hsl(var(--primary)) !important;
  outline-offset: 2px !important;
}

/* Popover styling */
.driver-popover {
  background: hsl(var(--background)) !important;
  color: hsl(var(--foreground)) !important;
  border: 1px solid hsl(var(--border)) !important;
}
```

## Usage

### 🚀 Basic Usage

```typescript
import { TourService } from '@/utils/tourService';

// Get the tour service instance
const tourService = TourService.getInstance();

// Start a tour for the current user role
tourService.startTour('ADMIN');

// Check if tour is completed
const isCompleted = tourService.isTourCompleted('ADMIN');

// Restart a tour (clears completion status)
tourService.restartTour('ADMIN');
```

### 🎮 Tour Button Component

```tsx
import TourButton from '@/components/TourButton';

// Add to any component
<TourButton />
```

The TourButton component automatically:
- Detects the current user's role
- Shows appropriate button text based on completion status
- Provides restart functionality for completed tours

### 📱 Integration Points

1. **Dashboard Header**: Tour button is integrated into the main dashboard header
2. **Sidebar**: Navigation elements are tagged for tour targeting
3. **Feature Pages**: Key components have data attributes for specific features
4. **Settings**: Tour restart options can be added to user preferences

## Configuration

### ⚙️ Tour Step Configuration

Each role has its own set of tour steps defined in `tourService.ts`:

```typescript
const adminSteps = [
  {
    element: '[data-tour="dashboard-content"]',
    popover: {
      title: 'Admin Dashboard',
      description: 'Welcome to your admin dashboard...',
      side: 'bottom',
      align: 'start'
    }
  },
  // Additional steps...
];
```

### 🎯 Customization Options

- **Step Content**: Modify titles and descriptions in the step definitions
- **Targeting**: Add/modify data-tour attributes on UI elements
- **Styling**: Update CSS variables in the injected styles
- **Behavior**: Adjust driver.js configuration options

## File Structure

```
src/
├── utils/
│   └── tourService.ts          # Main tour service implementation
├── components/
│   └── TourButton.tsx          # Tour trigger button component
├── layout/
│   └── DashboardLayout.tsx     # Enhanced with tour button
└── pages/
    └── Admin/
        └── AllWallets.tsx      # Example with tour data attributes
```

## Best Practices

### ✅ Do's

- **Unique Targeting**: Ensure data-tour attributes are unique and descriptive
- **Progressive Disclosure**: Start with overview, then dive into specific features
- **User Context**: Tailor tour content to the user's actual role and permissions
- **Performance**: Tour is lazy-loaded and only runs when triggered
- **Accessibility**: Tour respects user preferences and can be dismissed at any time

### ❌ Don'ts

- **Overwhelming Users**: Keep tours focused and concise (5-6 steps max)
- **Hardcoded Selectors**: Always use data attributes, never rely on CSS classes
- **Forced Tours**: Never auto-start tours, let users choose when to take them
- **Duplicate Tours**: Check completion status before offering tours again

## Technical Details

### 📦 Dependencies

- **driver.js**: Core tour functionality and UI
- **React**: Component framework
- **TypeScript**: Type safety and better development experience
- **Local Storage**: Persistent tour completion tracking

### 🔧 Browser Support

- Modern browsers with ES6+ support
- Local storage must be available
- Driver.js requirements (IE11+ support)

### 🚀 Performance

- Tour scripts are lazy-loaded only when needed
- Minimal bundle size impact when tour is not active
- CSS is injected dynamically to avoid style conflicts

## Troubleshooting

### Common Issues

1. **Elements Not Found**: Ensure data-tour attributes exist on target elements
2. **Tour Not Starting**: Check user role detection and step definitions
3. **Styling Issues**: Verify CSS custom properties are defined in your theme
4. **LocalStorage Errors**: Handle cases where localStorage might be disabled

### Debug Mode

Enable console logging for debugging:

```typescript
// In tourService.ts
onHighlightStarted: () => {
  console.log('Tour step highlighted:', element);
}
```

## Future Enhancements

- **Analytics Integration**: Track tour completion rates and drop-off points
- **A/B Testing**: Test different tour content and flows
- **Interactive Elements**: Add interactive elements within tour steps
- **Multi-language Support**: Internationalization for tour content
- **Advanced Targeting**: Smart element detection and fallback strategies

---

For more information about driver.js, visit: https://driverjs.com/
