
import React from 'react';
import { 
  Phone, Mail, Facebook, Twitter, Linkedin, Instagram, MapPin, Clock,
  ArrowRight, Play, CheckCircle2, ChevronDown, Plus, Minus, Search,
  Ship, Globe, Warehouse
} from 'lucide-react';
import { SERVICES, STATS, BLOGS } from './constants';

// --- Utility Components ---
const SectionTitle = ({ subtitle, title, light = false }: { subtitle: string, title: string, light?: boolean }) => (
  <div className="mb-12">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-2 h-2 bg-orange-500 rounded-full" />
      <span className={`text-sm font-semibold uppercase tracking-widest ${light ? 'text-white' : 'text-blue-dark'}`}>
        {subtitle}
      </span>
    </div>
    <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? 'text-white' : 'text-blue-dark'}`}>
      {title}
    </h2>
  </div>
);

const Button = ({ children, variant = 'primary', className = '' }: { children: React.ReactNode, variant?: 'primary' | 'secondary' | 'outline' | 'dark', className?: string }) => {
  const base = "px-6 py-3 font-semibold transition-all duration-300 flex items-center gap-2 group whitespace-nowrap";
  const variants = {
    primary: "bg-orange text-white hover:bg-orange-600",
    secondary: "bg-white text-blue-dark hover:bg-gray-100",
    outline: "border-2 border-white text-white hover:bg-white hover:text-blue-dark",
    dark: "bg-blue-dark text-white hover:bg-blue-900"
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// --- Page Sections ---

const TopBar = () => (
  <div className="bg-blue-dark text-white py-3 hidden md:block border-b border-gray-700">
    <div className="container mx-auto px-4 flex justify-between items-center text-xs">
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-orange" />
          <span>Opening Hours: Mon - Fri: 8am to 11am - Closed on Weekends</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-orange" />
          <span>Location Near you: San Francisco</span>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <span>REACH US:</span>
        <div className="flex gap-3">
          <Facebook size={14} />
          <Twitter size={14} />
          <Instagram size={14} />
          <Linkedin size={14} />
        </div>
      </div>
    </div>
  </div>
);

const Navbar = () => (
  <header className="sticky top-0 z-50 bg-white shadow-md">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="bg-blue-dark p-2 rounded">
          {/* Added missing Ship icon */}
          <Ship className="text-white" size={24} />
        </div>
        <h1 className="text-2xl font-black text-blue-dark tracking-tighter">Logisco</h1>
      </div>
      
      <nav className="hidden lg:flex gap-8 font-medium text-blue-dark">
        <a href="#" className="hover:text-orange transition-colors">Home</a>
        <a href="#" className="hover:text-orange transition-colors">Services</a>
        <a href="#" className="hover:text-orange transition-colors">Project</a>
        <a href="#" className="hover:text-orange transition-colors">Team</a>
        <a href="#" className="hover:text-orange transition-colors">Blog</a>
        <a href="#" className="hover:text-orange transition-colors">Contact</a>
      </nav>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 border-r pr-4 border-gray-200">
          <div className="bg-orange p-2 rounded-full">
            <Phone size={16} className="text-white" />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 leading-none">Call Us Anytime</p>
            <p className="text-sm font-bold text-blue-dark">+011 775 643 21</p>
          </div>
        </div>
        <Button variant="dark" className="hidden sm:flex">REQUEST A QUOTE</Button>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative h-[600px] lg:h-[800px] overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000" 
        className="w-full h-full object-cover brightness-[0.4]"
        alt="Cargo Port"
      />
    </div>
    <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10 text-white">
      <div className="max-w-2xl">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 bg-orange rounded-full" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-80">Logisco Transportation Inc</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
          Welcome To Logisco Cargo <br />
          <span className="text-orange">Transport Services</span>
        </h2>
        <p className="text-lg opacity-80 mb-8 max-w-lg">
          Take your business to the next level with Logisco new business management tools. Logisco will open a new horizon for us.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">
            Contact Logisco <CheckCircle2 size={18} />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const Partners = () => (
  <div className="bg-white py-12 border-b border-gray-100">
    <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
      <img src="https://picsum.photos/seed/p1/150/50" alt="Logistics" className="h-8" />
      <img src="https://picsum.photos/seed/p2/150/50" alt="Freightex" className="h-8" />
      <img src="https://picsum.photos/seed/p3/150/50" alt="Travelgood" className="h-8" />
      <img src="https://picsum.photos/seed/p4/150/50" alt="Trucking" className="h-8" />
      <img src="https://picsum.photos/seed/p5/150/50" alt="Flyfaster" className="h-8" />
    </div>
  </div>
);

const About = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
              alt="Truck Logistics" 
              className="rounded-sm w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-2xl rounded-sm max-w-[280px]">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-orange">20</div>
                <div className="text-sm font-bold text-blue-dark leading-tight uppercase">Years of Experience</div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-4">
                 <div className="text-xl font-bold text-blue-dark">10</div>
                 <div className="text-xs font-semibold text-gray-500 uppercase">Country Operation</div>
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 border-8 border-orange opacity-20" />
        </div>

        <div>
          <SectionTitle subtitle="About Logisco" title="We'll keep your items damage free" />
          <p className="text-gray-600 mb-8 leading-relaxed">
            Logisco Air freight service deliver the knowledge & opportunity to optimize every mile on every lane. Get full-service Truckload division provide more options to manage costs by combining technology intelligence.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm font-bold text-blue-dark">
                <ArrowRight size={16} className="text-orange" /> Intermodal Shipping
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-blue-dark">
                <ArrowRight size={16} className="text-orange" /> Freeze Product Shipping
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-blue-dark">
                <ArrowRight size={16} className="text-orange" /> Hot Shot Trucking
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm font-bold text-blue-dark">
                <ArrowRight size={16} className="text-orange" /> Container Freight
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-blue-dark">
                <ArrowRight size={16} className="text-orange" /> Intermodal Shipping
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-blue-dark">
                <ArrowRight size={16} className="text-orange" /> Flatbed Shipping
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <Button variant="dark">Contact Us <CheckCircle2 size={16} /></Button>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase mb-1">Have Questions?</p>
              <p className="text-lg font-bold text-blue-dark">+01 546 378 333</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="bg-blue-dark py-20 text-white border-y border-white/10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {STATS.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="mb-4 text-orange opacity-80">
              {/* Fix for React.cloneElement type error by casting to React.ReactElement<any> */}
              {React.cloneElement(stat.icon as React.ReactElement<any>, { size: 40 })}
            </div>
            <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.value}</div>
            <div className="text-xs md:text-sm font-semibold uppercase tracking-widest opacity-60">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="py-24 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 mb-3 bg-white px-4 py-1.5 rounded-full shadow-sm">
          <div className="w-1.5 h-1.5 bg-orange rounded-full" />
          <span className="text-xs font-bold uppercase tracking-widest text-blue-dark">Our Services</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-dark mb-4">Wide Variety of Logistics Services</h2>
        <p className="text-gray-500">Logisco Air freight service deliver the knowledge & opportunity to optimize every mile on every lane. Get full-service</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map((s, i) => (
          <div key={i} className="bg-white p-10 group hover:shadow-2xl transition-all duration-500 border-b-4 border-transparent hover:border-orange">
            <div className="text-orange mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">
              {s.icon}
            </div>
            <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-tighter">{s.category}</div>
            <h3 className="text-xl font-bold text-blue-dark mb-4 group-hover:text-orange transition-colors">{s.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">{s.description}</p>
            <button className="flex items-center gap-2 text-xs font-bold text-blue-dark hover:text-orange transition-colors group-hover:gap-4 duration-300 uppercase tracking-widest">
              Read More <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center gap-3">
        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-dark hover:text-white transition-all">
          <ArrowRight size={18} className="rotate-180" />
        </button>
        <button className="w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center hover:bg-blue-dark transition-all">
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <SectionTitle subtitle="Why Choose Us" title="Why we are considered the best in business" />
          <p className="text-gray-600 mb-10">
             Logisco Air freight service deliver the knowledge & opportunity to optimize every mile on every lane. Get full-service Truckload division provide more options to manage costs by combining technology intelligence.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-blue-dark group-hover:bg-orange group-hover:text-white transition-all">
                {/* Added missing Globe icon */}
                <Globe size={32} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-blue-dark mb-2">Global Logistics Operation</h4>
                <p className="text-sm text-gray-500">Giving consultancy for every financial projection report and analysis for existing project</p>
              </div>
            </div>
            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-blue-dark group-hover:bg-orange group-hover:text-white transition-all">
                {/* Added missing Warehouse icon */}
                <Warehouse size={32} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-blue-dark mb-2">Modern Warehousing Technique</h4>
                <p className="text-sm text-gray-500">Giving consultancy for every financial projection report and analysis for existing project</p>
              </div>
            </div>
            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-blue-dark group-hover:bg-orange group-hover:text-white transition-all">
                {/* Added missing Ship icon */}
                <Ship size={32} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-blue-dark mb-2">International Transportation</h4>
                <p className="text-sm text-gray-500">Giving consultancy for every financial projection report and analysis for existing project</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded overflow-hidden shadow-2xl h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1570675621540-8462002570d9?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover" 
              alt="Global Freight"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 right-8 bg-blue-dark p-10 text-white flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-2xl font-bold mb-2">We ensure safe <br />transportation & delivery</h4>
              <p className="text-sm opacity-60">Mauris ut enim sit amet lacus ornare ullamcorper. Praesent placeat purus rhoncus, vel tincidunt odio ultrices.</p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="bg-orange p-3 rounded-full">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <p className="text-xs opacity-60 font-bold uppercase">Call Us</p>
                <p className="font-bold whitespace-nowrap">(00) 123 456 811</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WorkProcess = () => (
  <section className="py-24 bg-gray-50 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-xl mx-auto mb-16">
        <SectionTitle subtitle="Our Work Process" title="We always follow the best ways of logistics" />
        <p className="text-gray-500 -mt-8">Logisco Air freight service deliver the knowledge & opportunity to optimize every</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 relative z-10">
        {[
          { step: "1", title: "Receive Packages", text: "Logisco Air freight service deliver to know ledge & opportunity to optimize Logisco Air freight service deliver to know ledge and opportunity to optimize.", img: "https://picsum.photos/seed/wp1/400/300" },
          { step: "2", title: "Transport Packages", text: "Logisco Air freight service deliver to know ledge & opportunity to optimize Logisco Air freight service deliver to know ledge and opportunity to optimize.", img: "https://picsum.photos/seed/wp2/400/300" },
          { step: "3", title: "Deliver Packages", text: "Logisco Air freight service deliver to know ledge & opportunity to optimize Logisco Air freight service deliver to know ledge and opportunity to optimize.", img: "https://picsum.photos/seed/wp3/400/300" }
        ].map((item, i) => (
          <div key={i} className="text-center group">
            <div className="relative mb-10 inline-block">
               <img src={item.img} className="rounded h-56 w-72 object-cover" alt={item.title} />
               <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-orange text-white font-black text-xl flex items-center justify-center rounded-full border-4 border-white">
                 {item.step}
               </div>
            </div>
            <h4 className="text-xl font-bold text-blue-dark mb-4">{item.step}: {item.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
      
      {/* Decorative dots/lines could go here as SVGs */}
    </div>
  </section>
);

const QuoteAndTestimonials = () => (
  <section className="py-24 bg-blue-dark text-white relative">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="bg-white p-10 text-gray-900 rounded-sm">
           <h3 className="text-2xl font-bold mb-8 text-blue-dark">Request Quote Form</h3>
           <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full bg-accent border-none px-4 py-3 text-sm focus:ring-2 focus:ring-orange" />
                <input type="email" placeholder="Email" className="w-full bg-accent border-none px-4 py-3 text-sm focus:ring-2 focus:ring-orange" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Phone" className="w-full bg-accent border-none px-4 py-3 text-sm focus:ring-2 focus:ring-orange" />
                <input type="text" placeholder="Distance (in Kilometer)" className="w-full bg-accent border-none px-4 py-3 text-sm focus:ring-2 focus:ring-orange" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <select className="w-full bg-accent border-none px-4 py-3 text-sm focus:ring-2 focus:ring-orange">
                  <option>Freight Type</option>
                </select>
                <select className="w-full bg-accent border-none px-4 py-3 text-sm focus:ring-2 focus:ring-orange">
                  <option>Load</option>
                </select>
              </div>
              <Button variant="dark" className="w-full justify-center">Get A Quote <CheckCircle2 size={18} /></Button>
              <div className="text-center pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400 mb-2">Or Give us a call +098 765 4321</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">The Support Centre Is Available 24/7</p>
              </div>
           </form>
        </div>

        <div>
          <SectionTitle subtitle="Testimonial" title="What our clients say about our service" light />
          <p className="opacity-70 mb-12 -mt-8">Logisco Air freight service deliver the knowledge & opportunity to optimize every</p>
          
          <div className="bg-[#0f1b5e] p-10 relative">
            <div className="absolute top-8 right-10 text-orange opacity-20">
              <svg className="w-20 h-20 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12H13.017V9C13.017 7.34315 14.3601 6 16.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 16.6569 20.6738 18 19.017 18H16.017L16.017 21H14.017ZM4.01695 21L4.01695 18C4.01695 16.8954 4.91238 16 6.01695 16H9.01695C9.56923 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56923 8 9.01695 8H6.01695C5.46467 8 5.01695 8.44772 5.01695 9V12H3.01695V9C3.01695 7.34315 4.3601 6 6.01695 6H9.01695C10.6738 6 12.017 7.34315 12.017 9V15C12.017 16.6569 10.6738 18 9.01695 18H6.01695L6.01695 21H4.01695Z"></path></svg>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <img src="https://picsum.photos/seed/face1/100/100" className="w-16 h-16 rounded-full border-2 border-orange" alt="Client" />
              <div>
                <h5 className="font-bold text-lg">Rachel Ballinger</h5>
                <p className="text-xs text-orange font-bold uppercase">CEO, Bizbreak Inc.</p>
              </div>
            </div>
            <p className="italic text-gray-300 mb-6 leading-relaxed">
              "I saved over 50% using Logisco over my company. The customer support staff was very helpful. I will definitely be using Logisco for all my future shipments. Thank you !!!"
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <div key={i} className="w-3 h-3 bg-orange rounded-full" />)}
            </div>
          </div>
          
          <div className="mt-8 flex gap-4">
             <button className="text-sm font-bold opacity-60 hover:opacity-100 transition-all">Prev</button>
             <div className="w-px h-4 bg-white/20" />
             <button className="text-sm font-bold opacity-60 hover:opacity-100 transition-all">Next</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CaseStudies = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-end mb-16">
        <SectionTitle subtitle="Our Case Studies" title="Best Cases by Logisco" />
        <div className="flex gap-4 mb-12">
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-dark hover:text-white transition-all"><ArrowRight size={20} className="rotate-180" /></button>
          <button className="w-12 h-12 rounded-full bg-orange text-white flex items-center justify-center hover:shadow-lg transition-all"><ArrowRight size={20} /></button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Relief Transportation For United Nations", cat: "Air Freight", img: "https://picsum.photos/seed/cs1/400/600" },
          { title: "200 Metric Ton Grain Freight For Mexico", cat: "Cargo Freight", img: "https://picsum.photos/seed/cs2/400/600" },
          { title: "Shipping Large container From China to USA", cat: "Container Shipping", img: "https://picsum.photos/seed/cs3/400/600" },
          { title: "200 Metric Ton Grain Freight For Mexico", cat: "Land Freight", img: "https://picsum.photos/seed/cs4/400/600" }
        ].map((item, i) => (
          <div key={i} className="relative h-[450px] group overflow-hidden">
            <img src={item.img} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-dark/90 via-transparent to-transparent opacity-80" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-all">
              <p className="text-[10px] font-bold text-orange uppercase tracking-widest mb-2">{item.cat}</p>
              <h4 className="text-lg font-bold leading-tight group-hover:text-orange transition-colors">{item.title}</h4>
              <button className="mt-4 w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="py-24 bg-gray-50 overflow-hidden relative">
     {/* Pattern backgrounds would go here */}
     <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionTitle subtitle="Frequently Asked Questions" title="Do you have any question? Find answer here" />
            <p className="text-gray-500 mb-10 -mt-8">Some frequently asked questions about logisco's cargo services</p>
            
            <div className="space-y-4">
              {[
                { q: "What is the LBS weight cost of goods transportation?", a: "Mauris ut enim sit amet lacus ornare ullamcorper. Praesent placeat neque eu purus rhoncus, vel tincidunt odio ultrices. Sed theya amum." },
                { q: "How much time it takes for LTL freight transport?", a: "" },
                { q: "What are the pick up points of logistics?", a: "" },
                { q: "What is the cost of goods transportation?", a: "" }
              ].map((item, i) => (
                <div key={i} className={`bg-white rounded-sm overflow-hidden border border-gray-100 ${i === 0 ? 'ring-2 ring-orange/10' : ''}`}>
                  <button className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors">
                    <span className="font-bold text-blue-dark">{item.q}</span>
                    <div className="text-orange">
                      {i === 0 ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  {i === 0 && (
                    <div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[600px] flex items-center justify-center">
             <div className="bg-blue-dark absolute inset-0 rounded-full scale-110 opacity-5" />
             <div className="relative z-10 p-10 bg-white shadow-2xl rounded-sm">
                <div className="absolute -top-6 -left-6 bg-orange p-4 rounded-full text-white shadow-xl animate-bounce">
                  <Phone size={24} />
                </div>
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-blue-dark mb-4">Let's talk with us</h4>
                  <p className="text-sm text-gray-400">Logisco Air freight service deliver to knowledge opportunity to optimize every.</p>
                </div>
                <div className="space-y-6">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-orange"><Mail size={20} /></div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase">Email Us</p>
                        <p className="font-bold text-blue-dark">Info@Logisco.Com</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-orange"><Clock size={20} /></div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase">Opening Hours</p>
                        <p className="font-bold text-blue-dark">Mon-Sat: 08.00-18.00</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-orange"><Phone size={20} /></div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase">Call Support</p>
                        <p className="font-bold text-blue-dark">+00 123 456 789</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
     </div>
  </section>
);

const BlogSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-xl mx-auto mb-16">
        <SectionTitle subtitle="Latest News" title="Read All Our Logistics Blogs" />
        <p className="text-gray-500 -mt-8">Logisco Air freight service deliver the knowledge & opportunity to optimize every mile on every lane. Get full-service</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {BLOGS.map((blog, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative overflow-hidden mb-6 rounded-sm">
              <img src={blog.image} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" alt={blog.title} />
              <div className="absolute top-4 right-4 bg-orange text-white px-4 py-2 text-[10px] font-bold uppercase rounded-sm">
                {blog.date}
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4">
               <img src={`https://picsum.photos/seed/${i+50}/40/40`} className="w-8 h-8 rounded-full" />
               <span className="text-xs font-bold text-gray-400 uppercase">{blog.author}</span>
            </div>
            <h4 className="text-xl font-bold text-blue-dark mb-4 group-hover:text-orange transition-colors leading-tight">
              {blog.title}
            </h4>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">{blog.excerpt}</p>
            <button className="text-xs font-bold text-blue-dark hover:text-orange transition-all flex items-center gap-2 uppercase tracking-widest">
              Read Article <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-16 flex justify-center">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 bg-orange rounded-full" />
          <div className="w-2.5 h-2.5 bg-gray-200 rounded-full" />
          <div className="w-2.5 h-2.5 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-blue-dark pt-24 pb-12 text-white">
    <div className="container mx-auto px-4">
      {/* Newsletter area */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#0d174d] p-10 mb-20 rounded-sm">
         <div className="mb-6 md:mb-0">
            <h4 className="text-2xl font-bold mb-2">Track Your Freight</h4>
            <p className="text-sm opacity-60">Track your goods with Logisco trucking</p>
         </div>
         <div className="flex w-full md:w-auto gap-2">
            <input type="email" placeholder="Email Address" className="bg-white/10 border-white/20 text-white px-4 py-3 text-sm focus:ring-1 focus:ring-orange focus:bg-white/20 outline-none flex-grow md:w-80" />
            <Button variant="primary">Subscribe</Button>
         </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-orange p-1.5 rounded">
              {/* Added missing Ship icon */}
              <Ship size={20} className="text-white" />
            </div>
            <h3 className="text-2xl font-black tracking-tighter">Logisco</h3>
          </div>
          <p className="text-sm opacity-60 mb-8 leading-relaxed">
            Logisco Air freight service deliver the knowledge & opportunity to optimize every mile on every lane. Get full-service Truckload division.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange transition-all cursor-pointer"><Facebook size={18} /></div>
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange transition-all cursor-pointer"><Twitter size={18} /></div>
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange transition-all cursor-pointer"><Instagram size={18} /></div>
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange transition-all cursor-pointer"><Linkedin size={18} /></div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
             <div className="w-2 h-2 bg-orange rounded-full" /> Industry Served
          </h4>
          <ul className="space-y-4 text-sm opacity-60">
            <li className="hover:text-orange transition-all cursor-pointer">→ Frozen Food</li>
            <li className="hover:text-orange transition-all cursor-pointer">→ Automobile</li>
            <li className="hover:text-orange transition-all cursor-pointer">→ Machineries</li>
            <li className="hover:text-orange transition-all cursor-pointer">→ Export Import</li>
            <li className="hover:text-orange transition-all cursor-pointer">→ Cargo Freight</li>
            <li className="hover:text-orange transition-all cursor-pointer">→ Warehousing</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
             <div className="w-2 h-2 bg-orange rounded-full" /> Company Info
          </h4>
          <ul className="space-y-4 text-sm opacity-60">
            <li className="hover:text-orange transition-all cursor-pointer">→ About Us</li>
            <li className="hover:text-orange transition-all cursor-pointer">→ Our Expertise</li>
            <li className="hover:text-orange transition-all cursor-pointer">→ Latest News</li>
            <li className="hover:text-orange transition-all cursor-pointer">→ Transporters</li>
            <li className="hover:text-orange transition-all cursor-pointer">→ Terms & Condition</li>
            <li className="hover:text-orange transition-all cursor-pointer">→ Case Studies</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
             <div className="w-2 h-2 bg-orange rounded-full" /> Our Services
          </h4>
          <ul className="space-y-4 text-sm opacity-60">
            <li className="hover:text-orange transition-all cursor-pointer">→ Less Than Truckload</li>
            <li className="hover:text-orange transition-all cursor-pointer">→ Rail Freight Shipping</li>
            <li className="hover:text-orange transition-all cursor-pointer text-orange font-bold">→ Hot Shot Trucking</li>
            <li className="hover:text-orange transition-all cursor-pointer">→ Less-than-Truckload</li>
            <li className="hover:text-orange transition-all cursor-pointer">→ Intermodal service</li>
            <li className="hover:text-orange transition-all cursor-pointer">→ Container Freight</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 py-10 border-t border-white/5">
         <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-all"><Mail size={20} /></div>
            <div>
               <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">E-mail Us</p>
               <p className="text-sm font-bold">Service@LogiscoCare.Com</p>
            </div>
         </div>
         <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-all"><Phone size={20} /></div>
            <div>
               <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Support 27/7</p>
               <p className="text-sm font-bold">+1 23334 5678 899</p>
            </div>
         </div>
         <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-all"><MapPin size={20} /></div>
            <div>
               <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Logisco Headquarter</p>
               <p className="text-sm font-bold">116th Ave, WA 98058-5055,USA</p>
            </div>
         </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[10px] text-gray-500 font-bold uppercase tracking-widest gap-4">
         <p>© 2023 Logisco Transportation & Logistics / All rights reserved</p>
         <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-all">Privacy</a>
            <a href="#" className="hover:text-white transition-all">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-all">Site map</a>
            <a href="#" className="hover:text-white transition-all">Contact</a>
         </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <WorkProcess />
      <QuoteAndTestimonials />
      <CaseStudies />
      <FAQ />
      <BlogSection />
      <Footer />
    </div>
  );
}
