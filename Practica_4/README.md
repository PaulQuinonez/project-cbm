# Practica 4
# Diagrama Entidad Relacion:
![Evidencia 1](<./Evidencias/1.jpg>)

# 1. Aplicar servicio REST (aplicar por lo menos 2 métodos del CRUD) basado en la entidad transaccional asignada en su trabajo autónomo.
![Alt text](./Evidencias/2.png)
# 2. Instalar minikube sobre Docker https://minikube.sigs.k8s.io/docs/start/
![Alt text](./Evidencias/3.png)
# 3. Definir configuraciones y secretos para los parámetros de su base de datos y servicio REST.
##  backend-secrets
![Alt text](./Evidencias/4.png)
##  mongo-secrets
![Alt text](./Evidencias/5.png)
##  mongo-config
![Alt text](./Evidencias/6.png)
# 4. Definir el Deployment y el Service para levantar su base de datos.
# 5. Definir el Deployment y el Service para levantar su servicio REST.
![Alt text](./Evidencias/7.png)
![Alt text](./Evidencias/8.png)
# 6. Aplicar los siguientes comandos para aplicar su configuración con minikube:
## a. kubectl apply -f [file-name].yml para aplicar un archivo específico a la configuración.
![Alt text](./Evidencias/9.png)
## b. kubectl get all para mostrar el estado de su configuración.
![Alt text](./Evidencias/10.png)
## c. kubectl logs pod/[name-pod] para obtener los logs de un elemento específico.
![Alt text](./Evidencias/12.png)
## e. kubectl rollout restart deployment aplicar cambios en general a la configuración de deployments o services con kubectl rollout restart service.
![Alt text](./Evidencias/11.png)
## f. minikube service backend-service cuando desee exponer el servicio para poder probarlo. o en su variante se puede usar: 
![Alt text](./Evidencias/13.png)
