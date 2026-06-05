import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(request: NextRequest) {
<<<<<<< HEAD
  try {
    const body = await request.json();
    const message = body?.message as string | undefined;
    const apiKey = process.env.GOOGLE_GENAI_API_KEY?.trim();
    
    let rawModel = process.env.GOOGLE_GENAI_MODEL?.trim() || "gemini-2.5-flash";
    const model = rawModel.startsWith("models/") ? rawModel : `models/${rawModel}`;

    if (!message) {
      return NextResponse.json(
        { reply: "Kirim pesan terlebih dahulu, Bang." },
        { status: 400 }
      );
    }

    if (!apiKey) {
      return NextResponse.json(
        { reply: "Chatbot belum dikonfigurasi. Tambahkan GOOGLE_GENAI_API_KEY ke .env.local." },
        { status: 501 }
      );
    }

    // Inisialisasi SDK GoogleGenAI resmi
    const ai = new GoogleGenAI({ apiKey: apiKey });
    
    // Konfigurasi persona bot santai
    const karakterSantai = 
      "Kamu adalah asisten AI yang ramah, gaul, santai, asyik, dan suka menyapa user dengan sebutan 'Bang'. " +
      "Jawablah setiap pertanyaan dengan singkat, jelas, natural, dan menggunakan bahasa Indonesia santai/kasual sehari-hari. " +
      "Jangan membahas materi kuliah, bisnis EraByte, atau tren Lombok kecuali user sendiri yang menanyakannya.";

    const prompt = `${karakterSantai}\n\nPesan dari user: ${message}`;

    // Memanggil API Gemini
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    const replyText = 
      response?.text || 
      (response as any)?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!replyText) {
      console.log("Struktur respon asli Google:", JSON.stringify(response, null, 2));
      return NextResponse.json(
        { reply: "Aduh Bang, responnya kosong atau format teksnya gak dikenali nih." },
        { status: 500 }
      );
    }

    return NextResponse.json({ reply: replyText });

  } catch (error: any) {
    console.error("Gemini server error detail:", error);
    
    const isUnauthorized = 
      error?.status === 401 || 
      error?.statusCode === 401 || 
      String(error).includes("401") ||
      String(error?.message).includes("API_KEY_INVALID");

    if (isUnauthorized) {
      return NextResponse.json(
        { reply: "Gagal terhubung, Bang (Error 401). Cek lagi API Key di .env.local nya ya." },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { reply: `Ada masalah di server nih, Bang: ${error?.message || "Unknown Error"}` },
      { status: 500 }
    );
  }
}
=======
  const body = await request.json();
  const message = body?.message as string | undefined;
  const instruction = (body?.instruction as string | undefined)?.trim();
  const apiKey = process.env.GOOGLE_GENAI_API_KEY?.trim();
  const model = process.env.GOOGLE_GENAI_MODEL?.trim() ?? "gemini-3.5-flash";

  if (!message) {
    return NextResponse.json(
      { reply: "Kirim pesan terlebih dahulu." },
      { status: 400 }
    );
  }

  if (!apiKey) {
    return NextResponse.json(
      {
        reply:
          "Chatbot belum dikonfigurasi. Tambahkan GOOGLE_GENAI_API_KEY ke .env.local.",
      },
      { status: 501 }
    );
  }

  const ai = new GoogleGenAI({ apiKey });
  const prompt = instruction
    ? `${instruction}\n\n${message}`
    : `Jawab dalam bahasa Indonesia. ${message}`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return NextResponse.json({
      reply:
        response?.text ??
        "Respons chat tidak tersedia. Periksa konfigurasi API Anda.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        reply:
          "Terjadi kesalahan saat memproses chat. Pastikan GOOGLE_GENAI_API_KEY benar dan paket @google/genai sudah terpasang.",
      },
      { status: 500 }
    );
  }
}
>>>>>>> 9995d3cb40ea458deb5b0d7553068927223b7d4b
