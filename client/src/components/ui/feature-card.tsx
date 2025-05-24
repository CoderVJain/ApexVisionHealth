import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgClass: string;
  iconColor: string;
}

export function FeatureCard({ title, description, icon, iconBgClass, iconColor }: FeatureCardProps) {
  return (
    <div className="flex items-start">
      <div className={cn("w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1", iconBgClass)}>
        <span className={iconColor}>{icon}</span>
      </div>
      <div>
        <h3 className="font-heading font-semibold mb-2">{title}</h3>
        <p className="text-neutral-300">{description}</p>
      </div>
    </div>
  );
}
