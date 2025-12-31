# Bunny Innovations Marketing Website

## Overview
A production-ready marketing website for "Bunny Innovations — AI + IoT + Cloud Solutions". The website replicates the structure of the company brochure with interactive elements.

## Tech Stack
- **Frontend**: React + TypeScript + Vite + TailwindCSS
- **Backend**: Express.js
- **Styling**: TailwindCSS + shadcn/ui components
- **Routing**: wouter
- **State Management**: TanStack Query

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── layout/        # Header, Footer
│   │   ├── sections/      # Home page sections
│   │   └── ui/            # shadcn components
│   ├── pages/             # All page components
│   ├── hooks/             # Custom hooks
│   └── lib/               # Utilities
server/
├── routes.ts              # API routes
├── storage.ts             # In-memory storage
└── index.ts               # Server entry
shared/
└── schema.ts              # Shared types and data
```

## Pages
1. **Home** (/) - Full marketing page with all sections
2. **About** (/about) - Company identity and mission
3. **Capabilities** (/capabilities) - Detailed service offerings
4. **Use Cases** (/use-cases) - Industry applications
5. **Government** (/government) - Civic solutions
6. **Security** (/security) - Security & compliance
7. **Case Studies** (/case-studies) - Project portfolio
8. **Pilot** (/pilot) - Pilot proposal template
9. **Team** (/team) - Team and advisors
10. **Contact** (/contact) - Contact form
11. **Privacy** (/privacy) - Privacy policy

## API Endpoints
- `POST /api/contact` - Submit contact form

## Design System
- **Primary**: Navy blue (for trust and professionalism)
- **Accent**: Orange (for CTAs and highlights)
- **Secondary**: Teal/Green (for icons and features)
- **Background**: Clean white with subtle gradients

## Contact Information
- **Name**: Vadali Tejasviram
- **Title**: Founder & Chief Architect
- **Phone**: +91 93933 53699
- **Email**: vtejasviram@bunnytechnologies.com
- **Website**: https://bunnyinnovations.net

## Running the Project
```bash
npm run dev
```
The app runs on port 5000.

## Recent Changes
- Initial implementation of all pages and components
- Contact form with API integration
- Responsive design for mobile-first experience
