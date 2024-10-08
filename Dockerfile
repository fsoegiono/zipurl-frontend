# Use an official Node runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Setup environment variables in production
ARG NEXT_PUBLIC_API_URL

# Build the Next.js application
RUN npm run build

# Remove development dependencies
RUN npm prune --production

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]