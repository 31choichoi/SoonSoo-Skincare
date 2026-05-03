import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-stretch">
          <div className="flex flex-col justify-center">
            <span className="text-primary tracking-[0.4em] uppercase text-xs font-medium mb-6 block">Location & Contact</span>
            <h2 className="luxury-text text-4xl md:text-5xl font-light text-dark mb-12">
              오시는 길
            </h2>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white flex items-center justify-center text-primary shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight text-dark mb-2">ADDRESS</h4>
                  <p className="text-sm text-dark/60 font-light leading-relaxed">
                    서울특별시 강남구 테헤란로 123, <br />
                    순수빌딩 12층 (역삼역 4번 출구 도보 3분)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white flex items-center justify-center text-primary shadow-sm">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight text-dark mb-2">HOUR</h4>
                  <p className="text-sm text-dark/60 font-light leading-relaxed">
                    월 ― 금 : 10:30 - 20:00 (야간진료)<br />
                    토 요 일 : 10:00 - 16:00<br />
                    점심시간 : 13:00 - 14:00 (토요일은 점심시간 없음)<br />
                    <span className="text-primary italic mt-1 block">일요일 및 공휴일 휴진</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white flex items-center justify-center text-primary shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight text-dark mb-2">CONTACT</h4>
                  <p className="text-sm text-dark/60 font-light leading-relaxed">
                    TEL : 02-123-4567<br />
                    KAKAO : @순수피부과
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] md:h-full bg-white relative overflow-hidden shadow-2xl">
            {/* Map Placeholder */}
            <div className="absolute inset-0 bg-neutral-100 flex flex-col items-center justify-center p-12 text-center">
                <MapPin size={48} className="text-primary/20 mb-4" />
                <p className="luxury-text text-2xl italic text-dark/40 mb-2">Map will be loaded here</p>
                <p className="text-xs tracking-widest text-dark/20 uppercase">Interactive Navigation System</p>
                
                <div className="mt-12 p-6 border border-dark/5 bg-white/50 max-w-xs">
                    <p className="text-sm text-dark/40 font-light">
                        순수피부과는 고객님의 편리한 방문을 위해 주차 대행 서비스를 제공하고 있습니다.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
