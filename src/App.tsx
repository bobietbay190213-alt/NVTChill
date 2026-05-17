import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";
import { motion } from "motion/react";
import { Info, BookOpen, Heart, AlertTriangle, Shield, Users } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-brand-green/20 selection:text-brand-green">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-32 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-950 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-5xl overflow-hidden shadow-2xl relative z-10 border-8 border-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=2560&auto=format&fit=crop" 
                  alt="Minecraft View"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-green/10 rounded-full blur-[100px]" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-blue/10 rounded-full blur-[100px]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tighter">
                Triết lý của <br /> <span className="vibrant-gradient-text uppercase">NVTChill</span>
              </h2>
              <p className="text-slate-400 mb-10 leading-relaxed font-medium text-lg">
                Chúng tôi tin rằng Minecraft không chỉ là một trò chơi, mà còn là một nơi để giải tỏa áp lực. 
                Ở NVTChill, chúng tôi loại bỏ các yếu tố gây stress như tranh giành, phá hoại hay toxic. 
                Thay vào đó, chúng tôi kiến tạo một không gian nơi bạn có thể thư thái xây dựng ngôi nhà mơ ước.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-800/50 rounded-4xl border border-white/5 backdrop-blur-sm transition-all hover:bg-slate-800">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-2xl text-brand-green flex items-center justify-center mb-4">
                    <Heart size={24} />
                  </div>
                  <h4 className="font-black text-sm uppercase tracking-tight mb-2">Cộng đồng</h4>
                  <p className="text-xs text-slate-400 font-medium">Mọi quyết định đều dựa trên ý kiến người chơi.</p>
                </div>
                <div className="p-6 bg-slate-800/50 rounded-4xl border border-white/5 backdrop-blur-sm transition-all hover:bg-slate-800">
                  <div className="w-12 h-12 bg-brand-pink/10 rounded-2xl text-brand-pink flex items-center justify-center mb-4">
                    <Info size={24} />
                  </div>
                  <h4 className="font-black text-sm uppercase tracking-tight mb-2">Hỗ trợ 24/7</h4>
                  <p className="text-xs text-slate-400 font-medium">Đội ngũ Staff luôn sẵn sàng giúp đỡ bạn.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Features />

      {/* Rules Section */}
      <section id="rules" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-slate-900 rounded-5xl p-10 md:p-20 border-8 border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 blur-[120px] translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 grid lg:grid-cols-5 gap-16">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-8 text-brand-green font-black uppercase tracking-[0.3em] text-[10px]">
                  <BookOpen size={16} />
                  <span>Cẩm nang quy tắc</span>
                </div>
                <h2 className="text-[44px] md:text-[60px] font-black mb-8 leading-[0.9] uppercase tracking-tighter">Luật Server <br /> <span className="text-brand-pink italic">Cần Nhớ</span></h2>
                <p className="text-slate-400 mb-10 leading-relaxed font-medium">
                  Để duy trì một môi trường chuyên nghiệp, chúng tôi áp dụng những quy tắc cơ bản sau đây.
                </p>
                <button className="bg-brand-blue/10 text-brand-blue border border-brand-blue/30 px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-brand-blue hover:text-white transition-all ring-8 ring-brand-blue/5">
                  Xem toàn bộ luật
                </button>
              </div>

              <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Không Griefing", text: "Tuyệt đối không phá hoại hoặc lấy vật phẩm người khác.", gradient: "from-brand-green to-teal-500" },
                  { title: "Văn Minh", text: "Không toxic, xúc phạm người khác dưới mọi hình thức.", gradient: "from-brand-blue to-cyan-500" },
                  { title: "Công Bằng", text: "Sử dụng hack client sẽ bị xử lý nghiêm khắc nhất.", gradient: "from-brand-pink to-rose-500" },
                  { title: "Hợp Tác", text: "Luôn tôn trọng Staff và đóng góp cho cộng đồng.", gradient: "from-brand-orange to-yellow-500" },
                ].map((rule, i) => (
                  <div key={i} className="p-8 bg-slate-800/40 backdrop-blur-md border border-white/5 rounded-4xl hover:border-white/10 transition-colors group">
                    <div className={`w-12 h-1.5 rounded-full bg-gradient-to-r ${rule.gradient} mb-6 vibrat-shadow-green`} />
                    <h4 className="font-black text-lg uppercase tracking-tight mb-3 group-hover:text-white transition-colors">{rule.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">{rule.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community / Join CTA */}
      <section id="community" className="py-32 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 blur-[150px] rounded-full" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="vibrant-glass p-16 md:p-24 rounded-5xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-green via-brand-blue to-brand-pink" />
            <h2 className="text-[48px] md:text-[68px] font-black mb-8 leading-[0.85] uppercase tracking-tighter">Sẵn sàng để <br /> tham gia <span className="vibrant-gradient-text">NVTChill</span>?</h2>
            <p className="text-slate-400 mb-12 text-lg font-medium leading-relaxed max-w-xl mx-auto">
              Hãy gia nhập cộng đồng của chúng tôi ngay hôm nay để nhận những phần quà khởi đầu hấp dẫn!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-brand-blue text-white px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-blue/30 ring-8 ring-brand-blue/10">
                Tham gia Discord
              </button>
              <button className="w-full sm:w-auto bg-slate-800 text-slate-300 border border-white/5 px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-slate-700 transition-all">
                Xem Map Live
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
}

