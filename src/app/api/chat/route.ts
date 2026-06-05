import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const message = body?.message as string | undefined;
    const instruction = (body?.instruction as string | undefined)?.trim();
    
    const apiKey = process.env.GOOGLE_GENAI_API_KEY?.trim();
    let rawModel = process.env.GOOGLE_GENAI_MODEL?.trim() || "gemini-1.5-flash"; // Gunakan gemini-1.5-flash yang stabil
    const model = rawModel.startsWith("models/") ? rawModel : `models/${rawModel}`;

    if (!message) {
      return NextResponse.json(
        { reply: "Kirim pesan terlebih dahulu, Bang." },
        { status: 400 }
      );
    }

    if (!apiKey) {
      return NextResponse.json(
        { reply: "Chatbot belum dikonfigurasi. Tambahkan GOOGLE_GENAI_API_KEY di dashboard Vercel." },
        { status: 501 }
      );
    }

    // Inisialisasi SDK
    const ai = new GoogleGenAI({ apiKey: apiKey });
    
    // Logika Persona
    const karakterSantai = 
      "Kamu adalah asisten AI yang ramah, gaul, santai, dan suka menyapa user dengan sebutan 'Bang'. " +
      "Jawablah dengan bahasa Indonesia santai sehari-hari. " +
      "Jangan membahas materi kuliah atau bisnis EraByte kecuali ditanya.";

    const finalPrompt = instruction 
      ? `${instruction}\n\n${message}` 
      : `${karakterSantai}\n\nPesan user: ${message}`;

    // Memanggil API
    const response = await ai.models.generateContent({
      model: model,
      contents: finalPrompt,
    });

    const replyText = response?.text || "Respons chat kosong, Bang.";

    return NextResponse.json({ reply: replyText });

  } catch (error: any) {
    console.error("Gemini server error:", error);
    
    return NextResponse.json(
      { reply: `Ada masalah di server nih, Bang: ${error?.message || "Unknown Error"}` },
      { status: 500 }
    );
  }
}