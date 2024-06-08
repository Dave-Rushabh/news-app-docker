# Use an official node image as the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Install a simple web server to serve the static files
RUN npm install -g serve

# Set the command to run the web server on port 3000
CMD ["serve", "-s", "dist", "-l", "3000"]

# Expose port 3000 to the outside world
EXPOSE 3000
