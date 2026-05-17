import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Chào bạn! Mình là NVTChill Assistant. Bạn cần giúp đỡ gì về server không?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: "bot", text: data.text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "bot", text: "Xin lỗi, mình đang gặp chút trục trặc. Bạn thử lại sau nhé!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-6 w-80 sm:w-96"
          >
            <Card className="flex flex-col shadow-2xl border border-white/10 bg-slate-900 overflow-hidden h-[550px] rounded-[32px]">
              <div className="bg-slate-800 p-6 flex items-center justify-between text-white border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-green/20 rounded-xl flex items-center justify-center text-brand-green">
                    <Bot size={24} />
                  </div>
                  <div>
                    <span className="font-black uppercase tracking-tight block">NVT Helper</span>
                    <span className="text-[10px] text-brand-green font-bold uppercase tracking-widest">Đang trực tuyến</span>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:bg-white/5 p-2 rounded-xl transition-colors">
                  <X size={20} className="text-slate-400" />
                </button>
              </div>

              <ScrollArea className="flex-1 p-6" ref={scrollRef}>
                <div className="space-y-6">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-brand-blue" : "bg-slate-800 border border-white/5"}`}>
                          {msg.role === "user" ? <User size={14} className="text-white" /> : <Bot size={14} className="text-brand-green" />}
                        </div>
                        <div className={`p-4 rounded-3xl text-sm leading-relaxed font-medium ${msg.role === "user" ? "bg-brand-blue text-white rounded-tr-none" : "bg-slate-800 text-slate-200 rounded-tl-none border border-white/5"}`}>
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex gap-3 items-center text-slate-500 font-bold uppercase text-[10px] tracking-widest ml-11">
                        <Loader2 size={12} className="animate-spin" />
                        Staff đang soạn...
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              <div className="p-6 border-t border-white/5 bg-slate-900/50 backdrop-blur-md flex gap-3">
                <Input 
                  placeholder="Hỏi helper về server..." 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="rounded-2xl border-white/5 bg-slate-800 focus-visible:ring-brand-green text-white"
                />
                <Button onClick={handleSend} disabled={isLoading} className="rounded-2xl bg-brand-green hover:bg-brand-green/90 text-slate-950 px-5 ring-4 ring-brand-green/10">
                  <Send size={18} />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-green text-slate-950 p-5 rounded-3xl shadow-2xl hover:shadow-brand-green/30 flex items-center gap-3 ring-8 ring-brand-green/10 transition-all"
      >
        <MessageCircle size={28} />
        <span className="font-black uppercase tracking-widest text-xs pr-2">Hỏi Helper</span>
      </motion.button>
    </div>
  );
}
