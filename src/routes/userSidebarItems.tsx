

import AddMoney from "@/pages/User/AddMoney";
import MyTransactions from "@/pages/User/MyTransactions";

import MyWallet from "@/pages/User/MyWallet";
import SendMoney from "@/pages/User/SendMoney";
import UserProfile from "@/pages/User/UserProfile";
import Withdraw from "@/pages/User/Withdraw";
import type { IsidebarItems } from "@/types/routingType";




export const userSidebarItems : IsidebarItems[] = [
    {
      title: "Dashboard", 


      
      items: [

        {
          title: "My Wallet",
          url: "my-wallet", // Remove /admin prefix since it's already in the parent route
          component : MyWallet,
        },
        {
          title: "My Profile",
          url: "user-profile", // Remove /admin prefix since it's already in the parent route
          component : UserProfile,
        },
        
        
      ],
    },
    {
      title: "Transaction",
    
      items: [
        {
          title: "Add Money",
          url: "add-money", 
          component :  AddMoney,
        },
        {
          title: "Withdraw Money",
          url: "withdraw", // Remove /admin prefix since it's already in the parent route
          component :  Withdraw,
        },
        {
          title: "Send Money",
          url: "send-money", // Remove /admin prefix since it's already in the parent route
          component :  SendMoney,
        },
        {
          title: "My Transactions",
          url: "my-transactions", // Remove /admin prefix since it's already in the parent route
          component :  MyTransactions,
        },
       
        
                   
        
      ],
    },
   
  ]