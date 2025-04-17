'use client'

import { SettingsSidebar } from '@/components/SettingsSidebar/SettingsSidebar'
import {  SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

function SettingsController() {
  return (
    <div>
       <SidebarProvider>
            <SettingsSidebar></SettingsSidebar>
       </SidebarProvider>
    </div>
  )
}

export default SettingsController