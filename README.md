# MD. Rahmatullah — Developer Portfolio

A modern, responsive developer portfolio that highlights my skills, projects, and experience with smooth animations and a clean, accessible UI.

• Status: Actively seeking a full‑time role — available for select freelance projects
• Location: Rajshahi, Bangladesh (GMT+6)
• Response time: typically within 24 hours

[🔗 Live Demo](https://portfolio12-me.web.app) · [📄 Download Resume](/Resume.pdf)

---


## Overview
This portfolio was built following the “Craft Your Developer Profile” specification. It presents my introduction, skills, education, experience, and at least three featured projects with individual detail pages. A dedicated contact section (EmailJS) allows visitors to reach me directly by email or WhatsApp.

I focused on:
- Professional look and clear content hierarchy
- Fast performance and smooth micro‑interactions
- Fully responsive layout for desktop, tablet, and mobile
- Easy content/config updates

---

## Features (Mapped to Requirements)

1) Navbar
- ✅ Fully responsive, sticky navbar
- ✅ Quick access to all sections (Home, About, Skills, Projects, Contact)

2) Designation & Introduction
- ✅ Clear professional title (Full Stack Developer / MERN)
- ✅ Professional photo showcased in Hero

3) Resume Download
- ✅ Prominent “Download Resume” button (single‑click view/download)

4) Social Links
- ✅ Buttons to GitHub, LinkedIn, (optional: Twitter/Facebook)

5) About Me
- ✅ Detailed intro: programming journey, what I enjoy, personality
- ✅ Hobbies/Interests included for a human touch

6) Skills
- ✅ Visual skill bars and categories (Frontend, Backend, Tools)
- ✅ Animated counters for experience/metrics

7) Projects (3)
- ✅ Cards with image, name, tags, brief
- ✅ “View More / Details” leads to dedicated page via React Router
- ✅ Each detail page includes: tech stack, description, live link, repo link, challenges, future improvements

8) Contact
- ✅ Direct email form integrated with EmailJS
- ✅ Email, phone, and WhatsApp number provided

9) Footer (Optional)
- ✅ Simple, elegant footer with quick links and credits

10) Responsive & Clean UI
- ✅ Works across desktop, laptop, tablet, mobile
- ✅ Thoughtful dark theme and accessible color contrast

---

## Tech Stack

Core
- React (react, react-dom)
- Tailwind CSS

Routing & Views
- react-router

Animations & Effects
- framer-motion
- AOS (Animate On Scroll)
- react-intersection-observer
- react-simple-typewriter
- react-countup

UI & Icons
- lucide-react

Alerts & Messaging
- sweetalert2
- emailjs-com

Build Tooling
- Vite (or CRA) — depending on setup

---

## Getting Started

Prerequisites
- Node.js ≥ 18
- npm or yarn

Install and Run
```bash
# 1) Clone
git clone https://github.com/Rahmot15/Portfolio.git
cd YOUR_REPO

# 2) Install deps
npm install
# or: yarn

# 3) Environment variables (EmailJS) — see next section
cp .env.local   # create and fill

# 4) Start dev server
npm run dev
# Build for production
npm run build
# Preview production build
npm run preview
