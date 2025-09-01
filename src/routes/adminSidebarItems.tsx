

import AllAgents from "@/pages/Admin/AllAgents";
import AllWallets from "@/pages/Admin/AllWallets";
import Analytics from "@/pages/Admin/Analytics";
import PromoteToAgent from "@/pages/Admin/PromoteToAgent";
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