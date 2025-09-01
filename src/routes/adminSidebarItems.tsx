

import AllAgents from "@/pages/Admin/AllAgents";
import AllWallets from "@/pages/Admin/AllWallets";
import PromoteToAgent from "@/pages/Admin/PromoteToAgent";
import type { IsidebarItems } from "@/types/routingType";




export const adminSidebarItems : IsidebarItems[] = [
    {
      title: "Dashboard", 
      
      items: [
        {
          title: "All Wallets",
          url: "all-wallets", // Remove /admin prefix since it's already in the parent route
          component : AllWallets,
        },
        
        
      ],
    },
    {
      title: "Work",
    
      items: [
        {
          title: "All Agents",
          url: "all-agent", 
          component :  AllAgents,
        },
        {
          title: "Promote To Agent",
          url: "promote-to-agent", 
          component :  PromoteToAgent,
        },
        
                   
        
      ],
    },
   
  ]