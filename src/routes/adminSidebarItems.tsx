

import AllAgents from "@/pages/Admin/AllAgents";
import AllUsers from "@/pages/Admin/AllUsers";
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
      title: "Users",
    
      items: [
        {
          title: "All Users",
          url: "all-users", 
          component :  AllUsers,
        },
        {
          title: "Promote To Agent",
          url: "promote-to-agent", 
          component :  PromoteToAgent,
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