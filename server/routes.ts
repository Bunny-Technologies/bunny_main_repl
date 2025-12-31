import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      console.log("Contact form submission received:");
      console.log("Name:", validatedData.name);
      console.log("Email:", validatedData.email);
      console.log("Organization:", validatedData.organization || "Not provided");
      console.log("Phone:", validatedData.phone || "Not provided");
      console.log("Message:", validatedData.message);
      console.log("Timestamp:", new Date().toISOString());
      console.log("---");

      res.json({ 
        success: true, 
        message: "Your message has been received. We will get back to you within 24 hours." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your request." 
        });
      }
    }
  });

  return httpServer;
}
