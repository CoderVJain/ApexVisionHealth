import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
      <div
        className="absolute inset-0 bg-neutral-400 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000')",
        }}
      ></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Excellence in Healthcare & Accounting Services
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Providing exceptional healthcare and accounting solutions tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services">
              <a className="bg-accent hover:bg-accent/90 text-white py-3 px-6 rounded-md text-center font-semibold transition-colors shadow-lg">
                Our Services
              </a>
            </Link>
            <Link href="/contact">
              <a className="bg-white hover:bg-neutral-100 text-primary py-3 px-6 rounded-md text-center font-semibold transition-colors">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
