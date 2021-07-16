# node:14
FROM node:14.16.1

# install the application
RUN mkdir /app
WORKDIR /app
COPY package.json yarn.lock  ./
RUN yarn install
COPY . .

# 3000 is the port we need for nextjs
EXPOSE 3000

# build and start
RUN npm run build
CMD npm run start
