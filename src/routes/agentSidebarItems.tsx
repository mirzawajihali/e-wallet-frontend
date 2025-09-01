


import CashIn from "@/pages/Agent/CashIn";
import CashOut from "@/pages/Agent/CashOut";
import type { IsidebarItems } from "@/types/routingType";




export const agentSidebarItems : IsidebarItems[] = [
    
    {
      title: "Transactions",
    
      items: [
        {
          title: "Cash In",
          url: "cash-in", // Remove /admin prefix since it's already in the parent route
          component :  CashIn,
        },
        {
          title: "Cash Out",
          url: "cash-out", // Remove /admin prefix since it's already in the parent route
          component :  CashOut,
        },
        
                   
        
      ],
    },
   
  ]