"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { FileText, Home, User, Menu } from "lucide-react"
import { useState } from "react"

export function NavBar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Idi na sadržaj
      </a>

      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
        <nav 
          className="max-w-7xl mx-auto px-6 md:px-8 flex h-16 items-center justify-between"
          aria-label="Main navigation"
        >
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className="flex items-center space-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
              aria-label="Blog home"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/50 group-focus-visible:scale-110">
                <span className="text-primary-foreground font-bold text-lg select-none">B</span>
              </div>
              <span className="text-xl font-bold group-hover:text-primary transition-colors duration-300 select-none">
                Blog
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-1" role="menubar">
              <Button 
                variant="ghost" 
                asChild
                className={`gap-2 relative group cursor-pointer ${
                  isActive("/") && pathname === "/" 
                    ? "text-primary" 
                    : ""
                }`}
                role="none"
              >
                <Link 
                  href="/"
                  role="menuitem"
                  aria-current={pathname === "/" ? "page" : undefined}
                >
                  <Home className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
                  <span>Početna</span>
                  {isActive("/") && pathname === "/" && (
                    <span 
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" 
                      aria-hidden="true"
                    />
                  )}
                  <span 
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-6" 
                    aria-hidden="true"
                  />
                </Link>
              </Button>
              
              <Button 
                variant="ghost" 
                asChild
                className={`gap-2 relative group cursor-pointer ${
                  isActive("/blog") 
                    ? "text-primary" 
                    : ""
                }`}
                role="none"
              >
                <Link 
                  href="/blog"
                  role="menuitem"
                  aria-current={pathname.startsWith("/blog") ? "page" : undefined}
                >
                  <FileText className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
                  <span>Članci</span>
                  {isActive("/blog") && (
                    <span 
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" 
                      aria-hidden="true"
                    />
                  )}
                  <span 
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-6" 
                    aria-hidden="true"
                  />
                </Link>
              </Button>
              
              <Button 
                variant="ghost" 
                asChild
                className={`gap-2 relative group cursor-pointer ${
                  isActive("/about") 
                    ? "text-primary" 
                    : ""
                }`}
                role="none"
              >
                <Link 
                  href="/about"
                  role="menuitem"
                  aria-current={pathname === "/about" ? "page" : undefined}
                >
                  <User className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
                  <span>O meni</span>
                  {isActive("/about") && (
                    <span 
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" 
                      aria-hidden="true"
                    />
                  )}
                  <span 
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-6" 
                    aria-hidden="true"
                  />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden border-t bg-background/95 backdrop-blur-lg"
            role="menu"
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
              <Button 
                variant="ghost" 
                asChild
                className={`justify-start gap-3 w-full ${
                  isActive("/") && pathname === "/" ? "text-primary bg-primary/5" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link 
                  href="/"
                  role="menuitem"
                  aria-current={pathname === "/" ? "page" : undefined}
                >
                  <Home className="h-4 w-4" aria-hidden="true" />
                  <span>Početna</span>
                </Link>
              </Button>
              
              <Button 
                variant="ghost" 
                asChild
                className={`justify-start gap-3 w-full ${
                  isActive("/blog") ? "text-primary bg-primary/5" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link 
                  href="/blog"
                  role="menuitem"
                  aria-current={pathname.startsWith("/blog") ? "page" : undefined}
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  <span>Članci</span>
                </Link>
              </Button>
              
              <Button 
                variant="ghost" 
                asChild
                className={`justify-start gap-3 w-full ${
                  isActive("/about") ? "text-primary bg-primary/5" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link 
                  href="/about"
                  role="menuitem"
                  aria-current={pathname === "/about" ? "page" : undefined}
                >
                  <User className="h-4 w-4" aria-hidden="true" />
                  <span>O meni</span>
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
