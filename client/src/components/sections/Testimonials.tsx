import { TestimonialCard } from "@/components/ui/testimonial-card";

export default function Testimonials() {
  const testimonials = [
    {
      content:
        "The healthcare services provided by Apex Vision have been exceptional. Their team is professional, caring and highly skilled.",
      author: "John Doe",
      role: "Healthcare Patient",
      rating: 5,
      avatarBgClass: "bg-primary/20",
      avatarTextClass: "text-primary",
      initials: "JD",
    },
    {
      content:
        "Their accounting team transformed our financial operations. Detailed, thorough, and extremely professional in their approach.",
      author: "Alice Smith",
      role: "Small Business Owner",
      rating: 5,
      avatarBgClass: "bg-secondary/20",
      avatarTextClass: "text-secondary",
      initials: "AS",
    },
    {
      content:
        "I've been using both their healthcare and accounting services for my clinic. The integrated approach has been invaluable.",
      author: "Dr. Robert Johnson",
      role: "Medical Director",
      rating: 4.5,
      avatarBgClass: "bg-primary/20",
      avatarTextClass: "text-primary",
      initials: "RJ",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-neutral-400">What Our Clients Say</h2>
          <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
            Hear from businesses and individuals who have experienced the Apex Vision difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}
