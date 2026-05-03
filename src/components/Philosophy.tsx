import { motion } from 'motion/react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] relative overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=2071&auto=format&fit=crop" 
              alt="Luxury facial treatment" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary tracking-[0.4em] uppercase text-xs font-medium mb-6 block font-sans">
              Our Identity
            </span>
            <h2 className="luxury-text text-4xl md:text-5xl font-light text-dark leading-tight mb-10">
              가장 순수한 아름다움은<br />
              <span className="text-primary italic">본연의 상태</span>에서 시작됩니다
            </h2>
            <div className="space-y-8 text-dark/70 font-light leading-relaxed">
              <p>
                순수피부과는 단순한 미용 시술을 넘어, 피부 과학의 전문성과 
                심미적인 안목을 바탕으로 개인의 고유한 아름다움을 정교하게 설계합니다.
              </p>
              <p>
                모든 시술은 피부의 본래 기능을 회복시키고, 자연스러운 변화를 이끌어내는 데 
                집중되어 있습니다. 과도한 시술보다는 조화롭고 품격 있는 변화를 약속합니다.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-12">
              <div>
                <h4 className="luxury-text text-2xl text-primary italic mb-2">01. Expertise</h4>
                <p className="text-xs tracking-widest uppercase text-dark/40 mb-4">Professionalism</p>
                <p className="text-sm text-dark/60 font-light leading-relaxed">숙련된 노하우와 최첨단 장비를 통한 정밀한 진단 및 시술</p>
              </div>
              <div>
                <h4 className="luxury-text text-2xl text-primary italic mb-2">02. Sincerity</h4>
                <p className="text-xs tracking-widest uppercase text-dark/40 mb-4">Pure Heart</p>
                <p className="text-sm text-dark/60 font-light leading-relaxed">정직한 상담과 투명한 시술만을 제안하는 진심 어린 진료</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
