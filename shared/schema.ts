import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  organization: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;

export const CONTACT_INFO = {
  name: "Vadali Tejasviram",
  title: "Founder & Chief Architect",
  phone: "+91 89773 14888",
  email: "info@bunnytechnologies.com",
  website: "https://bunnyinnovations.com",
  whatsapp: "https://wa.me/918977314888",
} as const;

export const CAPABILITIES = [
  {
    id: "agentic-ai",
    title: "Agentic AI & Automation",
    icon: "brain",
    description: "Intelligent agents that orchestrate complex workflows with LangChain, CrewAI, and LlamaIndex",
    features: ["Agent Orchestration", "Tool-use & Memory", "RAG Systems", "Autonomous Decision Making"],
  },
  {
    id: "iot-edge",
    title: "IoT & Edge Systems",
    icon: "cpu",
    description: "End-to-end IoT solutions from sensors to cloud with real-time edge processing",
    features: ["Sensor Integration", "Edge Computing", "Real-time Analytics", "Device Management"],
  },
  {
    id: "cloud-data",
    title: "Cloud & Data Engineering",
    icon: "cloud",
    description: "Scalable cloud infrastructure and modern data pipelines on AWS, GCP, and Azure",
    features: ["Cloud Architecture", "Data Pipelines", "MLOps", "Infrastructure as Code"],
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Digital Twins",
    icon: "eye",
    description: "Advanced CV analytics and digital twin solutions for physical world insights",
    features: ["Object Detection", "Video Analytics", "3D Modeling", "Real-time Monitoring"],
  },
] as const;

export const CASE_STUDIES = [
  {
    id: 1,
    client: "Municipal Corporation",
    title: "Smart Traffic Analytics",
    description: "AI-powered traffic monitoring and congestion prediction system",
    outcomes: ["40% reduction in congestion", "Real-time incident detection", "Predictive traffic routing"],
  },
  {
    id: 2,
    client: "State Public Works",
    title: "Road Health Monitoring",
    description: "Computer vision system for pothole detection and road condition assessment",
    outcomes: ["3x faster defect identification", "Automated prioritization", "Cost savings of 25%"],
  },
  {
    id: 3,
    client: "Urban Development Authority",
    title: "Flood Early Warning",
    description: "IoT sensor network with ML-based flood prediction and citizen alerts",
    outcomes: ["6-hour advance warnings", "95% prediction accuracy", "Zero casualties in pilot areas"],
  },
  {
    id: 4,
    client: "State Revenue Department",
    title: "Permit GenAI Bot",
    description: "Agentic AI assistant for permit applications and citizen queries",
    outcomes: ["80% reduction in TAT", "24/7 availability", "90% first-contact resolution"],
  },
] as const;

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Vadali Tejasviram",
    role: "Founder & Chief Architect",
    description: "20+ years in enterprise technology, AI/ML, and cloud architecture. Previously led technology initiatives at major enterprises.",
    isFounder: true,
  },
  {
    id: 2,
    name: "Advisory Board Member",
    role: "Technology Advisor",
    description: "Industry expert providing strategic guidance on AI/ML initiatives and technology roadmap.",
    isFounder: false,
  },
  {
    id: 3,
    name: "Advisory Board Member",
    role: "Government Relations",
    description: "Expert in government technology procurement and civic innovation programs.",
    isFounder: false,
  },
] as const;

export const TECH_STACK = {
  cloud: ["AWS", "GCP", "Azure"],
  agenticAI: ["OpenAI API", "LangChain", "CrewAI", "LlamaIndex"],
  genAIPlatforms: ["Bedrock", "Vertex AI", "Azure AI Studio"],
  dataPipelines: ["Databricks", "DBT", "Kafka", "Airflow"],
  mlOps: ["MLflow", "Docker", "Kubernetes", "Pinecone", "Weaviate"],
  security: ["Encryption", "RBAC", "Audit Logs", "Data Localization"],
} as const;

export const DELIVERY_TIMELINE = [
  { week: "Week 1-2", phase: "Discovery", description: "Requirements, data assessment, success metrics definition" },
  { week: "Week 3-6", phase: "Pilot", description: "Development, testing, and iterative refinement" },
  { week: "Week 7-8", phase: "Measured Impact", description: "Performance validation and outcome measurement" },
  { week: "Week 9+", phase: "Scale", description: "Production deployment and expansion" },
] as const;

export const WHY_BUNNY = [
  { title: "Local, Fast & Accountable", description: "Based in India with rapid response times and direct accountability" },
  { title: "Outcome-First", description: "We measure success by your business outcomes, not just deliverables" },
  { title: "Seamless Integration", description: "No rip & replace - we work with your existing infrastructure" },
  { title: "Transparent & Collaborative", description: "Open communication and joint problem-solving approach" },
  { title: "Proven Track Record", description: "Successful implementations across government and enterprise" },
] as const;
