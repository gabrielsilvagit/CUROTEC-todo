# TODO APP

Todo app build in Laravel + NextJs

## Table of Contents

- [Getting Started](#getting-started)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

This repository contains two main folders: `backend` and `frontend`. Below are instructions on how to set up and run each part of the application.

### Frontend

To set up the frontend, follow these steps:

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the Next.js development server:

   ```bash
   npm run dev
   ```

The frontend should now be running, and you can access it at [http://localhost:3000](http://localhost:3000).

### Backend

The backend of this project is built using Laravel. Please follow these steps to set up the backend:

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install the required PHP dependencies (assuming you have PHP and Composer installed):

   ```bash
   composer install
   ```

3. Create a copy of the `.env.example` file as `.env` and configure your database settings.

4. Generate an application key:

   ```bash
   php artisan key:generate
   ```

5. Migrate the database:

   ```bash
   php artisan migrate
   ```

6. Start the Laravel development server:

   ```bash
   php artisan serve
   ```

The backend should now be running, and you can access it at [http://localhost:8000](http://localhost:8000).

## Usage
Add, change status, edit and delete TODO tasks
