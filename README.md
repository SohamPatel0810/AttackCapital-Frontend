# My Blog Application

## Overview

This is a full-featured blog application built with Next.js. It includes server-side rendering (SSR) for the homepage, static generation for blog posts, client-side routing, and protected routes for authenticated users. The UI is styled with styled components and is fully responsive.

## Features

- **Server-Side Rendering (SSR)** for the homepage.
- **Static Generation** for individual blog posts.
- **Client-Side Routing** for seamless navigation.
- **Protected Routes** for logged-in users to access their dashboard.
- **Responsive UI** using Styled Components for styling.

## Project Structure

- **pages/**: Contains all the pages of the application.
  - **home.tsx**: Homepage with server-side rendering.
  - **login.tsx**: Login page.
  - **signup.tsx**: Sign-up page.
  - **dashboard.tsx**: Protected route for the user dashboard.
- **components/**: Reusable components across the application.
- **styles/**: CSS modules for component-level styling.

## Setup Instructions

### Prerequisites

- Node.js (v18.x or later)
- npm (v6.x or later) or Yarn (v1.x or later)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-name>

   ```

2. **Install dependencies:**

```bash
 npm install
 # or
 yarn install

```
3. **Set up environment variables:**
Create a .env.local file in the root directory and add the following line, replacing <backend-url> with your backend API URL:
```
NEXT_PUBLIC_API_BASE_URL=<backend-url>

```
4. **Run the development server:**
```bash
npm run dev
# or
yarn dev

```

## Project Decisions
- **Next.js** was chosen for its powerful features like SSR and static generation, which improve SEO and performance.
- **CSS Modules and Styled Components** were used for styling to ensure scoped and maintainable styles.
- **Protected Routes** are implemented to secure user data and ensure only authenticated users can access certain pages.
- **Responsive Design** is implemented to provide a good user experience across different devices.
- **Styled Components** are used to keep the UI simple and maintainable.
- **Node.js** is used for the backend to handle API requests and serve the application.
