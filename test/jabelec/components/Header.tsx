'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { name: 'ACCUEIL', href: '#hero' },
  { 
    name: 'SERVICES', 
    href: '#services', 
    subItems: [
      { name: 'INSTALLATION', href: '#installation' },
      { name: 'RENOVATION', href: '#rénovation' },
      { name: 'BORNE VE', href: '#borne ve' },
      { name: 'DEPANNAGE', href: '#dépannage' }
    ] 
  },
  { name: 'CONTACT', href: '#contact' },
  { name: 'PARTENAIRES', href: '#partners' },
  { name: 'CERTIFICATIONS', href: '#certifications' }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="JABELEC Logo" width={150} height={50} className="mr-4" />
        </div>
        <nav className="hidden lg:flex space-x-6 items-center">
          {navItems.map((item) => (
            item.subItems ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-lg font-semibold text-black hover:text-green-700 p-0 h-auto">
                    {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.subItems.map((subItem) => (
                    <DropdownMenuItem key={subItem.name}>
                      <a href={subItem.href} className="w-full">
                        {subItem.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a key={item.name} href={item.href} className="text-lg font-semibold text-black hover:text-green-700 transition duration-300">
                {item.name}
              </a>
            )
          ))}
        </nav>
        <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon" className="lg:hidden text-black hover:text-green-700">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              item.subItems ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-full justify-start text-black hover:text-green-700">{item.name}</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.subItems.map((subItem) => (
                      <DropdownMenuItem key={subItem.name}>
                        <a href={subItem.href} className="w-full">
                          {subItem.name}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a key={item.name} href={item.href} className="text-black hover:text-green-700 transition duration-300">
                  {item.name}
                </a>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}