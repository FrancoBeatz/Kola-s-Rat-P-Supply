import React, { useState } from 'react';
import { Phone, MapPin, Skull, ShieldAlert, Zap, ShoppingCart, Menu, X, MessageSquareWarning } from 'lucide-react';
import RatAnimation from './components/RatAnimation';
import AiAdvisor from './components/AiAdvisor';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden selection:bg-red-900 selection:text-white">
      {/* Background Image Layer */}
      <div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'url("https://as2.ftcdn.net/v2/jpg/07/27/42/01/1000_F_727420146_7uij0piKFkvKsEy7B2mqvMbAYgMjAtgY.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) contrast(120%)'
        }}
      />
      
      {/* Red Overlay Vignette */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_90%)] pointer-events-none"></div>

      <RatAnimation />
      <AiAdvisor />

      {/* Navigation */}
      <nav className="relative z-40 w-full border-b border-red-900/50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Skull className="h-8 w-8 text-toxic-red animate-pulse" />
              <span className="font-horror text-2xl md:text-3xl text-white tracking-widest text-shadow-red">
                KOLA'S RAT P SUPPLY
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#products" className="text-gray-300 hover:text-toxic-red transition-colors font-bold tracking-wider">PRODUCTS</a>
              <a href="#about" className="text-gray-300 hover:text-toxic-red transition-colors font-bold tracking-wider">ABOUT</a>
              <a href="#contact" className="text-gray-300 hover:text-toxic-red transition-colors font-bold tracking-wider">CONTACT</a>
              <a href="tel:0608564191" className="bg-toxic-red px-4 py-2 rounded text-white font-bold hover:bg-red-700 transition transform hover:scale-105 shadow-[0_0_10px_#ff0000]">
                CALL NOW
              </a>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white hover:text-toxic-red">
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-b border-toxic-red">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#products" className="block px-3 py-2 text-base font-bold text-gray-300 hover:text-toxic-red hover:bg-neutral-800" onClick={() => setMobileMenuOpen(false)}>PRODUCTS</a>
              <a href="#about" className="block px-3 py-2 text-base font-bold text-gray-300 hover:text-toxic-red hover:bg-neutral-800" onClick={() => setMobileMenuOpen(false)}>ABOUT</a>
              <a href="#contact" className="block px-3 py-2 text-base font-bold text-gray-300 hover:text-toxic-red hover:bg-neutral-800" onClick={() => setMobileMenuOpen(false)}>CONTACT</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 flex items-center justify-center min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-horror text-white mb-6 animate-glitch tracking-widest relative">
            <span className="relative z-10">DEATH TO RODENTS</span>
            <span className="absolute top-1 left-1 text-toxic-red -z-10 opacity-70 blur-sm">DEATH TO RODENTS</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 font-light border-l-4 border-toxic-red pl-4 text-left md:text-center md:border-l-0 md:pl-0">
            Reclaim your sanctuary. The most powerful exterminator-grade formula in Tembisa. 
            <span className="text-toxic-red font-bold block mt-2">GUARANTEED RESULTS.</span>
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className="px-8 py-4 bg-toxic-red text-white font-bold text-lg rounded hover:bg-red-700 transition shadow-[0_0_20px_rgba(255,0,0,0.4)] flex items-center justify-center gap-2">
              <ShoppingCart size={20} />
              BUY POISON
            </a>
            <a href="#contact" className="px-8 py-4 border border-white text-white font-bold text-lg rounded hover:bg-white hover:text-black transition flex items-center justify-center gap-2">
              <Phone size={20} />
              CONTACT US
            </a>
          </div>
        </div>
      </section>

      {/* Features Stripe */}
      <div className="relative z-20 bg-toxic-red py-8 transform -skew-y-3 origin-top-left border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around text-black transform skew-y-3">
          <div className="flex items-center gap-2 font-black text-lg md:text-xl uppercase tracking-wider mb-4 md:mb-0">
            <Zap size={24} strokeWidth={3} /> Fast Acting
          </div>
          <div className="flex items-center gap-2 font-black text-lg md:text-xl uppercase tracking-wider mb-4 md:mb-0">
            <ShieldAlert size={24} strokeWidth={3} /> Highly Toxic
          </div>
          <div className="flex items-center gap-2 font-black text-lg md:text-xl uppercase tracking-wider">
            <Skull size={24} strokeWidth={3} /> Kills Instantly
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24 bg-neutral-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl font-horror text-toxic-red mb-6 tracking-wide">WHY CHOOSE KOLA'S?</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Rats aren't just pests; they are invaders. At Kola's Rat P Supply, we don't believe in catch-and-release. We believe in <span className="text-white font-bold">total eradication</span>.
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Our formula is specially mixed in the heart of Tembisa, designed to tackle the toughest, most resilient rodents that ordinary store-bought poisons can't touch. When you buy from Kola, you buy peace of mind.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-toxic-red mr-4 rounded-full shadow-[0_0_5px_red]"></span>
                  Safe for handling (when instructions followed)
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-toxic-red mr-4 rounded-full shadow-[0_0_5px_red]"></span>
                  Irresistible bait scent
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-toxic-red mr-4 rounded-full shadow-[0_0_5px_red]"></span>
                  Works within hours
                </li>
              </ul>
            </div>
            <div className="mt-12 lg:mt-0 relative">
              <div className="absolute -inset-4 bg-toxic-red rounded-lg opacity-30 blur-xl animate-pulse"></div>
              <div className="relative bg-black border-2 border-toxic-red rounded-lg p-8 transform rotate-2 hover:rotate-0 transition duration-500">
                <div className="text-center">
                  <Skull className="w-24 h-24 text-gray-500 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-white uppercase italic">"The Final Meal"</p>
                  <p className="text-toxic-red font-mono mt-2 text-sm tracking-widest">BATCH #666-TMB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Pricing */}
      <section id="products" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-horror text-white mb-4">KILLER DEALS</h2>
            <p className="text-gray-400">Choose your weapon.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Single Item */}
            <div className="bg-neutral-900 border border-neutral-800 hover:border-toxic-red p-8 rounded-xl transition duration-300 transform hover:-translate-y-2 group relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-neutral-800 text-xs px-2 py-1 text-gray-400">STARTER</div>
               <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-toxic-red transition">SINGLE HIT</h3>
               <div className="text-4xl font-black text-white mb-6">R15<span className="text-lg font-normal text-gray-500"> / item</span></div>
               <p className="text-gray-400 mb-8 h-12">Perfect for small infestations or a trial run. One dose, one kill.</p>
               <button className="w-full py-4 border border-toxic-red text-toxic-red font-bold rounded uppercase hover:bg-toxic-red hover:text-white transition">
                 Order via WhatsApp
               </button>
            </div>

            {/* Subscription */}
            <div className="bg-black border-2 border-toxic-red p-8 rounded-xl transition duration-300 transform hover:-translate-y-2 relative shadow-[0_0_30px_rgba(255,0,0,0.15)]">
               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-toxic-red text-black font-black px-4 py-1 rounded text-sm uppercase tracking-wider">
                 Best Value
               </div>
               <h3 className="text-2xl font-bold text-white mb-2">WARLORD SUPPLY</h3>
               <div className="text-4xl font-black text-toxic-red mb-6">R150<span className="text-lg font-normal text-gray-400"> / month</span></div>
               <p className="text-gray-300 mb-8 h-12">Total home protection. Monthly refill delivery for constant vigilance.</p>
               <button className="w-full py-4 bg-toxic-red text-white font-bold rounded uppercase hover:bg-red-700 transition shadow-lg">
                 Start Subscription
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-horror text-toxic-red mb-12">GET IN TOUCH</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-black rounded-lg border border-neutral-800">
              <Phone className="w-12 h-12 text-toxic-red mb-4" />
              <h3 className="text-xl font-bold mb-2">CALL US</h3>
              <p className="text-gray-400">060 856 4191</p>
              <p className="text-xs text-gray-500 mt-2">Available 24/7 for Emergencies</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-black rounded-lg border border-neutral-800">
              <MapPin className="w-12 h-12 text-toxic-red mb-4" />
              <h3 className="text-xl font-bold mb-2">VISIT HQ</h3>
              <p className="text-gray-400">325 Sedibeng Section</p>
              <p className="text-gray-400">Tembisa, South Africa</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-black rounded-lg border border-neutral-800">
              <MessageSquareWarning className="w-12 h-12 text-toxic-red mb-4" />
              <h3 className="text-xl font-bold mb-2">WHATSAPP</h3>
              <p className="text-gray-400">Direct Order Line</p>
              <a href="https://wa.me/27608564191" className="text-toxic-red mt-2 hover:underline">Chat Now &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black py-8 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 text-sm">
          <p className="mb-2">&copy; {new Date().getFullYear()} Kola's Rat P Supply. All rights reserved.</p>
          <p className="text-xs text-neutral-700">Warning: Products contain toxic substances. Keep away from children and pets. Use responsibly.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;