import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Eye, Home, LayoutGrid, Heart, LineChart, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", icon: <Home className="h-5 w-5 mr-3" /> },
  { label: "Services", href: "/services", icon: <LayoutGrid className="h-5 w-5 mr-3" /> },
  { label: "Healthcare", href: "/healthcare", icon: <Heart className="h-5 w-5 mr-3" /> },
  { label: "Accounting", href: "/accounting", icon: <LineChart className="h-5 w-5 mr-3" /> },
  { label: "Contact", href: "/contact", icon: <Phone className="h-5 w-5 mr-3" /> },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center transition-transform hover:scale-105 duration-300">
              <div className="relative">
                <Eye className="text-primary h-8 w-8 mr-2 drop-shadow-md" strokeWidth={2.5} />
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-sm -z-10"></div>
              </div>
              <span className="text-2xl font-heading font-bold text-neutral-400">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Apex</span>
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Vision</span>
                <span> MNS</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={cn(
                  "py-2 transition-all duration-300 cursor-pointer",
                  location === link.href
                    ? "text-primary font-semibold border-b-2 border-primary"
                    : "hover:text-primary hover:-translate-y-1"
                )}
              >
                {link.label}
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-neutral-400 hover:text-primary hover:bg-primary/5 transition-all duration-300"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 border-l-primary/20 w-[280px]">
              <SheetHeader className="px-6 py-4 border-b">
                <SheetTitle className="text-left text-primary font-heading">Menu</SheetTitle>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-4 top-4 text-neutral-400 hover:text-primary hover:bg-primary/5"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </SheetHeader>
              <div className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <div
                      className={cn(
                        "flex items-center py-3 px-6 transition-all duration-300",
                        location === link.href
                          ? "text-primary font-semibold bg-primary/5"
                          : "text-neutral-400 hover:text-primary hover:bg-primary/5"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.icon}
                      {link.label}
                    </div>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
