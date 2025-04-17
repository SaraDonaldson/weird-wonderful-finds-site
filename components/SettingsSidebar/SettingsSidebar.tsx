'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ArrowLeft, Bell, ChevronLeft, Lock, NewspaperIcon, Settings, SlidersHorizontalIcon, WholeWordIcon } from "lucide-react"
import Link from "next/link"

const items = [
  {
    title: "Notifications",
    url: "#",
    icon: <Bell />,
  },
  {
    title: "Privacy",
    url: "#",
    icon: <Lock/>,
  },
  {
    title: "Visibility",
    url: "#",
    icon: <SlidersHorizontalIcon/>,
  },
  {
    title: "Content Preferences",
    url: "#",
    icon: <NewspaperIcon/>,
  },
    {
    title: "Region and Language",
    url: "#",
    icon: <WholeWordIcon/>,
  },

]
 
 
export function SettingsSidebar() {
  return (
    <Sidebar className="mt-8 pr-6">
      <SidebarHeader />
        <SidebarContent>
            <SidebarGroup className="gap-4">
                 <SidebarGroupLabel className=" text-slate-500">
                    <div className="flex flex-row py-2 items-center gap-2">
                       <Link href={'/my/account/'}>
                            <ArrowLeft size={22}/> <span>Account</span>
                       </Link> 
                    </div>
                 </SidebarGroupLabel>
            </SidebarGroup>
        <SidebarGroup className="gap-4 ">
          <SidebarGroupLabel className="gap-2 text-lg text-slate-300">
            <Settings size={24}  style={{width:24, height:24}}/>  
            <span>Settings</span>
          </SidebarGroupLabel>
          <SidebarGroupContent className="text-blue-300">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {item.icon }
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}