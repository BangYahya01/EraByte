export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  reply: string;
}

/**
 * Fungsi untuk mengirim pesan chat dari frontend ke backend EraByte AI
 * @param message Teks obrolan yang diketik oleh user
 */
export async function sendChatMessage(message: string): Promise<ChatResponse> {
  // Menembak endpoint API internal Next.js di /api/chat
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // Hanya mengirimkan properti 'message' yang dibutuhkan oleh route.ts backend
    body: JSON.stringify({ message }),
  });

  // Jika response dari server bermasalah (status selain 2xx)
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData?.reply || `Server error dengan status ${response.status}`);
  }

  const data = await response.json();

  return {
    reply: data?.reply ?? "Maaf, tidak ada respons dari server chat.",
  };
}