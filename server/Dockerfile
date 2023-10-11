# FROM node:16 as install
# LABEL stage=install

# WORKDIR /src/install

# COPY package*.json .

# RUN npm config set network-timeout 60000
# RUN npm install

# FROM node:16 as compile
# LABEL stage=compile

# WORKDIR /src/build

# COPY --from=install /src/install .
# COPY . . 

# RUN npm run build
# RUN npm config set network-timeout 60000
# RUN npm install --production=true

# FROM node:16 as deploy

# WORKDIR /app

# COPY --from=compile /src/build/dist/main.js index.js
# COPY --from=compile /src/build/node_modules node_modules

# ENTRYPOINT node .


# FROM node:16

# WORKDIR /usr/src/app

# COPY package*.json .

# RUN npm install

# COPY . .

# # EXPOSE 3000

# CMD [ "npm", "run","start:dev" ]


# # Dependencias de desarrollo
# FROM node:16 as install
# WORKDIR /app
# COPY package.json ./
# RUN npm install


# # Build y Tests
# FROM node:16 as test
# WORKDIR /app
# COPY --from=install /app/node_modules ./node_modules
# COPY . .
# RUN npm run test -- proceso_determinado.service.spec.ts

# # Dependencias de Producción
# FROM node:16 as prod-deps
# WORKDIR /app
# COPY package.json ./
# RUN npm install

# # Ejecutar la APP
# FROM node:16 as runner
# WORKDIR /app
# COPY --from=prod-deps /app/node_modules ./node_modules
# COPY . .
# CMD [ "npm", "run","start:dev" ]





# Utiliza una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo en la aplicación
WORKDIR /app

# Copia los archivos de la aplicación a la imagen
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
