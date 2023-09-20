# Practica 3
# Diagrama Entidad Relacion:
![Evidencia 1](<./evidencias/1.jpg>)
# 1) Aplicar servicio REST (aplicar por lo menos 2 métodos del CRUD) basado en la entidad transaccional asignada en su trabajo autónomo.

![Evidencia 2](<./evidencias/2.png>)
# Como vemos aparecen los demas metodos crud en la tabla que me pertenece en mi caso la de documentos.
# 2) Aplicar por lo menos una prueba unitaria para los métodos del servicio REST
![Evidencia 3](<./evidencias/3.png>)
![Evidencia 6](<./evidencias/6.png>)
```bash
npm run test -- documento.service.spec.ts
```
# Como vemos se le hicieron los respectivos test a 3 de las funciones de este componente: findOne, update y remove.
# 3/4) Definir un TAG que permita dockerizar tanto el servicio REST como sus pruebas en un solo stage (se aplica compilación normal de la imágen). Crear otro TAG que permita llevar multistage con por lo menos 3 etapas sobre el mismo servicio REST.
![Evidencia 4](<./evidencias/4.png>)
![Evidencia 7](<./evidencias/7.png>)
```bash
docker build --target test -t nestjstest .
```
# Como se acordo en clases se omitio el punto 3 y se hizo directamente el punto 4 donde se observan 4 stages en un dockerfile, con la modificacion que en el run del test solo se coloca la tabla que se representa.
# 5) Subir ambos TAGs a Docker Hub como versiones de la misma imagen.
![Evidencia 8](<./evidencias/8.png>)
```bash
docker image tag nestjstest jofre159rz/nestjs-repository:1.0.0 
docker push jofre159rz/nestjs-repository:1.0.0
```
![Evidencia 9](<./evidencias/9.png>)
```bash
docker build --tag jofre159rz/nestjs-repository:nestjsserver .
docker push jofre159rz/nestjs-repository:nestjsserver
```
![Evidencia 10](<./evidencias/10.png>)
![Evidencia 11](<./evidencias/11.png>)
# 6)  Probar localmente la descarga y funcionamiento de dicha imagen publicada con anterioridad.
```bash
 docker container run jofre159rz/nestjs-repository:nestjsserver
```
![Evidencia 12](<./evidencias/12.png>)
# 7) Aplicar patrón AAA en el desarrollo de sus pruebas
![Evidencia 5](<./evidencias/5.png>)
# Asi mismo se definieron y separaron las partes de este patron.
