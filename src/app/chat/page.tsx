"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Send, Plus, Trash2, Bot, User, Sparkles, 
  Image, Code, Globe, MessageSquare, Compass, HelpCircle, 
  Settings, Grid, LayoutDashboard
} from "lucide-react";
import { sendChatMessage } from "@/lib/chatApi";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
}

export default function ChatPage() {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Load data dari localStorage
  useEffect(() => {
    if (!isMounted) return;

    const savedSessions = localStorage.getItem("erabyte_chat_sessions");
    if (savedSessions) {
      try {
        const parsed = JSON.parse(savedSessions);
        setSessions(parsed);
        if (parsed.length > 0) {
          setActiveSessionId(parsed[0].id);
        }
      } catch (e) {
        console.error("Gagal memuat histori chat:", e);
      }
    } else {
      // Mulai dengan kondisi bersih/kosong tanpa pesan default agar muncul tampilan mirip ChatGPT
      const defaultSession: ChatSession = {
        id: "session-1",
        title: "Obrolan Baru",
        messages: [],
      };
      setSessions([defaultSession]);
      setActiveSessionId(defaultSession.id);
    }
  }, [isMounted]);

  // Simpan ke localStorage
  useEffect(() => {
    if (isMounted && sessions.length > 0) {
      localStorage.setItem("erabyte_chat_sessions", JSON.stringify(sessions));
    }
  }, [sessions, isMounted]);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [sessions, activeSessionId]);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center text-gray-400">
        <div className="flex flex-col items-center gap-3">
          <Sparkles className="w-8 h-8 text-amber-400 animate-spin" />
          <p className="text-sm font-medium tracking-wide">Memuat EraByte AI...</p>
        </div>
      </div>
    );
  }

  const currentSession = sessions.find((s) => s.id === activeSessionId);
  const isChatEmpty = !currentSession || currentSession.messages.length === 0;

  const handleNewChat = () => {
    const newSession: ChatSession = {
      id: `session-${Date.now()}`,
      title: `Obrolan Baru`,
      messages: [],
    };
    setSessions([newSession, ...sessions]);
    setActiveSessionId(newSession.id);
  };

  const handleDeleteSession = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const filtered = sessions.filter((s) => s.id !== id);
    setSessions(filtered);
    
    if (activeSessionId === id) {
      if (filtered.length > 0) {
        setActiveSessionId(filtered[0].id);
      } else {
        setActiveSessionId(null);
      }
    }
    if (filtered.length === 0) {
      localStorage.removeItem("erabyte_chat_sessions");
    }
  };

  // Fungsi eksekusi pengiriman pesan utama
  const executeSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || !activeSessionId || isLoading) return;

    setIsLoading(true);
    const userText = textToSend;

    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      role: "user",
      content: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setSessions((prev) =>
      prev.map((session) => {
        if (session.id === activeSessionId) {
          const isNewChat = session.title === "Obrolan Baru" || session.messages.length === 0;
          return {
            ...session,
            title: isNewChat ? userText.substring(0, 18) + (userText.length > 18 ? "..." : "") : session.title,
            messages: [...session.messages, userMessage],
          };
        }
        return session;
      })
    );

    try {
      const res = await sendChatMessage(userText);

      const aiMessage: Message = {
        id: `msg-${Date.now() + 1}`,
        role: "assistant",
        content: res.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setSessions((prev) =>
        prev.map((session) =>
          session.id === activeSessionId
            ? { ...session, messages: [...session.messages, aiMessage] }
            : session
        )
      );

    } catch (error: any) {
      console.error("Error chat:", error);
      
      const errorMessage: Message = {
        id: `msg-${Date.now() + 1}`,
        role: "assistant",
        content: error?.message || "Aduh maaf Bang, koneksi ke otak AI-nya terputus. Mohon pastikan API Key di .env.local sudah terisi ya!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      
      setSessions((prev) =>
        prev.map((session) =>
          session.id === activeSessionId
            ? { ...session, messages: [...session.messages, errorMessage] }
            : session
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    executeSendMessage(inputMessage);
    setInputMessage("");
  };

  // Daftar kartu fitur shortcut ala ChatGPT di image_22c2ab.png
  const quickCards = [
    { icon: <Image className="w-4 h-4 text-emerald-400" />, label: "Buat gambar", prompt: "Tolong buatkan konsep gambar ilustrasi AI bertema masa depan" },
    { icon: <Code className="w-4 h-4 text-blue-400" />, label: "Tulis atau edit kode", prompt: "Bantu buatkan fungsi fetch data komponen React Next.js" },
    { icon: <Globe className="w-4 h-4 text-purple-400" />, label: "Cari sesuatu", prompt: "Jelaskan tren perkembangan teknologi AI di Indonesia saat ini" },
    { icon: <Compass className="w-4 h-4 text-amber-400" />, label: "Rencana traveling", prompt: "Berikan rekomendasi destinasi wisata seru di pulau Lombok" },
  ];

  return (
    <div className="flex h-screen w-full bg-[#0B0F19] p-4 gap-4 text-gray-200 antialiased font-sans">
      
      {/* LEFT SIDEBAR PANEL (Tempat Histori & Navigasi Fitur Tambahan) */}
      <div className="w-72 flex flex-col bg-[#111827]/60 rounded-2xl border border-white/5 p-4 backdrop-blur-xl shadow-2xl justify-between">
        
        {/* Bagian Atas Sidebar: Aksi & Histori Obrolan */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <button
            onClick={handleNewChat}
            className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl transition-all transform active:scale-95 shadow-md mb-5 text-sm tracking-wide"
          >
            <Plus className="w-4 h-4 stroke-[3]" /> Obrolan Baru
          </button>

          <div className="flex-1 overflow-y-auto space-y-1 pr-1 text-sm scrollbar-thin">
            <p className="text-[11px] font-bold text-gray-500 px-2 tracking-widest uppercase mb-2">Riwayat Percakapan</p>
            {sessions.map((session) => (
              <div
                key={session.id}
                onClick={() => setActiveSessionId(session.id)}
                className={`flex items-center justify-between group p-2.5 rounded-xl cursor-pointer transition-all border duration-200 ${
                  session.id === activeSessionId
                    ? "bg-amber-500/10 border-amber-500/20 text-amber-400 font-medium"
                    : "bg-transparent border-transparent hover:bg-white/5 text-gray-400 hover:text-gray-200"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <MessageSquare className="w-4 h-4 flex-shrink-0 text-gray-500 group-hover:text-amber-400 transition-colors" />
                  <span className="truncate max-w-[170px] text-[13px]">{session.title}</span>
                </div>
                <button
                  onClick={(e) => handleDeleteSession(session.id, e)}
                  className="opacity-0 group-hover:opacity-100 p-1 text-gray-500 hover:text-red-400 rounded-lg hover:bg-red-500/10 transition"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
            {sessions.length === 0 && (
              <p className="text-xs text-gray-500 text-center py-6 italic">Tidak ada riwayat obrolan.</p>
            )}
          </div>
        </div>

        {/* Bagian Bawah Sidebar: SLOT/TEMPAT FITUR-FITUR TAMBAHAN (Sesuai Request Abang) */}
        <div className="mt-4 pt-4 border-t border-white/5 space-y-1">
          <p className="text-[10px] font-bold text-gray-500 px-2 tracking-widest uppercase mb-1.5">Fitur & Aplikasi</p>
          
          <button className="flex items-center gap-3 w-full p-2.5 rounded-xl text-gray-400 hover:text-amber-400 hover:bg-white/5 transition text-sm text-left">
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard EraByte</span>
          </button>
          
          <button className="flex items-center gap-3 w-full p-2.5 rounded-xl text-gray-400 hover:text-amber-400 hover:bg-white/5 transition text-sm text-left">
            <Grid className="w-4 h-4" />
            <span>Eksplor Komponen GPT</span>
          </button>

          <button className="flex items-center gap-3 w-full p-2.5 rounded-xl text-gray-400 hover:text-gray-200 hover:bg-white/5 transition text-sm text-left">
            <Settings className="w-4 h-4" />
            <span>Pengaturan Akun</span>
          </button>
        </div>

      </div>

      {/* RIGHT CHAT INTERFACE PANEL */}
      <div className="flex-1 flex flex-col bg-[#111827]/20 rounded-2xl border border-white/5 overflow-hidden backdrop-blur-sm relative shadow-2xl">
        
        {/* Header Atas */}
        <div className="p-4 bg-[#111827]/60 border-b border-white/5 flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
              <Bot className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h2 className="text-xs font-bold tracking-wider text-gray-200">EraByte AI Assistant</h2>
              <p className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" /> Sistem Siap Melayani
              </p>
            </div>
          </div>
        </div>

        {/* AREA KONTEN UTAMA */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-none">
          
          {isChatEmpty ? (
            /* TAMPILAN AWAL SEPERTI CHAT GPT (Kiblat dari image_22c2ab.png) */
            <div className="h-full flex flex-col items-center justify-center max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
              <div className="space-y-3">
                <div className="w-14 h-14 bg-gradient-to-b from-amber-400/20 to-amber-600/5 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                  <Sparkles className="w-7 h-7 text-amber-400 animate-pulse" />
                </div>
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-200 to-gray-400 tracking-tight">
                  Apa yang bisa saya bantu hari ini, Bang?
                </h1>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  Tanyakan apa saja, mulai dari pengerjaan kode pemrograman, analisis data, hingga info lokal seputar EraByte.
                </p>
              </div>

              {/* Grid Barisan Fitur Shortcut / Quick Cards */}
              <div className="grid grid-cols-2 gap-3 w-full pt-4">
                {quickCards.map((card, index) => (
                  <div
                    key={index}
                    onClick={() => executeSendMessage(card.prompt)}
                    className="flex flex-col items-start text-left p-4 rounded-xl bg-[#1f2937]/30 border border-white/5 hover:border-amber-500/30 hover:bg-[#1f2937]/60 cursor-pointer transition-all duration-200 group relative shadow-md"
                  >
                    <div className="p-2 bg-slate-800/80 border border-white/5 rounded-lg mb-2.5 group-hover:scale-105 transition-transform">
                      {card.icon}
                    </div>
                    <span className="text-[13px] font-semibold text-gray-300 group-hover:text-amber-400 transition-colors">
                      {card.label}
                    </span>
                    <span className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">
                      Klik instan untuk kirim prompt perintah
                    </span>
                  </div>
                ))}
              </div>
            </div>

          ) : (
            
            /* TAMPILAN JIKA CHAT SUDAH BERJALAN */
            <div className="space-y-6 max-w-3xl mx-auto">
              {currentSession.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-4 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role !== "user" && (
                    <div className="w-8 h-8 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-amber-400 shadow-sm flex-shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`flex flex-col gap-1 max-w-[80%] ${msg.role === "user" ? "items-end" : "items-start"}`}>
                    <div
                      className={`p-3.5 rounded-2xl text-[13px] leading-relaxed shadow-sm whitespace-pre-wrap ${
                        msg.role === "user"
                          ? "bg-amber-500 text-slate-950 font-medium rounded-tr-none"
                          : "bg-[#1f2937]/60 text-gray-200 border border-white/5 rounded-tl-none"
                      }`}
                    >
                      {msg.content}
                    </div>
                    <span className="text-[9px] text-gray-500 px-1">{msg.timestamp}</span>
                  </div>

                  {msg.role === "user" && (
                    <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 border border-amber-400 flex items-center justify-center font-bold shadow-sm flex-shrink-0">
                      <User className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  )}
                </div>
              ))}

              {/* Animasi Mengetik Balasan AI */}
              {isLoading && (
                <div className="flex gap-4 justify-start items-center pl-1">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 border border-amber-500/20 flex items-center justify-center text-amber-400 animate-pulse">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  </div>
                  <div className="bg-[#1f2937]/30 border border-white/5 py-2 px-4 rounded-2xl rounded-tl-none text-[12px] text-gray-400 italic">
                    EraByte sedang mengetik respons...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}

        </div>

        {/* INPUT BAR BAWAH ALIGN CENTER (Persis Seperti Gaya ChatGPT) */}
        <div className="p-4 bg-gradient-to-t from-[#0B0F19] to-transparent flex flex-col items-center">
          <form
            onSubmit={handleFormSubmit}
            className="w-full max-w-3xl flex gap-2 items-center bg-[#1f2937]/40 border border-white/10 focus-within:border-amber-500/50 rounded-2xl px-4 py-3 shadow-2xl backdrop-blur-md transition-all duration-300"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Tanyakan apa saja ke EraByte Bot, Bang..."
              className="flex-1 bg-transparent border-none focus:outline-none text-[13.5px] text-gray-100 placeholder:text-gray-500 py-1"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className="p-2.5 rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 disabled:opacity-10 disabled:hover:bg-amber-500 transition-all flex items-center justify-center shadow-md active:scale-95 flex-shrink-0"
            >
              <Send className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </form>
          <p className="text-[10px] text-gray-600 mt-2 tracking-wide">
            EraByte AI dapat membuat kesalahan. Pertimbangkan untuk memeriksa informasi penting, Bang.
          </p>
        </div>

      </div>
    </div>
  );
}