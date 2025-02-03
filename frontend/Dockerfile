# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose frontend port
EXPOSE 3000

# Start the frontend development server
CMD ["npm", "start"]


