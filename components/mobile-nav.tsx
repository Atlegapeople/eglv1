'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from './theme-toggle'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

interface MobileNavProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void
  aboutRef: React.RefObject<HTMLDivElement | null>
  servicesRef: React.RefObject<HTMLDivElement | null>
  formRef: React.RefObject<HTMLDivElement | null>
}

export function MobileNav({ scrollToSection, aboutRef, servicesRef, formRef }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  const handleNavClick = (ref: React.RefObject<HTMLDivElement | null>) => {
    scrollToSection(ref)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <div className="flex items-center justify-between pb-4 border-b">
          <div className="font-bold text-lg">Menu</div>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        
        <nav className="flex flex-col mt-8 space-y-4">
          <Button 
            variant="ghost" 
            className="justify-start text-lg font-medium"
            onClick={() => handleNavClick(aboutRef)}
          >
            About Us
          </Button>
          <Button 
            variant="ghost" 
            className="justify-start text-lg font-medium"
            onClick={() => handleNavClick(servicesRef)}
          >
            Services
          </Button>
          <Button 
            variant="ghost" 
            className="justify-start text-lg font-medium"
            onClick={() => handleNavClick(formRef)}
          >
            Contact
          </Button>
        </nav>
        
        <div className="mt-auto pt-6 border-t">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Switch Theme</div>
            <ThemeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
