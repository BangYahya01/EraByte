"use client";

import { useEffect, useRef, useState } from "react";
import { sendChatMessage } from "@/lib/chatApi";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content:
      "Halo! Chat pertama ini fokus membahas model tren Lombok berdasarkan fokus terbentuknya EraByte: bagaimana visi inovasi teknologi, pendekatan solusi digital, dan kebutuhan pasar lokal saling terjalin dalam strategi produk kami.",
  },
];

const menuItems = [
  "Search chats",
  "Library",
  "Projects",
  "Apps",
  "Codex",
  "More",
];

export default function DashboardChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setError("");
    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsSending(true);

    try {
      const response = await sendChatMessage(trimmed);
      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: response.reply,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setError("Gagal memproses chat. Periksa koneksi atau konfigurasi API Anda.");
      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "Maaf, terjadi kesalahan server. Silakan coba lagi nanti atau periksa pengaturan API Anda.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  const resetConversation = () => {
    setMessages(initialMessages);
    setInput("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="min-h-screen">
        <main className="w-full">
          <div className="flex h-full flex-col">
            <header className="border-b border-slate-800 bg-slate-950/95 px-6 py-5 backdrop-blur-xl">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">ChatGPT</p>
                  <h1 className="text-3xl font-semibold text-white">What are you working on?</h1>
                </div>
              </div>
            </header>

            <div className="flex-1 overflow-hidden px-6 py-8">
              {messages.length === 0 ? (
                <div className="mx-auto flex h-full max-w-4xl flex-col items-center justify-center gap-8 text-center">
                  <div className="space-y-3">
                    <p className="text-2xl font-semibold text-white">Ask anything</p>
                    <p className="max-w-2xl text-sm leading-6 text-slate-400">
                      Mulai percakapan dengan AI tanpa login. Ketik pertanyaan Anda dan tekan Enter atau tombol kirim.
                    </p>
                  </div>

                  <div className="w-full max-w-3xl">
                    <div className="relative rounded-full bg-slate-900/90 px-4 py-4 shadow-[0_0_0_1px_rgba(148,163,184,0.08)]">
                      <span className="mr-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400">+</span>
                      <input
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Tanyakan sesuatu dalam Bahasa Indonesia"
                        className="w-full bg-transparent text-slate-100 placeholder:text-slate-500 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleSend}
                        disabled={isSending || !input.trim()}
                        className="absolute right-3 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-full bg-slate-700 px-4 py-2 text-sm text-slate-100 transition hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        ➜
                      </button>
                    </div>
                    <p className="mt-3 text-xs text-slate-500">Shift+Enter untuk baris baru</p>
                  </div>
                </div>
              ) : (
                <div className="mx-auto flex h-full max-w-5xl flex-col rounded-3xl border border-slate-800 bg-slate-950/90 shadow-xl">
                  <div
                    ref={scrollRef}
                    className="flex-1 overflow-y-auto px-6 py-6 space-y-4 scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-slate-700"
                  >
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`rounded-3xl border px-5 py-4 shadow-sm ${
                          message.role === "user"
                            ? "ml-auto max-w-[70%] border-slate-700 bg-slate-900 text-slate-100"
                            : "mr-auto max-w-[80%] border-slate-800 bg-slate-950 text-slate-100"
                        }`}
                      >
                        <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500 mb-2">
                          {message.role === "user" ? "You" : "Assistant"}
                        </p>
                        <p className="whitespace-pre-line text-sm leading-7">{message.content}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-slate-800 bg-slate-950 px-6 py-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <textarea
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        onKeyDown={handleKeyDown}
                        rows={2}
                        className="min-h-[72px] flex-1 resize-none rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 focus:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-700"
                        placeholder="Type your message..."
                      />
                      <button
                        type="button"
                        onClick={handleSend}
                        disabled={isSending || !input.trim()}
                        className="inline-flex h-12 items-center justify-center rounded-full bg-slate-700 px-6 text-sm font-semibold text-slate-100 transition hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isSending ? "Sending..." : "Send"}
                      </button>
                    </div>
                    {error && <p className="mt-2 text-sm text-rose-400">{error}</p>}
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
