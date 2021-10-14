import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientController } from './controllers/client.controller';
import { ClientService } from './services/client.service';

@Module({
  imports: [],
  controllers: [AppController,ClientController],
  providers: [AppService,ClientService],
})
export class AppModule {}
