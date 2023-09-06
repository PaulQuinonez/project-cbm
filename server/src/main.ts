import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   // Configura el middleware de validación global
   app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Convierte automáticamente los datos de entrada en objetos DTO
      whitelist: true, // Elimina campos desconocidos en el objeto DTO
      forbidNonWhitelisted: true, // Lanza un error si se encuentran campos no permitidos
    }),
  );
  
  await app.listen(3000);
}
bootstrap();
