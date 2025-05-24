import { Heart, LineChart } from "lucide-react";
import { ServiceCard } from "@/components/ui/service-card";

export default function FeaturedServices() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-neutral-400">Our Services</h2>
        <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
          Comprehensive solutions designed to meet your healthcare and accounting needs with excellence and precision.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <ServiceCard
          title="Healthcare Services"
          description="Comprehensive healthcare solutions focused on patient well-being and advanced medical care. Our team of specialists ensures quality treatment and support."
          icon={<Heart className="h-5 w-5" />}
          iconBgClass="bg-primary/10"
          iconColor="text-primary"
          imageUrl="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
          linkUrl="/healthcare"
          linkText="Learn more"
          linkColor="text-primary"
        />

        <ServiceCard
          title="Accounting Services"
          description="Expert financial management and accounting solutions to optimize your business operations. Our certified professionals deliver accurate and efficient services."
          icon={<LineChart className="h-5 w-5" />}
          iconBgClass="bg-secondary/10"
          iconColor="text-secondary"
          imageUrl="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
          linkUrl="/accounting"
          linkText="Learn more"
          linkColor="text-secondary"
        />
      </div>
    </div>
  );
}
