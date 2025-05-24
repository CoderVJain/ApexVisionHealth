import { Link } from "wouter";
import { Eye, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-400 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Eye className="text-white text-2xl mr-2" />
              <span className="text-xl font-heading font-bold">
                Apex<span className="text-accent">Vision</span> MNS
              </span>
            </div>
            <p className="text-neutral-200 mb-4">
              Providing exceptional healthcare and accounting services to meet your personal and business needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/healthcare" className="text-neutral-200 hover:text-white transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/accounting" className="text-neutral-200 hover:text-white transition-colors">
                  Accounting
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/healthcare" className="text-neutral-200 hover:text-white transition-colors">
                  Medical Consultations
                </Link>
              </li>
              <li>
                <Link href="/healthcare" className="text-neutral-200 hover:text-white transition-colors">
                  Preventive Care
                </Link>
              </li>
              <li>
                <Link href="/healthcare" className="text-neutral-200 hover:text-white transition-colors">
                  Health Management
                </Link>
              </li>
              <li>
                <Link href="/accounting" className="text-neutral-200 hover:text-white transition-colors">
                  Financial Reporting
                </Link>
              </li>
              <li>
                <Link href="/accounting" className="text-neutral-200 hover:text-white transition-colors">
                  Tax Planning & Preparation
                </Link>
              </li>
              <li>
                <Link href="/accounting" className="text-neutral-200 hover:text-white transition-colors">
                  Bookkeeping
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-neutral-200 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-neutral-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <h3 className="text-lg font-heading font-semibold mt-6 mb-4">Contact</h3>
            <p className="text-neutral-200">
              123 Business Avenue, Suite 200
              <br />
              Metropolitan City, State 12345
              <br />
              info@apexvisionmns.com
              <br />
              (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-300/30 mt-8 pt-8 text-center text-neutral-200">
          <p>&copy; {new Date().getFullYear()} Apex Vision MNS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
