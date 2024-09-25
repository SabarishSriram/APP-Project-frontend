
import { ShoppingCart, Search, Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {shoes} from "./lib/shoes.js"
import Navbar from './components/Navbar.jsx'

export default function ShoeStore() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)








  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'block' : 'hidden'} lg:block w-64 bg-gray-100 p-4 fixed inset-y-0 left-0 z-10 overflow-y-auto transition-all duration-300 ease-in-out lg:relative lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center lg:hidden">
            <h2 className="text-xl font-semibold">Categories</h2>
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="mt-8">
            <ul className="space-y-2">
              <li>
                <Button variant="ghost" className="w-full justify-between">
                  Men <ChevronDown className="h-4 w-4" />
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-between">
                  Women <ChevronDown className="h-4 w-4" />
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-between">
                  Kids <ChevronDown className="h-4 w-4" />
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-between">
                  Brands <ChevronDown className="h-4 w-4" />
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-between">
                  Sale <ChevronDown className="h-4 w-4" />
                </Button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-grow container mx-auto px-4 py-8 lg:ml-6">
          <h1 className="text-3xl font-bold mb-6">Featured Shoes</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {shoes.map((shoe) => (
              <div key={shoe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={shoe.image} alt={shoe.name} className="w-full h-48" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{shoe.name}</h2>
                  <p className="text-gray-600">${shoe.price}</p>
                  <Button className="w-full mt-4">Add to Cart</Button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <footer className="bg-gray-100 border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-600">We offer a wide selection of high-quality shoes for men, women, and kids.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
                <li><a href="/shipping" className="text-gray-600 hover:text-gray-900">Shipping Information</a></li>
                <li><a href="/returns" className="text-gray-600 hover:text-gray-900">Returns & Exchanges</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-600 mb-2">Subscribe to our newsletter for updates and exclusive offers.</p>
              <form className="flex">
                <Input type="email" placeholder="Your email" className="flex-grow" />
                <Button type="submit" className="ml-2">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} ShoeStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}