# Jobsheet SMT 6 - Next.js Practice

A modern Next.js 15+ application demonstrating best practices in API integration, project structure, and premium UI design.

## 🚀 Key Features

- **Next.js App Router**: Utilizing the latest routing system for better performance and organization.
- **Service Layer Pattern**: Centralized API calls using a custom `apiFetch` wrapper in `app/api/index.ts`.
- **Global Type Safety**: Shared TypeScript interfaces located in the root `/types` directory with **Barrel Export** pattern.
- **Dynamic API Integration**:
  - Internal API: `/api/hello` returning local student data.
  - External API: Real-time data fetching from **GitHub API** for the About page.
- **Premium UI/UX**: Clean and modern design inspired by Shadcn UI, built with **Tailwind CSS 4**.
- **Dark Mode Support**: Fully responsive design that respects system color schemes.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📂 Project Structure

```text
├── app/
│   ├── api/            # Internal API routes & Service Layer
│   ├── about/          # About Me page (GitHub API integration)
│   ├── globals.css     # Global styles & Tailwind config
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage (Internal API integration)
├── public/             # Static assets (images, icons)
├── types/              # Global TypeScript interfaces
└── next.config.ts      # Next.js configuration
```

## 🏁 Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 👤 Author

- **Name**: Riovaldo Alfiyan Fahmi Rahman
- **NIM**: 2341720209
- **GitHub**: [ckckckcz](https://github.com/ckckckcz)

---

Built with ❤️ using Next.js
