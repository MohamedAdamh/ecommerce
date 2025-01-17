import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingCart, ChevronDown, Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Downloadapp } from "./ui/downloadapp"
import { ThemeToggle } from "../theme/theme-toggle"

export function SiteHeader() {
  return (
    <header className="w-full border-b">
      <div className="container px-4 md:px-6">
        <div className="flex h-16 items-center">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src=""
                alt="AliExpress"
                width={125}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex flex-1 items-center gap-4 px-6">
            <div className="relative flex-1">
              <Input
                placeholder="I'm shopping for..."
                className="w-full pl-4 pr-10"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="text-xs">
              <Downloadapp/>
            </Button>
          </div>

          <div className="flex items-center gap-4 justify-between">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-sm">
                  Abbeville/EN <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
                <DropdownMenuItem>Español</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-sm">
                  USD <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>USD</DropdownMenuItem>
                <DropdownMenuItem>EUR</DropdownMenuItem>
                <DropdownMenuItem>GBP</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" className="text-sm">
              Sign in / Register
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
          <ThemeToggle/>
        </div>

        <nav className="flex h-12 items-center gap-6 text-sm justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Menu className="h-4 w-4" />
                All Categories
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Women's Fashion</DropdownMenuItem>
              <DropdownMenuItem>Men's Fashion</DropdownMenuItem>
              <DropdownMenuItem>Electronics</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/deals" className="text-red-500 hover:text-red-600">
            3 from $0.99
          </Link>
          <Link href="/welcome" className="hover:text-gray-600">
            Welcome deal
          </Link>
          <Link href="/us-products" className="hover:text-gray-600">
            Ship from US
          </Link>
          <Link href="/wigs" className="hover:text-gray-600">
            Wigs
          </Link>
          <Link href="/super-deals" className="hover:text-gray-600">
            SuperDeals
          </Link>
          <Link href="/business" className="hover:text-gray-600">
            AliExpress Business
          </Link>
          <Link href="/furniture" className="hover:text-gray-600">
            Furniture
          </Link>
          <Link href="/beauty-health" className="hover:text-gray-600">
            Beauty & Health
          </Link>
          <Link href="/toys-games" className="hover:text-gray-600">
            Toys & Games
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                More
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Home & Garden</DropdownMenuItem>
              <DropdownMenuItem>Sports & Outdoors</DropdownMenuItem>
              <DropdownMenuItem>Automotive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  )
}

