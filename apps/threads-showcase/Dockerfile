# Use the official Node.js 20 image as the base image
FROM node:20

# Create and set the working directory
WORKDIR /usr/src/app

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

# Copy node_modules and dist/apps/threads-api into the working directory
COPY dist/apps/threads-showcase /usr/src/app
RUN npm i -g next
RUN npm i

# Expose port 3000 to allow connections
EXPOSE 3000

# Set the command to run the main script
CMD ["npm", "run", "start"]