import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Copy, Check, Play, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<any>(null);
  const serverIP = "play.nvtchill.xyz";

  useEffect(() => {
    fetch("/api/status")
      .then(res => res.json())
      .then(data => setStatus(data))
      .catch(() => setStatus({ online: false }));
  }, []);

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-12">
      <div className="absolute inset-0 z-0">
        <div className="minecraft-bg w-full h-full opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-brand-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-40 left-40 w-64 h-64 bg-brand-green/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 px-4 py-1.5 rounded-full mb-8">
            <span className={`w-2 h-2 rounded-full ${status?.online ? "bg-brand-green animate-pulse" : "bg-gray-500"}`}></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-green">
              {status?.online ? "Đang Hoạt Động • 1.20.x" : "Server Đang Bảo Trì"}
            </span>
          </div>
          
          <h1 className="text-[64px] md:text-[96px] font-black leading-[0.85] mb-8 uppercase tracking-tighter">
            Chill <span className="vibrant-gradient-text text-[72px] md:text-[104px]">Vượt</span><br/>Giới Hạn
          </h1>
          
          <p className="text-slate-400 text-lg mb-12 max-w-lg leading-relaxed font-medium">
            Gia nhập cộng đồng Minecraft Survival lớn nhất Việt Nam. Trải nghiệm lối chơi sinh tồn nguyên bản, 
            không toxic, và thỏa sức sáng tạo trong thế giới riêng của bạn.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div 
              onClick={copyIP}
              className="group cursor-pointer flex items-center bg-slate-900/80 backdrop-blur-md border-2 border-slate-700/50 p-1 rounded-2xl ring-8 ring-slate-900/10 hover:border-brand-green transition-all"
            >
              <div className="px-6 py-4 font-mono text-xl font-bold text-brand-green tracking-wide">
                {serverIP}
              </div>
              <button className="bg-brand-green hover:bg-brand-green/90 text-slate-950 px-8 py-4 rounded-xl font-black uppercase text-sm shadow-lg shadow-brand-green/20 active:scale-95 transition-transform">
                {copied ? "Đã chép" : "Copy IP"}
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Online Status Card */}
          <div className="vibrant-glass p-8 rounded-5xl shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <div className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em] mb-1">Số lượng người chơi</div>
                  <div className="text-4xl font-black text-white">
                    {status?.players?.online || 0}
                    <span className="text-slate-600 text-xl font-medium ml-1">/{status?.players?.max || 100}</span>
                  </div>
                </div>
                <Users className="text-brand-green opacity-40" size={32} />
              </div>
              <div className="w-full h-4 bg-slate-900/50 rounded-full p-1">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(status?.players?.online / status?.players?.max) * 100}%` }}
                  className="h-full bg-gradient-to-r from-brand-green to-brand-blue rounded-full vibrant-shadow-green"
                />
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-brand-blue/10 border border-brand-blue/20 p-8 rounded-4xl text-center">
              <div className="text-3xl font-black text-brand-blue mb-1 uppercase tracking-tighter">99.9%</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">Uptime</div>
            </div>
            <div className="bg-brand-pink/10 border border-brand-pink/20 p-8 rounded-4xl text-center">
              <div className="text-3xl font-black text-brand-pink mb-1 uppercase tracking-tighter">Top #1</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">Bình Chọn</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
