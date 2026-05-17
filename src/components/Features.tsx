import { motion } from "motion/react";
import { Shield, Coins, Map, Users, Sparkles, Zap } from "lucide-react";

const features = [
  {
    title: "Survival Classic",
    desc: "Sinh tồn thuần túy, claim đất.",
    icon: "🌲",
    gradient: "from-brand-green to-green-600",
    shadow: "shadow-green-900/40"
  },
  {
    title: "Skyblock OP",
    desc: "Hệ thống nhiệm vụ khổng lồ.",
    icon: "💎",
    gradient: "from-brand-blue to-blue-600",
    shadow: "shadow-blue-900/40"
  },
  {
    title: "Box PvP",
    desc: "Kỹ năng đối đầu cực mạnh.",
    icon: "🗡️",
    gradient: "from-brand-orange to-red-600",
    shadow: "shadow-red-900/40"
  },
  {
    title: "Kinh Tế Thực",
    desc: "Thương mại tự do giữa các người chơi.",
    icon: "⚖️",
    gradient: "from-amber-400 to-amber-600",
    shadow: "shadow-amber-900/40"
  },
  {
    title: "Staff Nhiệt Tình",
    desc: "Hỗ trợ 24/7 mọi vấn đề của bạn.",
    icon: "🤝",
    gradient: "from-brand-pink to-rose-600",
    shadow: "shadow-rose-900/40"
  },
  {
    title: "Sự Kiện Khủng",
    desc: "Phần thưởng hấp dẫn mỗi tuần.",
    icon: "🎁",
    gradient: "from-purple-400 to-purple-600",
    shadow: "shadow-purple-900/40"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-[40px] md:text-[56px] font-black uppercase tracking-tighter mb-6">Mọi thứ bạn cần cho một <br /> trải nghiệm <span className="vibrant-gradient-text">đẳng cấp</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-bold uppercase text-xs tracking-[0.2em] italic">
            Chúng tôi xây dựng server với tâm huyết, chú trọng vào cảm giác thư giãn và sự kết nối.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-800 p-8 rounded-[40px] flex items-center gap-6 border border-white/5 hover:bg-slate-700/50 transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-20 h-20 bg-gradient-to-tr ${f.gradient} rounded-[28px] flex items-center justify-center text-4xl shadow-lg ${f.shadow} group-hover:scale-110 transition-transform shrink-0`}>
                {f.icon}
              </div>
              <div>
                <h3 className="font-black text-xl uppercase tracking-tight mb-1">{f.title}</h3>
                <p className="text-slate-400 text-sm font-medium">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
