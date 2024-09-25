import React from 'react'
import { ShoppingCart, Search, Menu, X, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function Navbar() {
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

    
  return (
    <div>
        <header className="sticky top-0 z-20 bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2 lg:hidden" onClick={toggleSidebar}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Sidebar</span>
            </Button>
            <a href="/" className="text-2xl font-bold">
              ShoeStore
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Input type="search" placeholder="Search..." className="w-64" />
            </div>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar