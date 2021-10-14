import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import * as fireorm from 'fireorm';
var serviceAccount = require('./../intercorp1-3dced-firebase-adminsdk-lkfd9-729172aa47.json');

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors({
    origin: true,
    methods: 'GET,POST,PATCH',
  });
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://intercorp1-3dced-default-rtdb.firebaseio.com/',
  });
  const firestore = admin.firestore();
  fireorm.initialize(firestore);

  await app.listen(PORT);
}
bootstrap();
