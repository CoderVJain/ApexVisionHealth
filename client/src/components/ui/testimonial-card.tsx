import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  rating: number;
  avatarBgClass: string;
  avatarTextClass: string;
  initials: string;
}

export function TestimonialCard({
  content,
  author,
  role,
  rating,
  avatarBgClass,
  avatarTextClass,
  initials,
}: TestimonialCardProps) {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-accent text-accent" size={16} />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-accent text-accent" size={16} />);
    }

    return stars;
  };

  return (
    <div className="bg-neutral-100 p-6 rounded-lg shadow-sm">
      <div className="flex items-center text-accent mb-4">{renderStars()}</div>
      <p className="text-neutral-400 italic mb-4">{content}</p>
      <div className="flex items-center">
        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center mr-3", avatarBgClass)}>
          <span className={cn("font-semibold", avatarTextClass)}>{initials}</span>
        </div>
        <div>
          <h4 className="font-heading font-semibold">{author}</h4>
          <p className="text-sm text-neutral-300">{role}</p>
        </div>
      </div>
    </div>
  );
}
