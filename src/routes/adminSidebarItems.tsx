

import AllAgents from "@/pages/Admin/AllAgents";
import AllTransactions from "@/pages/Admin/AllTransactions";
import AllUsers from "@/pages/Admin/AllUsers";
import AllWallets from "@/pages/Admin/AllWallets";
import Analytics from "@/pages/Admin/Analytics";

import type { IsidebarItems } from "@/types/routingType";




export const adminSidebarItems : IsidebarItems[] = [
    {
      title: "Dashboard", 
      
      items: [

        {
          title: "Analytics",
          url: "analytics",
          component : Analytics,
        },
        {
          title: "All Wallets",
          url: "all-wallets",
          component : AllWallets,
        },
        {
          title: "All Transactions",
          url: "all-transactions",
          component : AllTransactions,
        },

        
        
      ],
    },
    {
      title: "Users",
    
      items: [
        {
          title: "All Users",
          url: "all-users", 
          component :  AllUsers,
        },
       
      ],
    },
    {
      title: "Agents",
    
      items: [
        {
          title: "All Agents",
          url: "all-agent", 
          component :  AllAgents,
        },
        
        
                   
        
      ],
    },
   
  ]