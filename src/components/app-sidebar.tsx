
import * as React from "react"


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Link } from "react-router"

import { User } from "lucide-react"
import { Button } from "./ui/button"
import { useUserInfoQuery } from "@/redux/Auth/auth.api"
import { getSidebarItems } from "@/utils/getSidebarItems"
import { ModeToggle } from "@/layout/ModeToggler"

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const {data : userData} = useUserInfoQuery(undefined)
  const data = {
    navMain: getSidebarItems(userData?.data?.role)
  }

  return (
    <Sidebar {...props} data-tour="sidebar">
      <SidebarHeader data-tour="sidebar-header">
        <div className="flex flex-col items-center gap-3 px-4 py-2 rounded-2xl  shadow-sm">
  
 <div className="flex flex-1 items-center gap-2">
   <Button variant="secondary" size="sm" data-tour="home-button">
    <Link to="/">Home</Link>
  </Button>
  <ModeToggle />
 </div>

  <div className="flex items-center gap-2" data-tour="user-info">
    <User className="h-6 w-6 text-muted-foreground" />
    <span className="text-sm font-semibold text-muted-foreground">
      {userData?.data?.name || "Guest"}
    </span>
  </div>
</div>
      </SidebarHeader>
      <SidebarContent data-tour="sidebar-content">{/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link 
                        to={item.url} 
                        data-tour={
                          item.url === 'my-wallet' ? 'my-wallet' :
                          item.url === 'user-profile' ? 'user-profile' :
                          item.url === 'add-money' ? 'add-money' :
                          item.url === 'withdraw' ? 'withdraw' :
                          item.url === 'send-money' ? 'send-money' :
                          item.url === 'my-transactions' ? 'my-transactions' :
                          item.url === 'analytics' ? 'analytics' :
                          item.url === 'all-wallets' ? 'all-wallets' :
                          item.url === 'all-transactions' ? 'all-transactions' :
                          item.url === 'all-users' ? 'all-users' :
                          item.url === 'all-agent' ? 'all-agents' :
                          item.url === 'agent-profile' ? 'agent-profile' :
                          item.url === 'cash-in' ? 'cash-in' :
                          item.url === 'cash-out' ? 'cash-out' :
                          undefined
                        }
                      >
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
