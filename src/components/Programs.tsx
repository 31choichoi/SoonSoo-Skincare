import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    title: 'Anti-Aging',
    subtitle: '안티에이징 & 리프팅',
    desc: '울쎄라, 써마지 등 최신 장비를 이용한 피부 탄력 및 주름 개선 솔루션',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80',
  },
  {
    title: 'Skin Quality',
    subtitle: '스킨 퀄리티 & 재생',
    desc: '리쥬란, 엑소좀 등을 통한 피부 본연의 건강함과 광채 회복',
    img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80',
  },
  {
    title: 'Body Contour',
    subtitle: '바디 컨투어링',
    desc: '체형 고민에 맞춘 맞춤형 지방 분해 및 탄력 개선 프로그램',
    img: 'https://images.unsplash.com/photo-1519824141121-99745c503f0f?auto=format&fit=crop&q=80',
  },
  {
    title: 'Special Care',
    subtitle: '순수 시그니처 케어',
    desc: '트러블, 미백, 모공 등 피부 고민별 집중 맞춤 관리 솔루션',
    img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 space-y-6 md:space-y-0">
          <div>
            <span className="text-primary tracking-[0.4em] uppercase text-xs font-medium mb-4 block">Our Solutions</span>
            <h2 className="luxury-text text-4xl md:text-5xl font-light text-dark">감각적인 전문성의 결정체</h2>
          </div>
          <p className="text-dark/50 font-light max-w-sm">
            개인의 피부 상태와 라이프스타일에 맞춘 순수피부과만의 <br />
            정교한 프로그램을 경험해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] mb-8 overflow-hidden relative">
                <img 
                  src={program.img} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-500" />
              </div>
              <h3 className="luxury-text text-2xl font-light italic text-primary mb-2 transition-transform duration-300 group-hover:translate-x-2">
                {program.title}
              </h3>
              <p className="text-sm font-medium tracking-tight text-dark mb-4">{program.subtitle}</p>
              <p className="text-xs text-dark/40 font-light leading-relaxed mb-6">
                {program.desc}
              </p>
              <div className="flex items-center space-x-2 text-dark/80 group-hover:text-primary transition-colors">
                <span className="text-[10px] tracking-widest uppercase font-medium">Learn More</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 py-16 border-y border-secondary/20 flex flex-col items-center">
          <p className="luxury-text text-3xl md:text-4xl font-light text-dark/80 text-center mb-12">
            "당신의 피부는 단 하나뿐인 <span className="text-primary italic">예술작품</span>입니다"
          </p>
          <button className="px-12 py-5 gold-gradient text-white text-xs tracking-[0.3em] font-medium hover:brightness-110 transition-all shadow-xl">
            CONSULTATION NOW
          </button>
        </div>
      </div>
    </section>
  );
}
