# Zipurl Client Application

This repository is for client application for URL shortener service, built with Next.js. It provides user-friendly interface for creating new shortened URLs, and looking up specified URL, and redirecting to the specified URL.

This repository works with URL shortener server, built with Node.js. Follow instruction to setup URL shortener server in [this repository](https://github.com/fsoegiono/zipurl-server).

## Features

- Create shortened URLs from long URLs
- Look up specified URL
- Responsive design for mobile and desktop
- Containerized with Docker for easy deployment, development, and consistency across environments
- CI/CD pipeline using GitHub Actions
- Deployed on AWS App Runner

## Prerequisites

Ensure you have the following installed:

- Docker
- Docker Compose
- Node.js (v18.0.0 or later)
- npm (v9.0.0 or later)

## Local Development

1. Clone the repository:

   ```
   git clone https://github.com/fsoegiono/zipurl-frontend.git
   cd zipurl-frontend
   ```

2. Run the container:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:8080 docker-compose up
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Environments

- `NEXT_PUBLIC_API_URL`: Zipurl server API endpoint

## Available Scripts

- `npm run dev`: Runs the app in development mode
- `npm test`: Runs unit and functional test
- `npm run build`: Builds the app for production
- `npm start`: Runs the built app in production mode

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment. The pipeline is configured to:

- Run tests
- Build Docker image
- Push the image to AWS Elastic Container Registry (ECR)
- Finally, deployed the application to AWS App Runner

The workflow is defined in `.github/workflows/deploy-ecr.yml`.
