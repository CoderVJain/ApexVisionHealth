import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const result = insertContactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({
          message: validationError.message,
        });
      }
      
      // Create timestamp for the message
      const contactData = {
        ...result.data,
        createdAt: new Date().toISOString(),
      };
      
      // Store the contact message
      const contactMessage = await storage.saveContactMessage(contactData);
      
      return res.status(201).json({
        message: "Contact message saved successfully",
        id: contactMessage.id,
      });
    } catch (error) {
      console.error("Error saving contact message:", error);
      return res.status(500).json({
        message: "An error occurred while saving your message. Please try again later."
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
