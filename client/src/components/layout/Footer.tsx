import { Link } from "wouter";
import { Eye, Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-400 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <div className="flex items-center mb-3 transform transition-transform hover:scale-105 duration-300">
              <div className="relative">
                <Eye className="text-white h-6 w-6 mr-2 drop-shadow-md" strokeWidth={2.5} />
                <div className="absolute inset-0 bg-white/20 rounded-full blur-sm -z-10"></div>
              </div>
              <span className="text-lg font-heading font-bold">
                <span className="text-white">Apex</span>
                <span className="text-accent">Vision</span>
                <span className="text-white"> MNS</span>
              </span>
            </div>
            <p className="text-neutral-200 text-sm mb-3">
              Providing exceptional healthcare and accounting services.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-accent transition-all hover:-translate-y-1 duration-300">
                <Facebook size={16} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-all hover:-translate-y-1 duration-300">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-all hover:-translate-y-1 duration-300">
                <Linkedin size={16} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-all hover:-translate-y-1 duration-300">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-base font-heading font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="text-neutral-200 hover:text-white transition-all hover:translate-x-1 duration-300 inline-flex">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-200 hover:text-white transition-all hover:translate-x-1 duration-300 inline-flex">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/healthcare" className="text-neutral-200 hover:text-white transition-all hover:translate-x-1 duration-300 inline-flex">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/accounting" className="text-neutral-200 hover:text-white transition-all hover:translate-x-1 duration-300 inline-flex">
                  Accounting
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-200 hover:text-white transition-all hover:translate-x-1 duration-300 inline-flex">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-base font-heading font-semibold mb-2">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/terms" className="text-neutral-200 hover:text-white transition-all hover:translate-x-1 duration-300 inline-flex">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-neutral-200 hover:text-white transition-all hover:translate-x-1 duration-300 inline-flex">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-base font-heading font-semibold mb-2">Contact</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center text-neutral-200">
                <MapPin size={14} className="mr-2 flex-shrink-0" />
                <span>123 Business Avenue, Suite 200</span>
              </li>
              <li className="flex items-center text-neutral-200">
                <Mail size={14} className="mr-2 flex-shrink-0" />
                <span>info@apexvisionmns.com</span>
              </li>
              <li className="flex items-center text-neutral-200">
                <Phone size={14} className="mr-2 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-300/30 mt-6 pt-6 text-center text-neutral-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Apex Vision MNS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
