# Aroma

Aroma is a modern, full-stack web application built with Next.js and Payload CMS. It serves as a template for building beautiful and performant e-commerce sites, portfolios, or blogs.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router & Turbopack)
- **CMS**: [Payload CMS](https://payloadcms.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/guide/packages/lucide-react) for icons.
- **Linting**: [ESLint](https://eslint.org/)
- **Formatting**: [Prettier](https://prettier.io/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v20 or later)
- [pnpm](https://pnpm.io/installation)
- [Docker](https://www.docker.com/products/docker-desktop/) (for running a local PostgreSQL database)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd aroma
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root of the project and add the following variables. You will need a PostgreSQL database connection string.

    ```env
    DATABASE_URI=postgres://user:password@host:port/db_name
    PAYLOAD_SECRET=your-super-secret-key
    ```

    You can use the provided `docker-compose.yml` to spin up a local PostgreSQL instance if you have Docker installed.

4.  **Run the development server:**

    ```bash
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the frontend.
Open [http://localhost:3000/admin](http://localhost:3000/admin) to access the Payload CMS admin panel.

## Project Structure

The project is organized as follows:

```
.
├── app/                  # Next.js App Router
│   ├── (frontend)/       # Frontend pages and layout
│   └── (payload)/        # Payload admin panel and API routes
├── collections/          # Payload CMS collections
│   ├── Media.ts
│   ├── Products.ts
│   └── Users.ts
├── components/           # Shared React components
│   ├── globals/
│   ├── sections/
│   ├── shared/
│   └── ui/
├── payload.config.ts     # Payload CMS configuration
└── ...
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.