# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Rebuild bcrypt specifically for the container's environment
RUN npm rebuild bcrypt --build-from-source

# Expose port 3000
EXPOSE 3000

# Command to run your NestJS application using npm
CMD ["npm", "run", "start:prod"]
