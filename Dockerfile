FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json & install deps
COPY package*.json ./
RUN npm install

# Copy project to container
COPY . .

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "run", "dev"]