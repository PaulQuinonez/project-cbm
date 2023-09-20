
# Empezamos ejecutando el siguiente comando, el cual va a crear como tal el projecto de laravel tanto local como en imagenes que van a ser usadas mas adelante. 
```bash
docker-compose run --rm composer create-project --prefer-dist laravel/laravel .
```
![Evidencia 1](<./Evidencias/1.jpg>)
# ahora lo quiero correr Al levanter el docker compose podemos tener nuestro servidor de Laravel en el puerto 8000
```bash
docker-compose up -d --build server
```
![Evidencia 2](<./Evidencias/2.jpg>)
![Evidencia 8](<./Evidencias/8.jpg>)
# Ahora podremos aplicar la herramienta migrate base de datos utilizando artisan. Antes de ejecutar el commando debemos actualizer las variables de  entorno:
DB_CONNECTION=mysql

DB_HOST=mysql

DB_PORT=3306

DB_DATABASE=homestead

DB_USERNAME=homestead

DB_PASSWORD=secret

# Una vez reemplazado las variables de entorno en el respectivo archivo .env nosotros ejecutamos el siguiente comando.
```bash
docker-compose run --rm artisan migrate
```
![Evidencia 3](<./Evidencias/3.jpg>)

# De este modo podríamos aplicar cuarquier método disponible en Artisan
```bash
docker-compose run --rm artisan list
```
![Evidencia 4](<./Evidencias/4.jpg>)

# También Podemos utilizar NPM y sus comandos
```bash
docker-compose run --rm npm version
```
![Evidencia 5](<./Evidencias/5.jpg>)

#  Procederemos a cambiar alguna vista y probar que el servidor replica los cambios revisando en el navegador en este caso se tradujo una seccion:
![Evidencia 6](<./Evidencias/6.jpg>)
![Evidencia 7](<./Evidencias/7.jpg>)