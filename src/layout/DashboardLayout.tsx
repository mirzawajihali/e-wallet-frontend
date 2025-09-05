

import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import TourButton from "@/components/TourButton"

import { Outlet } from "react-router"

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 justify-between" data-tour="dashboard-header">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" data-tour="sidebar-toggle" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          </div>
          <TourButton />
        </header>
        <div data-tour="dashboard-content">
          <Outlet/>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}