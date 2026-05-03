import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  {
    image: 'http://mydrim.net/img/soonsu_main.png',
    alt: 'Soonsoo Main'
  },
  {
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
    alt: 'Clinic atmosphere'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsInitial(false);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, delay: isInitial ? 1.2 : 0, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].alt} 
              className="w-full h-full object-cover brightness-[1.02] contrast-[1.02]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-base/95 via-base/20 to-transparent via-25%" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-3xl pt-32 md:pt-48"
        >
          <span className="luxury-text text-primary italic text-xl md:text-2xl mb-6 block tracking-wide">
            Pure Beauty, Pure Heart
          </span>
          <h1 className="luxury-text text-xl md:text-6xl font-light leading-[1.2] text-dark mb-10 tracking-tight">
            고결한 아름다움의 시작, <br />
            <span className="text-primary italic text-2xl md:text-6xl block mt-2 md:inline md:mt-0">순수피부과</span>
          </h1>
          <p className="text-dark/70 text-lg md:text-xl font-light leading-relaxed mb-32 max-w-lg">
            단순한 시술을 넘어 <br className="md:hidden" />
            당신의 본연의 아름다움을 찾아드리는<br />
            프리미엄 메디컬 에스테틱 <br className="md:hidden" />
            솔루션을 만나보세요.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-12">
            <button className="px-10 py-4 bg-primary text-white text-sm tracking-widest hover:bg-dark transition-all duration-500 shadow-xl">
              상담 예약하기
            </button>
            <button className="px-10 py-4 border border-dark/20 text-dark text-sm tracking-widest hover:border-primary hover:text-primary transition-all duration-500">
              둘러보기
            </button>
          </div>
        </motion.div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-12 right-12 flex space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-[2px] transition-all duration-500 ${
              idx === currentSlide ? 'w-12 bg-primary' : 'w-6 bg-primary/20'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-20"
      >
        <div className="w-[1px] h-12 bg-primary/30" />
        <span className="text-[10px] tracking-[0.3em] uppercase text-primary/60">Scroll</span>
      </motion.div>
    </section>
  );
}
