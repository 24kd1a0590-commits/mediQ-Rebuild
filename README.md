# MediQ - Smart Healthcare Clinic & Patient Queue Management System

> **Milestone 1: Core React + Vite Application Shell**  
> Built as a clean, modular foundation for outpatient clinic queueing, doctor consultation desks, and administrative command centers.

---

## 📋 Milestone 1 Scope & Architecture

In this milestone, we established the core architecture, visual design system, responsive navigation, and role-based routing structure.

* **Frontend Framework**: React 18 + Vite 6
* **Routing**: React Router v6 (declarative nested routes)
* **Icons**: `lucide-react` (accessible medical and operational iconography)
* **Styling & Tokens**: Vanilla CSS Design Tokens (`src/styles/tokens.css` & `src/styles/index.css`)
* **Security & Auth Posture**: **No Supabase connection yet**. No fake authentication or mock security claims. All routes are open presentation shells.
* **Data Privacy**: **100% Synthetic Demo Data**. No real patient, doctor, or clinic records are stored or used.

---

## 📂 Project Directory Structure

```text
e:\DTI\MediQ-Rebuild\
├── .gitignore                   # Excludes node_modules, build dist, and environment files (.env*)
├── .env.example                 # Environment template with zero secrets
├── index.html                   # HTML entry point with Google Fonts (Plus Jakarta Sans & Inter)
├── package.json                 # Dependencies & project scripts
├── vite.config.js               # Vite build & dev server configuration
├── README.md                    # Setup and architectural documentation
├── public/
│   └── favicon.svg              # Brand icon
└── src/
    ├── main.jsx                 # Application entry point (ReactDOM root)
    ├── App.jsx                  # Root component with BrowserRouter wrapper
    ├── routes/
    │   └── AppRouter.jsx        # Centralized router definition & nested workspace routes
    ├── styles/
    │   ├── tokens.css           # Design tokens (colors, spacing, shadows, radii)
    │   └── index.css            # Global resets, typography, button/card utilities
    ├── data/
    │   └── mockData.js          # Realistic synthetic demo datasets (Patient, Doctor, Admin)
    ├── components/
    │   ├── common/
    │   │   ├── Header.jsx       # Responsive header with role fast-switcher & mobile toggle
    │   │   ├── Sidebar.jsx      # Context-aware navigation sidebar & mobile drawer
    │   │   ├── StatCard.jsx     # Metric card for KPIs and triage stats
    │   │   ├── StatusBadge.jsx  # Color-coded status pills (Success, Warning, Danger, Info)
    │   │   ├── LoadingState.jsx # Accessible spinner with aria-live status
    │   │   ├── EmptyState.jsx   # Accessible zero-state placeholder
    │   │   └── ErrorState.jsx   # Accessible error recovery card with retry trigger
    │   └── layout/
    │       ├── AppLayout.jsx    # Primary app shell (Header + Sidebar + Viewport)
    │       └── WorkspaceLayout.jsx # Workspace banner, breadcrumbs & sub-tabs
    └── pages/
        ├── Home/
        │   └── HomePage.jsx     # System overview hub & interactive state test bench
        ├── Patient/
        │   ├── PatientDashboard.jsx     # Live token card, wait time & encounter summary
        │   ├── PatientAppointments.jsx # Upcoming visits table with empty state toggle
        │   └── PatientPrescriptions.jsx # Active medication regimen & refills
        ├── Doctor/
        │   ├── DoctorDashboard.jsx      # Active consultation encounter & next patient
        │   ├── DoctorQueue.jsx          # Full triage-ordered patient waiting queue
        │   └── DoctorSchedule.jsx       # OPD clinic session slots
        ├── Admin/
        │   ├── AdminDashboard.jsx       # Department throughput matrix & audit stream
        │   ├── AdminQueueOps.jsx        # Department capacity & load balancing
        │   └── AdminAnalytics.jsx      # Historical wait times & clearance metrics
        └── NotFound/
            └── NotFoundPage.jsx         # Accessible 404 handler
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** installed on your machine:
* Node.js version: **v18.0.0** or higher (v22.x recommended)
* npm version: **v9.0.0** or higher

### 1. Installation

Open your terminal in the project directory and run:

```bash
npm install
```

### 2. Running Locally in Development Mode

Start the Vite local development server:

```bash
npm run dev
```

The terminal will provide the local URL, typically `http://localhost:5173`. Open this URL in your web browser.

### 3. Production Build & Validation

To test that all components compile cleanly without syntax or bundling errors:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🗺️ Route Map & Workspaces

| Route | Workspace | Description |
|---|---|---|
| `/` | **Overview Hub** | High-level system KPIs, workspace launchpads, and UI state test bench |
| `/patient` | **Patient** | Live Token card (T-042), queue position, and triage instructions |
| `/patient/appointments` | **Patient** | Scheduled doctor appointments with interactive empty state demo |
| `/patient/prescriptions` | **Patient** | Digital medication list, dosages, and refill counts |
| `/doctor` | **Doctor** | Active patient encounter (T-039), clinical vitals, next patients in line |
| `/doctor/queue` | **Doctor** | Live triage queue table with "Call In" patient actions |
| `/doctor/schedule` | **Doctor** | OPD consultation shifts and clinic suite assignments |
| `/admin` | **Admin** | Hospital footfall KPIs, department load matrix, and audit event logs |
| `/admin/queue-ops` | **Admin** | Real-time department load rebalancing |
| `/admin/analytics` | **Admin** | Wait time distribution and clearance statistics |
| `/*` | **404** | Accessible fallback for invalid paths |

---

## 🛡️ Security & Environment Exclusions

* `.env` files are strictly excluded from git tracking via `.gitignore`.
* An `.env.example` file is provided as a reference template for future configuration.
* **No credentials, tokens, or private keys are present in this repository.**

---

## 🔮 Next Step: Milestone 2 Roadmap

Once Milestone 1 is reviewed and approved, Milestone 2 will focus on:
1. Connecting to the real Supabase database schema (Patients, Queues, Doctors, Encounters).
2. Implementing Supabase Authentication & Role-Based Access Control (RBAC) with Row Level Security (RLS).
3. Real-time queue subscriptions via Supabase Realtime (WebSocket events for instant token updates).
