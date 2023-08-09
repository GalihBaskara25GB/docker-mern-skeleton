FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Insatll nodemon, enabling hot reload
RUN yarn global add nodemon

# Install app dependencies
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install

# Copy source code
COPY . .

# Switch user
USER node

# Expose port
EXPOSE 3000

# Run backend node service
CMD [ "node", "index.js" ]