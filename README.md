# Articles

This project is a full-stack Next.js application designed for exploring articles. It includes features for loading articles on a schedule using a webhook, performing CRUD operations from an admin dashboard, and ensuring secure access through authorization. The project leverages modern web development tools and practices to provide a robust and maintainable codebase.

## Features
- Scheduled Article Loading: Articles are automatically loaded on a schedule using a webhook, ensuring that the content is always up-to-date.
- Admin Dashboard: A dedicated admin dashboard allows for performing CRUD (Create, Read, Update, Delete) operations on articles. This dashboard is protected and requires authorization to access.
- Authorization: Authorization is handled using the iron-session library, providing secure session management for the admin dashboard.
- Server Actions: The project utilizes server actions to handle various backend operations, ensuring a seamless integration between the frontend and backend.
- Styling: The application is styled using Tailwind CSS, offering a modern and responsive design.
- Code Quality: Code linting is enforced with ESLint, ensuring a consistent and error-free codebase.
- Database Management: The database is maintained using Prisma ORM, providing a powerful and type-safe database toolkit.

## For local development using Docker
To run the project using Docker, follow these steps:

1. Make sure Docker is installed on your machine and running.
2. Open a terminal inside the current project.
3. Build Docker image by running bellow command:

```bash
docker build -t your-image-name .
```

4. Start the container from created image by running bellow command:

```bash
docker run -d -p 3000:3000 your-image-name
```

5. Open your browser and go to http://localhost:3000/

## Technologies Used

1. Next.js: A React framework for server-side rendering and static site generation.
2. Prisma ORM: A modern database toolkit for TypeScript and Node.js.
3. Tailwind CSS: A utility-first CSS framework for rapid UI development.
4. iron-session: A library for secure session management.
5. ESLint: A tool for identifying and fixing code quality issues.
