import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgClass: string;
  iconColor: string;
  imageUrl: string;
  linkUrl: string;
  linkText: string;
  linkColor: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  iconBgClass,
  iconColor,
  imageUrl,
  linkUrl,
  linkText,
  linkColor,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div
        className="h-48 bg-neutral-200 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={cn("w-10 h-10 rounded-full flex items-center justify-center mr-3", iconBgClass)}>
            <span className={iconColor}>{icon}</span>
          </div>
          <h3 className="text-xl font-heading font-semibold">{title}</h3>
        </div>
        <p className="text-neutral-300 mb-6">{description}</p>
        <div className="flex items-center justify-between">
          <Link href={linkUrl}>
            <a className={cn("font-semibold hover:opacity-80 transition-colors flex items-center", linkColor)}>
              {linkText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
