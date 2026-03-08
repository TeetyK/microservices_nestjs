import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('RIDER_SERVICE') private riderClient: ClientProxy,
    @Inject('LOGGING_SERVICE') private loggingClient: ClientProxy,
  ) {}

  @Get()
  getHello() {
    return this.riderClient.send({ cmd: 'get_hello' }, {});
  }

  @Post('ride')
  createRide() {
    this.loggingClient.emit('log_message', { message: 'Ride created' });
    return this.riderClient.send({ cmd: 'create_ride' }, { pickup: 'A', destination: 'B' });
  }
}
