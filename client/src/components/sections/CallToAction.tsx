import { Link } from "wouter";

export default function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-heading font-bold mb-4">Ready to experience our services?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Contact us today to discover how Apex Vision MNS can transform your healthcare and accounting experience.
        </p>
        <Link href="/contact">
          <a className="inline-block bg-white text-primary hover:bg-neutral-100 py-3 px-8 rounded-md font-semibold transition-colors shadow-lg">
            Contact Us Now
          </a>
        </Link>
      </div>
    </div>
  );
}
