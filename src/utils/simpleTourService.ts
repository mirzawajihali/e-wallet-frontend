import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

// CSS injection for custom tour styling
const injectCustomCSS = () => {
  const css = `
    .driver-active-element {
      outline: 3px solid #00ff88 !important;
      outline-offset: 2px !important;
      box-shadow: 0 0 10px rgba(0, 255, 136, 0.5) !important;
    }
    
    .driver-popover {
      background: #000000 !important;
      color: #ffffff !important;
      border: 2px solid #333333 !important;
      border-radius: 12px !important;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.8), 0 10px 10px -5px rgba(0, 0, 0, 0.6) !important;
      backdrop-filter: blur(10px) !important;
    }
    
    .driver-popover-title {
      color: #ffffff !important;
      font-weight: 700 !important;
      font-size: 18px !important;
      margin-bottom: 12px !important;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5) !important;
    }
    
    .driver-popover-description {
      color: #e0e0e0 !important;
      line-height: 1.6 !important;
      font-size: 15px !important;
      margin-bottom: 16px !important;
    }
    
    .driver-popover-navigation-btns {
      gap: 12px !important;
      margin-top: 20px !important;
      display: flex !important;
      justify-content: flex-end !important;
    }
    
    .driver-popover-btn {
      background: linear-gradient(135deg, #00ff88, #00cc6a) !important;
      color: #000000 !important;
      border: none !important;
      border-radius: 8px !important;
      padding: 10px 18px !important;
      font-size: 14px !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      transition: all 0.3s ease !important;
      box-shadow: 0 4px 6px rgba(0, 255, 136, 0.2) !important;
    }
    
    .driver-popover-btn:hover {
      background: linear-gradient(135deg, #00cc6a, #00aa55) !important;
      transform: translateY(-2px) !important;
      box-shadow: 0 6px 12px rgba(0, 255, 136, 0.3) !important;
    }
    
    .driver-popover-prev-btn {
      background: linear-gradient(135deg, #6b7280, #4b5563) !important;
      color: #ffffff !important;
      box-shadow: 0 4px 6px rgba(107, 114, 128, 0.2) !important;
    }
    
    .driver-popover-prev-btn:hover {
      background: linear-gradient(135deg, #4b5563, #374151) !important;
      box-shadow: 0 6px 12px rgba(107, 114, 128, 0.3) !important;
    }
    
    .driver-popover-close-btn {
      background: linear-gradient(135deg, #ef4444, #dc2626) !important;
      color: #ffffff !important;
      box-shadow: 0 4px 6px rgba(239, 68, 68, 0.2) !important;
    }
    
    .driver-popover-close-btn:hover {
      background: linear-gradient(135deg, #dc2626, #b91c1c) !important;
      box-shadow: 0 6px 12px rgba(239, 68, 68, 0.3) !important;
    }
    
    .driver-popover-progress-text {
      color: #00ff88 !important;
      font-weight: 600 !important;
      font-size: 12px !important;
      text-align: center !important;
      margin-bottom: 8px !important;
    }
  `;
  
  const styleElement = document.createElement('style');
  styleElement.textContent = css;
  document.head.appendChild(styleElement);
};

// User tour steps  
const userTourSteps = [
  {
    element: 'body',
    popover: {
      title: '🎉 Welcome to ZenoPay!',
      description: 'Welcome to your personal digital wallet! ZenoPay makes managing your money simple and secure. Let\'s explore all the amazing features available to you.',
      side: 'bottom',
      align: 'center'
    }
  },
  {
    element: '[data-tour="sidebar"]',
    popover: {
      title: '🧭 Your Navigation Hub',
      description: 'This sidebar is your control center! Navigate between My Wallet to check your balance, Add Money to fund your account, Send Money to friends, and view your Transaction History.',
      side: 'right',
      align: 'start'
    }
  },
  {
    element: '[data-tour="my-wallet"]',
    popover: {
      title: '💳 My Wallet - Your Balance Center',
      description: 'Click here to view your current wallet balance, account details, and get an overview of your financial status. This is your main money dashboard.',
      side: 'right',
      align: 'start'
    }
  },
  {
    element: '[data-tour="user-profile"]',
    popover: {
      title: '👤 My Profile - Account Settings',
      description: 'Manage your personal information, update security settings, and customize your account preferences. Keep your profile updated for better security.',
      side: 'right',
      align: 'start'
    }
  },
  {
    element: '[data-tour="add-money"]',
    popover: {
      title: '➕ Add Money - Fund Your Wallet',
      description: 'Add money to your wallet using various methods like bank transfer, card payment, or mobile banking. Quick and secure funding options.',
      side: 'right',
      align: 'start'
    }
  },
  {
    element: '[data-tour="withdraw"]',
    popover: {
      title: '💸 Withdraw Money - Cash Out',
      description: 'Withdraw money from your wallet to your bank account or get cash from agents. Easy money withdrawal whenever you need it.',
      side: 'right',
      align: 'start'
    }
  },
  {
    element: '[data-tour="send-money"]',
    popover: {
      title: '📤 Send Money - Transfer to Friends',
      description: 'Send money instantly to other ZenoPay users using their phone number or email. Split bills, pay friends, or send gifts easily.',
      side: 'right',
      align: 'start'
    }
  },
  {
    element: '[data-tour="my-transactions"]',
    popover: {
      title: '📊 My Transactions - Transaction History',
      description: 'View all your transaction history including sent/received money, deposits, withdrawals, and payments. Track your spending patterns.',
      side: 'right',
      align: 'start'
    }
  },
  {
    element: '[data-tour="dashboard-content"]',
    popover: {
      title: '� Main Dashboard',
      description: 'This is your main workspace where all the magic happens! You\'ll see your wallet balance, recent transactions, and quick action buttons for common tasks.',
      side: 'bottom',
      align: 'start'
    }
  },
  {
    element: '.card',
    popover: {
      title: '💳 Wallet Cards',
      description: 'These cards display your important wallet information - current balance, recent transactions, and quick actions. Each card provides specific functionality to manage your money.',
      side: 'top',
      align: 'center'
    }
  },
  {
    element: 'button, .btn',
    popover: {
      title: '⚡ Action Buttons',
      description: 'Look for action buttons throughout the app to perform quick tasks like adding money, sending payments, or updating your profile. They\'re designed to make your experience smooth and efficient.',
      side: 'top',
      align: 'center'
    }
  },
  {
    element: '[data-tour="tour-trigger"]',
    popover: {
      title: '❓ Help & Support',
      description: 'Need help anytime? Click this tour button to restart the tutorial or access help resources. We\'re here to make your ZenoPay experience amazing!',
      side: 'bottom',
      align: 'end'
    }
  }
];

// Admin tour steps
const adminTourSteps = [
  {
    element: 'body',
    popover: {
      title: '🛡️ Admin Control Center',
      description: 'Welcome to the ZenoPay Admin Dashboard! You have complete control over the platform - manage users, monitor transactions, analyze data, and ensure smooth operations.',
      side: 'bottom',
      align: 'center'
    }
  },
  {
    element: '[data-tour="sidebar-content"]',
    popover: {
      title: '📊 Admin Navigation',
      description: 'Your admin toolkit includes Analytics for insights, All Wallets for user management, All Transactions for monitoring, and User Management for platform oversight.',
      side: 'right',
      align: 'start'
    }
  },
  {
    element: '[data-tour="analytics"]',
    popover: {
      title: '📈 Analytics Dashboard',
      description: 'Get comprehensive platform insights - user growth, transaction volumes, revenue metrics, and performance analytics. Your main control center.',
      side: 'right',
      align: 'start'
    }
  },
  {
    element: '[data-tour="all-wallets"]',
    popover: {
      title: '� All Wallets - User Management',
      description: 'Monitor and manage all user wallets. View balances, block/unblock accounts, track user activity, and ensure platform security.',
      side: 'right',
      align: 'start'
    }
  },
  {
    element: '[data-tour="all-transactions"]',
    popover: {
      title: '📊 All Transactions - Transaction Monitoring',
      description: 'Monitor all platform transactions in real-time. Track money transfers, deposits, withdrawals, and identify suspicious activities.',
      side: 'right',
      align: 'start'
    }
  },
  {
    element: '[data-tour="all-users"]',
    popover: {
      title: '👥 All Users - User Management',
      description: 'Comprehensive user management - view user profiles, manage account status, monitor user activities, and handle customer support.',
      side: 'right',
      align: 'start'
    }
  },
  {
    element: '[data-tour="all-agents"]',
    popover: {
      title: '🏪 All Agents - Agent Management',
      description: 'Manage your agent network - monitor agent performance, track commissions, approve new agents, and oversee cash operations.',
      side: 'right',
      align: 'start'
    }
  },
  {
    element: '[data-tour="dashboard-content"]',
    popover: {
      title: '� Analytics Dashboard',
      description: 'This main area displays comprehensive analytics - platform metrics, user statistics, transaction volumes, and revenue insights. Monitor platform health from here.',
      side: 'bottom',
      align: 'start'
    }
  },
  {
    element: '.card',
    popover: {
      title: '📋 Data Cards',
      description: 'These analytics cards show key performance indicators - total users, active wallets, transaction volumes, and revenue metrics. Use these to make informed decisions.',
      side: 'top',
      align: 'center'
    }
  },
  {
    element: '[data-tour="wallets-table"]',
    popover: {
      title: '👥 User Management',
      description: 'Manage all user wallets from this comprehensive table. Block/unblock accounts, view user details, monitor activity, and ensure platform security.',
      side: 'bottom',
      align: 'start'
    }
  },
  {
    element: '[data-tour="wallets-search"]',
    popover: {
      title: '🔍 Search & Filter',
      description: 'Use powerful search and filtering tools to quickly find specific users, transactions, or data. Essential for efficient platform management.',
      side: 'top',
      align: 'start'
    }
  },
  {
    element: '[data-tour="tour-trigger"]',
    popover: {
      title: '⚙️ Admin Support',
      description: 'Access admin help, restart tours, or explore advanced features. Your admin toolkit is always available to ensure smooth platform operations.',
      side: 'bottom',
      align: 'end'
    }
  }
];

// Agent tour steps
const agentTourSteps = [
  {
    element: 'body',
    popover: {
      title: '💼 Agent Portal Welcome',
      description: 'Welcome to your ZenoPay Agent Dashboard! As an agent, you\'re the bridge between ZenoPay and customers. Help users with cash transactions and earn commissions.',
      side: 'bottom',
      align: 'center'
    }
  },
  {
    element: '[data-tour="sidebar-content"]',
    popover: {
      title: '🏪 Agent Tools',
      description: 'Navigate through your agent features: Cash In/Out services, Customer Management, Commission Tracking, and Transaction Processing. Everything you need to serve customers.',
      side: 'right',
      align: 'start'
    }
  },
  {
    element: '[data-tour="agent-profile"]',
    popover: {
      title: '👤 My Profile - Agent Details',
      description: 'Manage your agent profile, commission settings, and account information. Keep your details updated for proper commission tracking.',
      side: 'right',
      align: 'start'
    }
  },
  {
    element: '[data-tour="cash-in"]',
    popover: {
      title: '💰 Cash In Service',
      description: 'Help customers add money to their ZenoPay wallets by accepting cash and processing digital deposits. Earn commission on each transaction.',
      side: 'right',
      align: 'start'
    }
  },
  {
    element: '[data-tour="cash-out"]',
    popover: {
      title: '💸 Cash Out Service',
      description: 'Allow customers to withdraw cash from their digital wallets. Verify customer identity and process cash withdrawal requests.',
      side: 'right',
      align: 'start'
    }
  },
  {
    element: '[data-tour="my-transactions"]',
    popover: {
      title: '📊 Agent Transactions',
      description: 'View all your agent transactions, track earnings, monitor commission rates, and generate reports for your cash-in/cash-out services.',
      side: 'right',
      align: 'start'
    }
  },
  {
    element: '[data-tour="dashboard-content"]',
    popover: {
      title: '📊 Agent Dashboard',
      description: 'Your main workspace shows daily transactions, earnings summary, customer requests, and performance metrics. Stay on top of your agent activities.',
      side: 'bottom',
      align: 'start'
    }
  },
  {
    element: '.card',
    popover: {
      title: '💰 Earnings & Stats',
      description: 'Monitor your performance with earnings cards showing daily/monthly income, transaction counts, commission rates, and customer satisfaction metrics.',
      side: 'bottom',
      align: 'center'
    }
  },
  {
    element: '[data-tour="cash-operations"]',
    popover: {
      title: '💵 Cash Services',
      description: 'Provide cash-in and cash-out services to customers. Enter customer details, verify identities, process transactions, and help users access their digital money.',
      side: 'top',
      align: 'center'
    }
  },
  {
    element: '[data-tour="customer-search"]',
    popover: {
      title: '👥 Customer Lookup',
      description: 'Search for customers by phone number, email, or ID to process their transactions. Verify customer details before completing any cash operations.',
      side: 'bottom',
      align: 'start'
    }
  },
  {
    element: '[data-tour="tour-trigger"]',
    popover: {
      title: '🎯 Agent Resources',
      description: 'Access training materials, restart tours, get support, and explore new features. Continuous learning helps you serve customers better and earn more!',
      side: 'bottom',
      align: 'end'
    }
  }
];

// Get tour steps based on user role
const getTourSteps = (role: string) => {
  switch (role.toLowerCase()) {
    case 'admin':
      return adminTourSteps;
    case 'agent':
      return agentTourSteps;
    case 'user':
    default:
      return userTourSteps;
  }
};

// Simple functional approach
let driverInstance: ReturnType<typeof driver> | null = null;

export const startTour = (userRole: string) => {
  const steps = getTourSteps(userRole);
  
  driverInstance = driver({
    showProgress: true,
    showButtons: ['next', 'previous', 'close'],
    nextBtnText: 'Next →',
    prevBtnText: '← Previous',
    doneBtnText: 'Finish Tour',
    progressText: 'Step {{current}} of {{total}}',
    allowClose: true,
    disableActiveInteraction: false,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    steps: steps as any,
    onHighlightStarted: () => {
      injectCustomCSS();
    },
    onDestroyed: () => {
      localStorage.setItem(`zenopay_tour_completed_${userRole}`, 'true');
    }
  });
  
  setTimeout(() => {
    if (driverInstance) {
      driverInstance.drive();
    }
  }, 500);
};

export const restartTour = (userRole: string) => {
  localStorage.removeItem(`zenopay_tour_completed_${userRole}`);
  startTour(userRole);
};

export const isTourCompleted = (userRole: string): boolean => {
  return localStorage.getItem(`zenopay_tour_completed_${userRole}`) === 'true';
};

export const stopTour = () => {
  if (driverInstance) {
    driverInstance.destroy();
    driverInstance = null;
  }
};

// Default export object
const tourService = {
  startTour,
  restartTour,
  isTourCompleted,
  stopTour
};

export default tourService;
