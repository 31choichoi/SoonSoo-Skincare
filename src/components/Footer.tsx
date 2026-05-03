import { Instagram, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <h2 className="luxury-text text-3xl font-medium tracking-[0.2em] text-secondary mb-8">SOONSOO</h2>
            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-sm mb-10">
              고결한 아름다움은 본연의 순수함에서 시작됩니다. 
              순수피부과는 당신의 피부가 가진 무한한 가치를 발견하고 보존합니다.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-secondary hover:text-secondary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-secondary hover:text-secondary transition-all">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-secondary hover:text-secondary transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase font-bold text-gray-500 mb-8">Navigation</h4>
            <div className="flex flex-col space-y-4 text-sm text-gray-400 font-light">
              <a href="#philosophy" className="hover:text-white transition-colors">Clinic Philosophy</a>
              <a href="#programs" className="hover:text-white transition-colors">Service Programs</a>
              <a href="#interior" className="hover:text-white transition-colors">Interior Tour</a>
              <a href="#location" className="hover:text-white transition-colors">Location</a>
              <a href="#" className="hover:text-white transition-colors">Recruitment</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase font-bold text-gray-500 mb-8">Contact Us</h4>
            <div className="flex flex-col space-y-4 text-sm text-gray-400 font-light">
              <p>서울특별시 강남구 테헤란로 123</p>
              <p>T. 02-123-4567</p>
              <p>E. info@soonsoo.com</p>
              <p>Kakao. @순수피부과</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] tracking-widest uppercase text-gray-600 font-medium">
          <div className="flex space-x-8">
            <span className="cursor-pointer hover:text-gray-400">Privacy Policy</span>
            <span className="cursor-pointer hover:text-gray-400">Terms of Service</span>
          </div>
          <p>© 2024 SOONSOO DERMATOLOGY CLINIC. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
