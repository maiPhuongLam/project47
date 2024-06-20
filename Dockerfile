# Stage 1: Build the React app
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the React app
# RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]