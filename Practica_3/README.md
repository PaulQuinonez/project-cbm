# Practica 1
# Diagrama Entidad Relacion:
![Evidencia 1](<./Evidencias/1.jpg>)
# Definimos como base de datos Mongo, por el momento, como podemos ver en el back ya se estructuro de una vez todas las entidades que forman parte del diagrama entidad relacion anterior.
![Evidencia 2](<./Evidencias/2.png>)
# En el front en este caso angular hicimos uso de las entidades que tienen dos relaciones con otras entidades, en este caso como se menciono en clase no era necesario aplicar todas las rutas de la apu rest, con el get bastaba, entonces se definieron las respectivas interfaces que nos presentan unas tablas con esta informacion.
# Usuarios:
![Evidencia 3](<./Evidencias/3.png>)
# Documento:
![Evidencia 4](<./Evidencias/4.png>)
# Departamentos:
![Evidencia 5](<./Evidencias/5.png>)
# Flujo de Procesos:
![Evidencia 6](<./Evidencias/6.png>)
# Proceso Determinado:
![Evidencia 7](<./Evidencias/7.png>)
# Solicitud Baja:
![Evidencia 8](<./Evidencias/8.png>)
# El proceso de dockerizacion es el siguiente, Luego de haber creado ambos dockerfiles tanto en el server como en el client en nuestro  docker-compose tendremos que configurar los respectivos servicios que necesitamos entre los cuales se encuentran la creacion de las imagenes del server y el client que para eso se usan los dockersfiles, asi mismo como vamos a usar nuestra base de datos en mongo tambien tendremos que configurarla. Luego con el comando:
```bash
docker-compose up --build   
```
![Evidencia 9](./Evidencias/9.png)
# Eso nos va a generar las imagenes respectivas y va a usarlas en el respectivo container que acabamos de crear:

![Evidencia 10](./Evidencias/10.png)
![Evidencia 11](./Evidencias/11.png)
# Entonces comprobamos que solo haciendo eso podemos usar tanto el forntend como el backend:
![Evidencia 12](./Evidencias/12.png)
![Evidencia 13](./Evidencias/13.png)