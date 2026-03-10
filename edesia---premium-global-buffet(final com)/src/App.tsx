import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Youtube, MapPin, Phone, Clock, Star, ChevronRight, Utensils, ChefHat, Coffee, Cake } from 'lucide-react';

const Edesia = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Buffet', href: '#buffet' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reserve', href: '#reserve' },
  ];

  return (
    <div className="min-h-screen selection:bg-edesia-gold selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-edesia-bg/95 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full border border-edesia-brown/20 flex items-center justify-center group-hover:border-edesia-gold transition-colors">
              <Menu size={20} className="group-hover:text-edesia-gold transition-colors" />
            </div>
            <span className="uppercase tracking-widest text-xs font-semibold hidden sm:block">Menu</span>
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <h1 className="font-display text-4xl tracking-tighter leading-none">EDESIA</h1>
            <p className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-60">Goddess of Food</p>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#reserve" className="text-xs uppercase tracking-widest font-bold border-b border-edesia-brown/30 hover:border-edesia-gold transition-colors">Book a Table</a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-edesia-brown text-edesia-bg p-10 flex flex-col"
          >
            <div className="flex justify-between items-center mb-20">
              <h2 className="font-display text-3xl">EDESIA</h2>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:rotate-90 transition-transform">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-5xl md:text-7xl hover:text-edesia-gold transition-colors italic"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <div className="mt-auto flex gap-6">
              <Instagram className="hover:text-edesia-gold cursor-pointer" />
              <Facebook className="hover:text-edesia-gold cursor-pointer" />
              <Youtube className="hover:text-edesia-gold cursor-pointer" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Buffet" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-serif text-5xl md:text-8xl leading-tight mb-8 max-w-5xl mx-auto"
          >
            The perfect balance between <span className="italic">hunger</span> and <span className="italic text-edesia-gold">happiness.</span>
          </motion.h2>
          
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="btn-accent"
          >
            EXPLORE THE BUFFET
          </motion.button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/50">
          <div className="w-[1px] h-20 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 80] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute top-0 w-full h-1/2 bg-edesia-gold"
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.85] mb-8">
            TRADITION OF HOME,<br />
            <span className="text-edesia-gold italic font-serif text-5xl md:text-7xl">Flavor of Today</span>
          </h2>
          <div className="space-y-6 text-edesia-charcoal leading-relaxed">
            <p className="text-lg">
              Named after the Roman Goddess of Food, <span className="font-bold text-edesia-brown">Edesia</span> is a celebration of global culinary excellence. Located in the heart of Crowne Plaza Okhla, we bring you a premium dining experience that transcends borders.
            </p>
            <p>
              Our journey is one of passion—preparing every dish as a ritual of family. From the kneading of fresh dough to the final garnish, we believe in the magic of live cooking and the warmth of authentic hospitality.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" alt="Chef Cooking" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mt-12"
            >
              <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2132&auto=format&fit=crop" alt="Plated Food" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
          
          {/* Social Badge */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl border border-edesia-beige animate-spin-slow">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-center px-4">
                Follow our culinary journey • Follow our culinary journey •
              </p>
            </div>
            <Instagram className="text-edesia-gold" size={24} />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="buffet" className="bg-edesia-brown text-edesia-bg py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="flex flex-col gap-4">
            {Array(10).fill(0).map((_, i) => (
              <div key={i} className="marquee-text">GUSTOSO • FRAGRANTE • DELIZIOSO • BUONO •</div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="font-display text-7xl md:text-9xl mb-12">
            THERE IS NOTHING<br />
            <span className="italic font-serif text-5xl md:text-7xl text-edesia-gold">Better Than This</span>
          </h2>
          
          <div className="max-w-2xl mx-auto mb-16">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop" 
              alt="Signature Dish" 
              className="w-full h-auto rounded-full shadow-2xl border-8 border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="p-10 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
              <h3 className="font-display text-4xl mb-4">GLOBAL BUFFET :</h3>
              <p className="text-white/60 mb-8">A modern variant of the global feast, ideal for those looking for a quick meal without sacrificing authentic flavor.</p>
              <button className="btn-accent py-2 px-6 text-sm">VIEW MENU</button>
            </div>
            <div className="p-10 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
              <h3 className="font-display text-4xl mb-4">SIGNATURE SELECTION :</h3>
              <p className="text-white/60 mb-8">A lighter but always full of taste break, designed for those who want to recharge with something good and feel light without giving up.</p>
              <button className="btn-accent py-2 px-6 text-sm">CHEF SPECIALS</button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-edesia-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:sticky md:top-32">
              <h2 className="font-display text-6xl md:text-8xl leading-none mb-6">
                HOW OUR<br />
                <span className="text-edesia-gold italic font-serif text-4xl md:text-6xl">Buffet is Born</span>
              </h2>
              <p className="text-edesia-charcoal mb-8">
                We follow the global culinary tradition, step by step. From the selection of fresh ingredients to the live cooking at our stations, until the final moment: the union of flavors.
              </p>
              <div className="w-20 h-20 rounded-full border border-edesia-brown flex items-center justify-center">
                <Instagram className="text-edesia-brown" />
              </div>
            </div>

            <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
              {[
                { title: 'The Selection', desc: 'Where ingredients become goodness', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop' },
                { title: 'Live Grills', desc: 'Freshness transformed by fire', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop' },
                { title: 'Asian Wok', desc: 'The art of high-heat cooking', img: 'https://images.unsplash.com/photo-1512058560366-cd2427ff5670?q=80&w=2072&auto=format&fit=crop' },
                { title: 'Dessert Studio', desc: 'A sweet ending to your journey', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop' },
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-4 shadow-lg">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <h4 className="font-bold text-xl mb-1">{step.title}</h4>
                  <p className="text-sm text-edesia-charcoal italic">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="bg-edesia-gold py-6 overflow-hidden border-y border-edesia-brown/10">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap"
        >
          {Array(10).fill(0).map((_, i) => (
            <span key={i} className="font-display text-4xl text-white flex items-center gap-4">
              <Star size={24} fill="white" /> GLOBAL BUFFET EXPERIENCE • LIVE COOKING STATIONS • PREMIUM DESSERTS •
            </span>
          ))}
        </motion.div>
      </div>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6">
        <div className="text-center mb-16">
          <button className="btn-primary mb-8">FOLLOW US ON SOCIAL</button>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2132&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2020&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop',
            ].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-md"
              >
                <img src={img} alt="Gallery" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-edesia-brown text-edesia-bg pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 mb-20">
          <div>
            <h2 className="font-display text-4xl mb-8">OPENING HOURS</h2>
            <div className="space-y-4 text-white/60">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Lunch Buffet</span>
                <span>12:30 - 15:30</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Dinner Buffet</span>
                <span>19:00 - 23:30</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Breakfast</span>
                <span>07:00 - 10:30</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl mb-8">LOCATION</h2>
            <p className="text-white/60 mb-6 flex gap-3">
              <MapPin className="shrink-0 text-edesia-gold" />
              Crowne Plaza Hotel, Okhla Phase 1,<br />New Delhi, Delhi 110020
            </p>
            <p className="text-white/60 flex gap-3">
              <Phone className="shrink-0 text-edesia-gold" />
              +91 11 4646 2000
            </p>
          </div>

          <div>
            <h2 className="font-display text-4xl mb-8">NEWSLETTER</h2>
            <p className="text-white/60 mb-6">Join our culinary circle for special event invites and seasonal menu updates.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-white/10 border border-white/20 rounded-full px-6 py-2 flex-1 focus:outline-none focus:border-edesia-gold" />
              <button className="w-10 h-10 rounded-full bg-edesia-gold flex items-center justify-center hover:scale-110 transition-transform">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold opacity-40">
          <p>© 2024 EDESIA RESTAURANT | CROWNE PLAZA OKHLA</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-edesia-gold">Privacy Policy</a>
            <a href="#" className="hover:text-edesia-gold">Terms of Service</a>
          </div>
          <div className="flex gap-6">
            <Instagram size={16} />
            <Facebook size={16} />
            <Youtube size={16} />
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Edesia;
