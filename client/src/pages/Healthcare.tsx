import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { UserIcon, HeartPulse, FileText, Circle, IdCard, Clock, ShieldX, UserPlus } from "lucide-react";
import { FeatureCard } from "@/components/ui/feature-card";

export default function Healthcare() {
  const services = [
    {
      title: "Medical Consultations",
      description: "Comprehensive evaluations and expert medical advice from our team of specialists. We provide thorough assessments and personalized treatment plans.",
      icon: <UserIcon />,
      items: ["Initial and follow-up consultations", "Specialist referrals when needed", "Telemedicine options available"],
    },
    {
      title: "Preventive Care",
      description: "Proactive health management to prevent illness and promote long-term wellness through regular screenings and health assessments.",
      icon: <HeartPulse />,
      items: ["Comprehensive health screenings", "Immunizations and vaccinations", "Health risk assessments"],
    },
    {
      title: "Health Management",
      description: "Ongoing support for managing chronic conditions with personalized care plans and regular monitoring.",
      icon: <FileText />,
      items: ["Chronic disease management", "Medication management", "Lifestyle modification support"],
    },
  ];

  const features = [
    {
      title: "Certified Professionals",
      description: "Our team consists of board-certified healthcare professionals with extensive experience in their specialties.",
      icon: <IdCard />,
    },
    {
      title: "Timely Care",
      description: "We prioritize prompt appointments and minimal wait times to ensure you receive care when you need it.",
      icon: <Clock />,
    },
    {
      title: "Patient-Centered Approach",
      description: "We focus on your individual needs and preferences to deliver personalized healthcare solutions.",
      icon: <ShieldX />,
    },
    {
      title: "Comprehensive Care",
      description: "From preventive services to specialized treatments, we provide a full spectrum of healthcare solutions.",
      icon: <UserPlus />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Healthcare Services - Apex Vision MNS</title>
        <meta 
          name="description" 
          content="Exceptional healthcare solutions designed to improve wellness and quality of life. Our team of professionals provides personalized care." 
        />
      </Helmet>
      <div>
        {/* Healthcare Header */}
        <div className="bg-primary/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-400 text-center">
              Healthcare Services
            </h1>
            <p className="mt-4 text-center text-neutral-300 max-w-2xl mx-auto">
              Exceptional healthcare solutions designed to improve wellness and quality of life.
            </p>
          </div>
        </div>

        {/* Healthcare Details */}
        <div className="container mx-auto px-4 py-16">
          {/* Overview */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-heading font-bold text-neutral-400 mb-4">Our Healthcare Approach</h2>
            <p className="text-neutral-300 mb-6">
              At Apex Vision MNS, we believe in providing patient-centered healthcare that addresses both immediate concerns and long-term wellbeing. Our team of experienced healthcare professionals is committed to delivering personalized care with compassion and expertise.
            </p>
            <p className="text-neutral-300">
              We utilize advanced medical technologies and evidence-based practices to ensure the highest standard of care for all our patients.
            </p>
          </div>

          {/* Healthcare Services List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary">{service.icon}</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-300 mb-4">{service.description}</p>
                <ul className="text-sm text-neutral-300 space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Circle className="text-xs text-primary mt-1 mr-2 h-3 w-3 fill-primary" />
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
              Why Choose Our Healthcare Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  iconBgClass="bg-primary/10"
                  iconColor="text-primary"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Healthcare Call To Action */}
        <div className="bg-primary/10 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-heading font-bold text-neutral-400 mb-4">
              Ready to experience exceptional healthcare?
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto mb-8">
              Contact us today to schedule a consultation or learn more about our healthcare services.
            </p>
            <Link href="/contact">
              <a className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-md font-semibold transition-colors shadow-md">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
