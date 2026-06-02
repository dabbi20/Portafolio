# Etapa 1: build de Angular
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


# Etapa 2: servidor Nginx
FROM nginx:alpine

COPY --from=build /app/dist/david-portfolio/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]