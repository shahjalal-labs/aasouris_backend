# ⭐ Aasouris — Gamified Children's Daily Routine, Habit Building & Hero Level Progression API

![Architecture Banner](./assets/banner.svg)

<p align="center">
  <a href="https://www.postman.com/shahjalal-backend-9458759/shahjalal-api-portfolio/collection/48491387-9c39373e-bb89-4020-a94f-6329ec40af00" target="_blank">
    <img src="https://run.pstmn.io/button.svg" alt="View in Postman" />
  </a>
  <a href="https://www.postman.com/shahjalal-backend-9458759/shahjalal-api-portfolio/collection/48491387-9c39373e-bb89-4020-a94f-6329ec40af00" target="_blank">
    <img src="https://img.shields.io/badge/Postman-Instant_Live_API_Docs-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Live API Documentation" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Firebase_FCM-FFCA28?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase_FCM" />
  <img src="https://img.shields.io/badge/Gamification-EC4899?style=for-the-badge&logo=award&logoColor=white" alt="Gamification" />
  
</p>

---

## 📌 Executive Overview

**Aasouris Backend** (Smiley) is a behavioral habit-building and daily routine gamification engine tailored for children and parents. Built with **Node.js, TypeScript, Express, Prisma ORM, and Firebase Cloud Messaging (FCM)**, the platform motivates kids to accomplish essential morning and bedtime routines (brushing teeth, making bed, reading, sleep preparation). By completing daily sessions, children earn stars, level up their chosen superhero avatars, unlock celebratory milestones, and receive encouraging push notification reminders configured by parents.

---

## 🚀 Key Architectural & Domain Capabilities

- **Morning & Night Routine Sessions**: Timezone-aware daily routine tracking (`Session`) preventing duplicate completions per calendar day.
- **Hero Avatar & Level Progression**: Choose customizable hero companions; earn stars to level up through structured reward tiers (`level`).
- **Parental Routine Scheduling**: Configurable morning and bedtime reminder alarms dispatched via Firebase Cloud Messaging push notifications.
- **Apple & Google Social Sign-In**: Streamlined family onboarding supporting Apple ID, Google OAuth, and secure email authentication.
- **Reward Milestone History**: Historical log of earned stars, completed streaks, and level unlocking celebrations.

---

## 📬 API Documentation & Interactive Postman Collection

The complete REST API specification is published in our public Postman showcase workspace:

* 🌐 **Instant Live API Documentation**: [Explore aasouris_backend in Postman (Instant Web View)](https://www.postman.com/shahjalal-backend-9458759/shahjalal-api-portfolio/collection/48491387-9c39373e-bb89-4020-a94f-6329ec40af00)
* 📁 **Local Postman File**: [`docs/postman_collection.json`](./docs/postman_collection.json) (ready for Postman Desktop or Newman CLI).

### Core Endpoint Modules

| Module | Base Route | Key Capabilities |
|---|---|---|
| **Authentication** | `/api/v1/auth` | Family onboarding, Apple ID & Google authentication, JWT token refresh |
| **User & Hero Profile** | `/api/v1/user` | Hero avatar selection, star balances, morning/night reminder schedule |
| **Routine Sessions** | `/api/v1/session` | Log morning and bedtime routine completions, validate calendar day keys |
| **Hero Levels** | `/api/v1/level` | Level progression ladder, star requirements, rank order management |
| **Notifications** | `/api/v1/notification` | In-app alerts and FCM push notifications for routine wake-up and bedtime |

---

## 📂 Project Architecture

```plaintext
aasouris_backend/
├── assets/
│   └── banner.svg               # Architectural visual banner
├── docs/
│   └── postman_collection.json  # Full Postman API collection v2.1
├── src/
│   ├── app/
│   │   ├── middlewares/         # Global error handlers, auth & validation guards
│   │   ├── modules/             # Domain feature modules
│   │   └── routes/              # Centralized route registration
│   ├── config/                  # Environment & external service configurations
│   └── server.ts                # Application bootstrapper
├── prisma/
│   └── schema.prisma            # Prisma database schema definition
├── .env.example                 # Sanitized environment template
├── package.json
└── tsconfig.json
```

---

## 🛠️ Quickstart & Local Setup

### Prerequisites
* **Node.js**: `v20.x` or higher
* **Database**: MongoDB or PostgreSQL (as specified in `schema.prisma`)

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/shahjalal-labs/aasouris_backend.git
cd aasouris_backend
npm install
```

### 2. Configure Environment Variables
```bash
cp .env.example .env
```

### 3. Generate Prisma Client
```bash
npx prisma generate
```

### 4. Run Development Server
```bash
npm run dev
```

---

## 👨‍💻 Engineering & Authorship

Developed and engineered by **Md. Shahjalal**.

* **GitHub**: [@shahjalal-labs](https://github.com/shahjalal-labs)
* **Email**: [muhommodshahjalal@gmail.com](mailto:muhommodshahjalal@gmail.com)

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
