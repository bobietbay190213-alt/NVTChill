import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Gemini API setup
  const ai = new GoogleGenAI({ 
    apiKey: process.env.GEMINI_API_KEY || "",
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/chat", async (req, res) => {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            role: "user",
            parts: [{ text: message }]
          }
        ],
        config: {
          systemInstruction: "You are the NVTChill Assistant, a friendly and relaxed support bot for the NVTChill Minecraft server. " +
            "The server is a Survival server focused on community and relaxation. " +
            "Rules: 1. No griefing. 2. Respect all players. 3. Be kind. 4. No hack/cheat. " +
            "Features: Custom items, friendly staff, beautiful spawn, player-driven economy. " +
            "Your tone is helpful, 'chill', and welcoming. Answer in Vietnamese primarily as requested by the user, but can use English if needed."
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini Error:", error);
      res.status(500).json({ error: "Failed to generate response", details: error.message });
    }
  });

  // Mock server status API
  app.get("/api/status", (req, res) => {
    // In a real app, you'd use a Minecraft ping library
    res.json({
      online: true,
      players: {
        online: 12,
        max: 100
      },
      version: "1.20.1",
      motd: "§a§lNVTChill §f- §7Survival & Chill"
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
