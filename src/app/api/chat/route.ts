import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(request: NextRequest) {
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
