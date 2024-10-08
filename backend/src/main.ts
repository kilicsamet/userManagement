import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const configService = app.get(ConfigService);
  const port = configService.httpListenPort || 3002; 

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    credentials: true, 
  });

  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
