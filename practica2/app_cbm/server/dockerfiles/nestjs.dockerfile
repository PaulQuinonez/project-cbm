# Utiliza una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Expone el puerto en el que tu aplicación se ejecutará (si es necesario)
EXPOSE 3000
