# 🛒 Aasouris — High-Throughput E-Commerce & Logistics API

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
  <img src="https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe" />
  <img src="https://img.shields.io/badge/Logistics_Engine-10B981?style=for-the-badge&logo=truck&logoColor=white" alt="Logistics_Engine" />
  
</p>

---

## 📌 Executive Overview

Aasouris powers multi-tenant e-commerce operations, comprehensive inventory catalogs, real-time cart state management, order fulfillment pipelines, and automated Stripe billing.

---

## 🚀 Key Architectural Highlights

- **Catalog & Inventory**: Atomic inventory decrementing to prevent overselling under high concurrency.
- **Cart & Checkout**: Flexible cart state with real-time tax calculation, coupon validation, and Stripe checkout.
- **Order Tracking**: Automated order lifecycle status machine (Pending, Processing, Shipped, Delivered).
- **Merchant Management**: Multi-vendor listing approvals, commission tracking, and payout auditing.
- **Secure Infrastructure**: JWT auth rotation, rate limiting, and defensive input sanitization.

---

## 📬 API Documentation & Interactive Postman Collection

The complete REST API specification is published in our public Postman showcase workspace:

* 🌐 **Instant Live API Documentation**: [Explore aasouris_backend in Postman (Instant Web View)](https://www.postman.com/shahjalal-backend-9458759/shahjalal-api-portfolio/collection/48491387-9c39373e-bb89-4020-a94f-6329ec40af00)
* 📁 **Local Postman File**: [`docs/postman_collection.json`](./docs/postman_collection.json) (import directly into Postman Desktop or Newman CLI).

### Core Endpoint Modules

| Module | Base Route | Key Capabilities |
|---|---|---|
| **Authentication** | `/api/v1/auth` | Customer & Merchant onboarding, JWT session management |
| **Products** | `/api/v1/product` | Product catalog, multi-attribute variants, category trees |
| **Cart & Orders** | `/api/v1/order` | Shopping cart state, checkout initiation, order fulfillment |
| **Payments** | `/api/v1/payment` | Stripe payment intents, webhooks, and refund processing |
| **Logistics** | `/api/v1/shipping` | Shipping carrier calculation, tracking number assignment |

---

## 📂 Project Architecture

```plaintext
aasouris_backend/
├── assets/
│   └── banner.*                 # Project architecture visual banner
├── docs/
│   └── postman_collection.json  # Full Postman API collection v2.1
├── src/
│   ├── app/
│   │   ├── middlewares/         # Global error handlers, auth & validation guards
│   │   ├── modules/             # Domain-driven feature modules
│   │   └── routes/              # Centralized route aggregator
│   ├── config/                  # Environment & external service configurations
│   └── server.ts                # Application bootstrapper & HTTP server
├── prisma/
│   └── schema.prisma            # Database schema definition
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

### 2. Environment Configuration
Copy the provided `.env.example` file to create your local `.env`:
```bash
cp .env.example .env
```

### 3. Initialize Prisma Client
```bash
npx prisma generate
```

### 4. Run Development Server
```bash
npm run dev
```

---

## 👨‍💻 Engineering & Authorship

Developed and maintained by **Md. Shahjalal**.

* **GitHub**: [@shahjalal-labs](https://github.com/shahjalal-labs)
* **Email**: [muhommodshahjalal@gmail.com](mailto:muhommodshahjalal@gmail.com)

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
