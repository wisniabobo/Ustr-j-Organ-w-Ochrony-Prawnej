import {
  Scale,
  Building2,
  Gavel,
  Landmark,
  Briefcase,
  Users,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Scale,
  Building2,
  Gavel,
  Landmark,
  Briefcase,
  Users,
  ShieldCheck,
};

export function TopicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Scale;
  return <Icon className={className} />;
}
