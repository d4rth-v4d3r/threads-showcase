# Use the official Node.js 20 image as the base image
FROM node:20

# Create and set the working directory
WORKDIR /usr/src/app

# Copy node_modules and dist/apps/threads-api into the working directory
COPY dist/apps/threads-api /usr/src/app
RUN npm install --production

# Expose port 3333 to allow connections
EXPOSE 3333

# Set the command to run the main script
CMD ["node", "index.js"]