import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { 
  FileText, 
  Calculator, 
  BookOpen, 
  Circle,
  Award,
  Shield,
  Lightbulb,
  Settings 
} from "lucide-react";
import { FeatureCard } from "@/components/ui/feature-card";

export default function Accounting() {
  const services = [
    {
      title: "Financial Reporting",
      description: "Comprehensive financial statement preparation and analysis to provide clear insights into your financial position.",
      icon: <FileText />,
      items: ["Balance sheets and income statements", "Cash flow analysis", "Financial performance metrics"],
    },
    {
      title: "Tax Planning & Preparation",
      description: "Strategic tax planning and accurate preparation services to minimize tax liabilities and ensure compliance.",
      icon: <Calculator />,
      items: ["Individual and business tax returns", "Tax strategy development", "Tax compliance services"],
    },
    {
      title: "Bookkeeping",
      description: "Accurate recording and organization of financial transactions to maintain up-to-date and reliable financial records.",
      icon: <BookOpen />,
      items: ["Transaction recording and categorization", "Accounts payable and receivable management", "Bank reconciliation"],
    },
  ];

  const features = [
    {
      title: "Certified Expertise",
      description: "Our team consists of certified accountants with specialized knowledge in various financial domains.",
      icon: <Award />,
    },
    {
      title: "Data Security",
      description: "We implement robust security measures to protect your sensitive financial information.",
      icon: <Shield />,
    },
    {
      title: "Strategic Insights",
      description: "We go beyond numbers to provide valuable insights that support your business goals.",
      icon: <Lightbulb />,
    },
    {
      title: "Technology-Driven",
      description: "We leverage advanced accounting software to enhance accuracy and efficiency.",
      icon: <Settings />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Accounting Services - Apex Vision MNS</title>
        <meta 
          name="description" 
          content="Professional financial management solutions to optimize your business operations and financial health. Our certified professionals deliver accurate services." 
        />
      </Helmet>
      <div>
        {/* Accounting Header */}
        <div className="bg-secondary/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-400 text-center">
              Accounting Services
            </h1>
            <p className="mt-4 text-center text-neutral-300 max-w-2xl mx-auto">
              Professional financial management solutions to optimize your business operations and financial health.
            </p>
          </div>
        </div>

        {/* Accounting Details */}
        <div className="container mx-auto px-4 py-16">
          {/* Overview */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-heading font-bold text-neutral-400 mb-4">Our Accounting Approach</h2>
            <p className="text-neutral-300 mb-6">
              At Apex Vision MNS, we provide comprehensive accounting services designed to meet the unique financial needs of businesses and individuals. Our team of certified accountants brings expertise and precision to every client engagement.
            </p>
            <p className="text-neutral-300">
              We leverage advanced accounting technologies and best practices to deliver accurate, timely, and valuable financial insights that support informed decision-making.
            </p>
          </div>

          {/* Accounting Services List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <span className="text-secondary">{service.icon}</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-300 mb-4">{service.description}</p>
                <ul className="text-sm text-neutral-300 space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Circle className="text-xs text-secondary mt-1 mr-2 h-3 w-3 fill-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-heading font-bold text-neutral-400 mb-6">
              Why Choose Our Accounting Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  iconBgClass="bg-secondary/10"
                  iconColor="text-secondary"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Accounting Call To Action */}
        <div className="bg-secondary/10 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-heading font-bold text-neutral-400 mb-4">
              Ready to optimize your financial operations?
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto mb-8">
              Contact us today to discuss your accounting needs and discover how we can support your financial success.
            </p>
            <Link href="/contact">
              <a className="bg-secondary hover:bg-secondary/90 text-white py-3 px-8 rounded-md font-semibold transition-colors shadow-md">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
