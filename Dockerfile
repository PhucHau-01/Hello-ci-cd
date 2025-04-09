# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port (nếu app chạy trên port 3000)
EXPOSE 3000

# Start app
CMD ["npm", "start"]
