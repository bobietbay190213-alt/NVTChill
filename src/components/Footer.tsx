import { Gamepad2, Github, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center font-black text-slate-900 italic">
                N
              </div>
              <span className="font-extrabold text-2xl tracking-tighter text-white uppercase">NVTCHILL</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
              Server Minecraft Survival Việt Nam tập trung vào sự thư giãn và cộng đồng. 
              Hãy cùng chung tay xây dựng một thế giới tươi đẹp.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-slate-900 border border-white/5 rounded-2xl flex items-center justify-center text-slate-400 hover:text-brand-green hover:border-brand-green/20 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-900 border border-white/5 rounded-2xl flex items-center justify-center text-slate-400 hover:text-brand-green hover:border-brand-green/20 transition-all">
                <Gamepad2 size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-900 border border-white/5 rounded-2xl flex items-center justify-center text-slate-400 hover:text-brand-pink hover:border-brand-pink/20 transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-sm uppercase tracking-widest text-white mb-8">Truy cập nhanh</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-bold uppercase tracking-tight">
              <li><a href="#" className="hover:text-brand-green transition-colors">Trang chủ</a></li>
              <li><a href="#about" className="hover:text-brand-green transition-colors">Về server</a></li>
              <li><a href="#features" className="hover:text-brand-green transition-colors">Tính năng</a></li>
              <li><a href="#rules" className="hover:text-brand-green transition-colors">Luật lệ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-sm uppercase tracking-widest text-white mb-8">Cộng đồng</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-bold uppercase tracking-tight">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Cửa hàng vật phẩm</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Nạp thẻ tài trợ</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Tải Minecraft</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Discord tham gia</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-sm uppercase tracking-widest text-white mb-8">Thông báo</h4>
            <p className="text-sm text-slate-400 mb-6 font-medium">Đăng ký nhận tin mới nhất từ NVTChill.</p>
            <div className="flex gap-2 p-1 bg-slate-900 rounded-2xl border border-white/5 ring-4 ring-slate-900/10">
              <input 
                type="email" 
                placeholder="Email của bạn" 
                className="bg-transparent px-4 py-2 text-sm w-full focus:outline-none text-white font-medium"
              />
              <button className="bg-brand-green text-slate-950 px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest">
                Gửi
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© 2024 NVTCHILL NETWORK. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
