import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "Accounting", href: "/accounting" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Eye className="text-primary text-3xl mr-2" />
            <span className="text-2xl font-heading font-bold text-neutral-400">
              Apex<span className="text-primary">Vision</span> MNS
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "py-2 transition-colors",
                  location === link.href
                    ? "text-primary font-semibold border-b-2 border-primary"
                    : "hover:text-primary"
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <div className="flex flex-col px-4 py-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      className={cn(
                        "py-3 font-medium",
                        location === link.href
                          ? "text-primary font-semibold"
                          : "text-neutral-400 hover:text-primary"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
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
