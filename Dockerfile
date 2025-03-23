FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Install nodemon globally for development
RUN npm install -g nodemon

# Copy the rest of the app
COPY . .

# Expose app port
EXPOSE 3000

# Run nodemon in dev mode
CMD ["nodemon", "app.js"]
