
import React from 'react';
import { 
  Ship, Truck, Train, Plane, Globe, Warehouse, 
  MapPin, Clock, Phone, Mail, Instagram, Twitter, 
  Facebook, Linkedin, ArrowRight, CheckCircle2 
} from 'lucide-react';

export const COLORS = {
  primary: '#091242',
  secondary: '#ff7e20',
  accent: '#f4f4f4',
};

export const SERVICES = [
  {
    icon: <Ship className="w-8 h-8" />,
    title: 'Maritime Freight Transportation',
    description: 'Logisco Air freight service deliver the knowledge & opportunity to optimize every mile on every lane. Get full-service.',
    category: 'SERVICE ONE'
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Land Freight Transportation',
    description: 'Logisco Air freight service deliver the knowledge & opportunity to optimize every mile on every lane. Get full-service.',
    category: 'SERVICE TWO'
  },
  {
    icon: <Train className="w-8 h-8" />,
    title: 'Train Freight Transportation',
    description: 'Logisco Air freight service deliver the knowledge & opportunity to optimize every mile on every lane. Get full-service.',
    category: 'SERVICE THREE'
  }
];

export const STATS = [
  { value: '50k', label: 'Successful Transportation', icon: <Ship /> },
  { value: '256', label: 'Land Freight Transportation', icon: <Truck /> },
  { value: '25+', label: 'Countries of Operation', icon: <Globe /> },
  { value: '125', label: 'Train Freight Transportation', icon: <Train /> },
];

export const BLOGS = [
  {
    date: 'DECEMBER 12, 2023',
    author: 'Rayon Williams',
    title: 'How new transportation system affecting ventures',
    image: 'https://picsum.photos/seed/blog1/600/400',
    excerpt: 'Logisco Air freight service deliver the knowledge & opportunity to optimize every mile on every lane.'
  },
  {
    date: 'DECEMBER 12, 2023',
    author: 'Rayon Williams',
    title: 'Easy Tracking system is changing modern logistics',
    image: 'https://picsum.photos/seed/blog2/600/400',
    excerpt: 'Logisco Air freight service deliver the knowledge & opportunity to optimize every mile on every lane.'
  },
  {
    date: 'DECEMBER 12, 2023',
    author: 'Rayon Williams',
    title: 'Prerequisites of sending goods through Containers',
    image: 'https://picsum.photos/seed/blog3/600/400',
    excerpt: 'Logisco Air freight service deliver the knowledge & opportunity to optimize every mile on every lane.'
  }
];
