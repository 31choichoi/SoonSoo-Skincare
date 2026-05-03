import { motion } from 'motion/react';

const images = [
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542601098-3ade3a4df37b?q=80&w=1974&auto=format&fit=crop',
];

export default function Interior() {
  return (
    <section id="interior" className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-primary tracking-[0.4em] uppercase text-xs font-medium mb-6 block">Our Space</span>
          <h2 className="luxury-text text-xl md:text-5xl font-light text-dark leading-tight mb-8">
            머무시는 동안의 <span className="text-primary italic">편안함</span>까지 세심하게 설계하였습니다
          </h2>
          <p className="text-dark/50 font-light max-w-2xl mx-auto">
            순수피부과는 고객님의 프라이버시를 존중하며, 최상의 컨디션에서 <br />
            시술을 받으실 수 있도록 프리미엄 인테리어와 개별 룸을 제공합니다.
          </p>
        </div>
      </div>

      <div className="flex space-x-6 px-6 overflow-hidden">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: idx * 0.2 }}
            className={`flex-shrink-0 ${idx === 1 ? 'w-[60vw]' : 'w-[40vw]'} aspect-[16/9]`}
          >
            <img src={img} alt="Interior" className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
          </motion.div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <span className="luxury-text text-4xl text-primary italic font-light block mb-4">01</span>
            <p className="text-sm tracking-widest font-medium text-dark mb-2 uppercase">Lounge</p>
            <p className="text-xs text-dark/40 font-light">감각적인 미학이 돋보이는 프라이빗 라운지</p>
          </div>
          <div>
            <span className="luxury-text text-4xl text-primary italic font-light block mb-4">02</span>
            <p className="text-sm tracking-widest font-medium text-dark mb-2 uppercase">Treatment Room</p>
            <p className="text-xs text-dark/40 font-light">집중 관리를 위한 1:1 프라이빗 개별 룸</p>
          </div>
          <div>
            <span className="luxury-text text-4xl text-primary italic font-light block mb-4">03</span>
            <p className="text-sm tracking-widest font-medium text-dark mb-2 uppercase">Powder Room</p>
            <p className="text-xs text-dark/40 font-light">시술 후 편안한 정돈을 위한 파우더 스페이스</p>
          </div>
        </div>
      </div>
    </section>
  );
}
