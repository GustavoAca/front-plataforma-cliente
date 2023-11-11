# Etapa 1: Construir a aplicação Angular
FROM node:14 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: Configurar o servidor Nginx e copiar a construção do Angular
FROM nginx:alpine
COPY --from=build /app/dist/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
