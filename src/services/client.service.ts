import { Injectable } from '@nestjs/common';
import { Client } from 'src/models/client';
import { getRepository } from 'fireorm';
import { avgAge } from 'src/common/utils/average';
import { getStandarDeviation } from 'src/common/utils/standered.deviation';

@Injectable()
export class ClientService {
  save = async (client: Client) => {
    const repo = getRepository(Client);
    return await repo.create(client);
  };

  async getAll(): Promise<Client[]> {
    return getRepository(Client).find();    
  }

  async average(): Promise<number> {
    const listClients = await getRepository(Client).find();
    return avgAge(listClients);
  }

  async standarDeviation(): Promise<number> {
    const listAges = (await getRepository(Client).find()).map(
      (client: Client) => {
        return client.age;
      },
    );
    return getStandarDeviation(listAges);    
  }
}
