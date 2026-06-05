export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  reply: string;
}

<<<<<<< HEAD
/**
 * Fungsi untuk mengirim pesan chat dari frontend ke backend EraByte AI
 * @param message Teks obrolan yang diketik oleh user
 */
export async function sendChatMessage(message: string): Promise<ChatResponse> {
  // Menembak endpoint API internal Next.js di /api/chat
=======
const SYSTEM_INSTRUCTION = `Jawab semua pertanyaan dalam bahasa Indonesia. Jika ini adalah chat pertama, fokuskan jawaban pada pembahasan model tren Lombok, dengan menekankan aspek-aspek yang relevan dari terbentuknya EraByte, seperti visi bisnis, inovasi teknologi, dampak lokal, dan strategi pengembangan produk.`;

export async function sendChatMessage(message: string): Promise<ChatResponse> {
>>>>>>> 9995d3cb40ea458deb5b0d7553068927223b7d4b
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
<<<<<<< HEAD
    // Hanya mengirimkan properti 'message' yang dibutuhkan oleh route.ts backend
    body: JSON.stringify({ message }),
  });

  // Jika response dari server bermasalah (status selain 2xx)
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData?.reply || `Server error dengan status ${response.status}`);
  }

=======
    body: JSON.stringify({
      instruction: SYSTEM_INSTRUCTION,
      message,
    }),
  });

>>>>>>> 9995d3cb40ea458deb5b0d7553068927223b7d4b
  const data = await response.json();

  return {
    reply: data?.reply ?? "Maaf, tidak ada respons dari server chat.",
  };
<<<<<<< HEAD
}
=======
}
>>>>>>> 9995d3cb40ea458deb5b0d7553068927223b7d4b
