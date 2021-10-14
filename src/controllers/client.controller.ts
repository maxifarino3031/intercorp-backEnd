import { Body, Controller, Get, Post, Req } from '@nestjs/common';

import { BuildResponse } from 'src/common/response/build-response';
import { Client } from 'src/models/client';
import { ClientService } from 'src/services/client.service';

@Controller('/clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(
    @Body() client: Client,
    @Req() req,
  ): Promise<BuildResponse<Client>> {
    const response: BuildResponse<Client> = {
      statusCode: 201,
      data: client,
    };

    this.clientService.save(client);
    return response;
  }

  @Get('/all')
  async getAlls(): Promise<BuildResponse<Client[]>> {
    const listClients = await this.clientService.getAll();
    const response: BuildResponse<Client[]> = {
      statusCode: 200,
      data: listClients,
    };
    return response;
  }

  @Get('/average')
  async average(): Promise<BuildResponse<string>> {
    const avgAge = await this.clientService.average();
    const response: BuildResponse<string> = {
      statusCode: 200,
      data: avgAge.toFixed(2),
    };
    return response;
  }

  @Get('/deviation')
  async standarDeviation(): Promise<BuildResponse<string>> {
    const deviations = await this.clientService.standarDeviation();
    const response: BuildResponse<string> = {
      statusCode: 200,
      data: deviations.toFixed(2),
    };
    return response;
  }
  
}

