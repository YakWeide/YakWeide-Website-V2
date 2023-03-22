# Base image
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g serve

# Copy source code
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# App starten
CMD ["serve", "-s", "build"]