# Use node image as base
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

RUN npm install -g serve
RUN npm run build
# Command to start the Vite development server

# Expose port 5000
EXPOSE 3000

# Command to start the serve server
CMD ["npx", "serve", "-s", "-l", "3000", "dist"]
