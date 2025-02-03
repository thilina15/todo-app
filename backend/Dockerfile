# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose backend port
EXPOSE 4000

# Start the backend server
CMD ["npm", "run", "start"]
