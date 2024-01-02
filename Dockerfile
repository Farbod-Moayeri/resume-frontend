# BUILD
FROM node:20.2.0 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --silent
COPY . ./
RUN npm run build

# RUNTIME (NGINX)
FROM nginx:alpine AS runtime
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# npm run build
# docker build -t resume-frontend-docker .
# docker run -p <PORT>:80 <IMAGE NAME>
