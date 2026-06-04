export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  reply: string;
}

const SYSTEM_INSTRUCTION = `Jawab semua pertanyaan dalam bahasa Indonesia. Jika ini adalah chat pertama, fokuskan jawaban pada pembahasan model tren Lombok, dengan menekankan aspek-aspek yang relevan dari terbentuknya EraByte, seperti visi bisnis, inovasi teknologi, dampak lokal, dan strategi pengembangan produk.`;

export async function sendChatMessage(message: string): Promise<ChatResponse> {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      instruction: SYSTEM_INSTRUCTION,
      message,
    }),
  });

  const data = await response.json();

  return {
    reply: data?.reply ?? "Maaf, tidak ada respons dari server chat.",
  };
}
