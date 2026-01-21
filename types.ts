
export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export interface CaseStudy {
  title: string;
  category: string;
  image: string;
  link: string;
}

export interface BlogItem {
  date: string;
  author: string;
  title: string;
  image: string;
  excerpt: string;
}
