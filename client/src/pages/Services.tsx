import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Check, Heart, LineChart } from "lucide-react";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services - Apex Vision MNS</title>
        <meta 
          name="description" 
          content="Discover our comprehensive range of healthcare and accounting solutions designed to meet your needs." 
        />
      </Helmet>
      <div>
        {/* Services Header */}
        <div className="bg-primary/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-400 text-center">Our Services</h1>
            <p className="mt-4 text-center text-neutral-300 max-w-2xl mx-auto">
              Discover our comprehensive range of healthcare and accounting solutions designed to meet your needs.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Healthcare Services */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Heart className="text-primary text-xl" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-neutral-400">Healthcare Services</h2>
              </div>

              <p className="text-neutral-300 mb-6">
                Our comprehensive healthcare services are designed to provide exceptional care and support for individuals and organizations.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="text-success mt-1 mr-3" />
                  <div>
                    <h3 className="font-heading font-semibold">Medical Consultations</h3>
                    <p className="text-sm text-neutral-300">Expert medical advice from experienced healthcare professionals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-success mt-1 mr-3" />
                  <div>
                    <h3 className="font-heading font-semibold">Preventive Care</h3>
                    <p className="text-sm text-neutral-300">Comprehensive screenings and preventive health measures.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-success mt-1 mr-3" />
                  <div>
                    <h3 className="font-heading font-semibold">Health Management</h3>
                    <p className="text-sm text-neutral-300">Ongoing support for chronic condition management.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-success mt-1 mr-3" />
                  <div>
                    <h3 className="font-heading font-semibold">Specialized Care</h3>
                    <p className="text-sm text-neutral-300">Targeted treatments for specific health conditions.</p>
                  </div>
                </li>
              </ul>

              <Link href="/healthcare">
                <a className="inline-block bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded-md font-semibold transition-colors">
                  Learn More
                </a>
              </Link>
            </div>

            {/* Accounting Services */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                  <LineChart className="text-secondary text-xl" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-neutral-400">Accounting Services</h2>
              </div>

              <p className="text-neutral-300 mb-6">
                Our accounting services provide financial clarity and strategic insights to help businesses and individuals achieve their financial goals.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="text-success mt-1 mr-3" />
                  <div>
                    <h3 className="font-heading font-semibold">Financial Reporting</h3>
                    <p className="text-sm text-neutral-300">Accurate and timely financial statements and reports.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-success mt-1 mr-3" />
                  <div>
                    <h3 className="font-heading font-semibold">Tax Planning & Preparation</h3>
                    <p className="text-sm text-neutral-300">Strategic tax planning to minimize liabilities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-success mt-1 mr-3" />
                  <div>
                    <h3 className="font-heading font-semibold">Bookkeeping</h3>
                    <p className="text-sm text-neutral-300">Comprehensive recording of financial transactions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-success mt-1 mr-3" />
                  <div>
                    <h3 className="font-heading font-semibold">Financial Advisory</h3>
                    <p className="text-sm text-neutral-300">Expert guidance for financial decision-making.</p>
                  </div>
                </li>
              </ul>

              <Link href="/accounting">
                <a className="inline-block bg-secondary hover:bg-secondary/90 text-white py-2 px-6 rounded-md font-semibold transition-colors">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
