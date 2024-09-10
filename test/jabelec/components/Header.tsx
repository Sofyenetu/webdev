'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navItems = [
  'INSTALLATION',
  'RENOVATION',
  'BORNE VE',
  'CONTACT',
  'PARTENAIRES',
  'CERTIFICATIONS'
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="JABELEC Logo" width={120} height={40} className="mr-4" />
        </div>
        <nav className="hidden lg:flex space-x-4">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-gray-600 hover:text-green-700 transition duration-300 whitespace-nowrap">
              {item}
            </a>
          ))}
        </nav>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-green-700 transition duration-300">
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}