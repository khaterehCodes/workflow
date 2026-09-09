# Workflow

A React + Vite frontend project focused on building a structured dashboard and authentication-oriented UI with reusable components, custom hooks, Context, Redux, and a layered project architecture.

The project is organized to keep UI components, shared logic, state, and page-level components separated and reusable.

## ✨ Highlights

- ⚛️ React-based frontend
- ⚡ Vite development and build workflow
- 🔐 Login-oriented UI structure
- 📊 Dashboard page
- 🧩 Reusable UI component system
- 🧱 Atomic Design-inspired component organization
- 🪝 Custom React hooks
- 🧠 React Context
- 🗃️ Redux Toolkit architecture
- 🧮 Reusable array-related utility component
- 🧭 Client-side routing with React Router
- 🧹 ESLint configuration

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| React 19 | UI development |
| Vite 7 | Development server and build tool |
| React Router DOM 7 | Client-side routing |
| Redux | Application state architecture |
| JavaScript / JSX | Application development |
| CSS | Styling |
| ESLint | Code quality and linting |

The current `package.json` defines React 19.1.1, React Router DOM 7.8.2, Vite 7.1.2 and the Vite React plugin 5.0.0. citeturn1view1

## 🧱 Component Architecture

The UI is organized into reusable layers:

```text
src/
└── components/
    ├── partial/
    └── ui/
        ├── atoms/
        ├── molecules/
        ├── organisms/
        └── pages/
```

The `ui` directory currently contains:

- `atoms` — small reusable UI building blocks
- `molecules/login` — login-related grouped components
- `organisms/loginOrganisms` — larger login UI sections
- `pages/dashboard` — dashboard-level UI

This structure makes it easier to separate small reusable elements from larger composed interfaces. citeturn4view0

## 🧩 Reusable Atoms

The atoms layer includes reusable components such as:

```text
atoms/
├── customButton/
├── customH1/
├── customH2/
├── customImage/
├── customInput/
├── customLabel/
├── customP/
├── customSpan/
└── icons/
```

These components provide a reusable foundation for building larger interfaces without repeating basic UI implementations. citeturn5view0

## 🔐 Login UI

The project contains dedicated login-related component layers:

```text
ui/
├── molecules/
│   └── login/
└── organisms/
    └── loginOrganisms/
```

This separation follows the project's component-composition approach, where smaller login pieces can be combined into larger page sections. citeturn4view0

## 📊 Dashboard

The dashboard is implemented as a dedicated page-level component:

```text
pages/
└── dashboard/
    └── Dashboard.jsx
```

Keeping the dashboard at the page layer allows it to compose reusable UI components while keeping page-specific structure separate. citeturn5view1

## 🧠 Core Architecture

The `core` directory contains several layers for shared application logic:

```text
src/
└── core/
    ├── array/
    │   └── Array.jsx
    ├── context/
    │   └── Context.jsx
    ├── hooks/
    │   └── UseHeader.jsx
    └── redux/
        ├── app/
        └── feature/
            └── UserSlice.jsx
```

The repository therefore separates reusable logic into dedicated areas for arrays, Context, hooks, and Redux. citeturn2view1turn3view0turn3view1turn3view2turn3view3

## 🗃️ Redux Structure

Redux is organized into:

```text
core/
└── redux/
    ├── app/
    └── feature/
        └── UserSlice.jsx
```

The `feature` layer currently contains `UserSlice.jsx`, while the `app` layer provides the application-level Redux structure. citeturn3view3turn4view1

## 🪝 Custom Hooks

The project includes a dedicated hooks layer:

```text
core/
└── hooks/
    └── UseHeader.jsx
```

Keeping reusable behavior in a dedicated hooks directory helps prevent UI components from becoming tightly coupled to shared logic. citeturn3view2

## 📁 Project Structure

```text
workflow/
├── public/
│
├── src/
│   ├── components/
│   │   ├── partial/
│   │   └── ui/
│   │       ├── atoms/
│   │       │   ├── customButton/
│   │       │   ├── customH1/
│   │       │   ├── customH2/
│   │       │   ├── customImage/
│   │       │   ├── customInput/
│   │       │   ├── customLabel/
│   │       │   ├── customP/
│   │       │   ├── customSpan/
│   │       │   └── icons/
│   │       ├── molecules/
│   │       │   └── login/
│   │       ├── organisms/
│   │       │   └── loginOrganisms/
│   │       └── pages/
│   │           └── dashboard/
│   │               └── Dashboard.jsx
│   │
│   ├── core/
│   │   ├── array/
│   │   │   └── Array.jsx
│   │   ├── context/
│   │   │   └── Context.jsx
│   │   ├── hooks/
│   │   │   └── UseHeader.jsx
│   │   └── redux/
│   │       ├── app/
│   │       └── feature/
│   │           └── UserSlice.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── public/
├── package.json
├── vite.config.js
└── eslint.config.js
```

The repository currently contains `public`, `src`, Vite configuration, ESLint configuration, and package files at the root. citeturn0view0turn1view0

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/khaterehCodes/workflow.git
cd workflow
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build |

These commands are defined in the project's `package.json`. citeturn1view1

## 🎯 What I Practiced

This project provides practice with:

- React component architecture
- Reusable UI primitives
- Atomic Design concepts
- Login UI composition
- Dashboard page organization
- React Context
- Custom hooks
- Redux architecture
- Redux feature slices
- React Router
- Separating page-level UI from reusable components
- Organizing a scalable frontend project

## 🔮 Possible Improvements

The current structure provides a foundation for extending the application with features such as:

- [ ] Complete authentication flow
- [ ] Form validation
- [ ] Protected routes
- [ ] User profile management
- [ ] Dashboard widgets
- [ ] API integration
- [ ] Loading and error states
- [ ] Persistent authentication state
- [ ] Responsive refinements
- [ ] Automated tests
- [ ] Accessibility improvements

## 👩‍💻 Author

**Khatereh Naseri**

Frontend Developer & Computer Engineering Student

GitHub: [@khaterehCodes](https://github.com/khaterehCodes)

---

⭐ Built with React and Vite to practice reusable component architecture, authentication UI, dashboard structure, and frontend state management.
