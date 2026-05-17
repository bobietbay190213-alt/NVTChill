import { motion } from "motion/react";
import { Coffee, Gamepad2, Shield, Users } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-green rounded-xl shadow-[0_0_15px_rgba(34,197,94,0.4)] flex items-center justify-center font-black text-slate-900 text-xl italic">
              N
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-white uppercase">
              NVT<span class="text-brand-green underline decoration-4 underline-offset-4">Chill</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
            <a href="#about" className="text-white hover:text-brand-green transition-colors">Về chúng tôi</a>
            <a href="#features" className="hover:text-brand-green transition-colors">Tính năng</a>
            <a href="#rules" className="hover:text-brand-green transition-colors">Luật lệ</a>
            <a href="#community" className="text-brand-pink hover:opacity-80 transition-opacity">Cộng đồng</a>
          </div>

          <div>
            <button className="bg-brand-blue px-8 py-3 rounded-full text-white text-xs font-black uppercase tracking-widest shadow-xl shadow-brand-blue/30 ring-4 ring-brand-blue/10 hover:scale-105 transition-all">
              Tham gia
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
