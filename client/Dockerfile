# Stage 1
FROM node:alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# Stage
FROM node:alpine
RUN npm i -g serve
WORKDIR /app
COPY --from=build /app/build .
CMD [ "serve", "-p" , "80", "-s", "."]