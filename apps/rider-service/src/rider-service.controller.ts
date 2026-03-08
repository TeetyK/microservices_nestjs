import { Controller } from '@nestjs/common';
import { RiderServiceService } from './rider-service.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class RiderServiceController {
  constructor(private readonly riderServiceService: RiderServiceService) {}

  @MessagePattern({ cmd: 'get_hello' })
  getHello(): string {
    return this.riderServiceService.getHello();
  }

  @MessagePattern({ cmd: 'create_ride' })
  createRide(@Payload() data: any): string {
    console.log('Ride created with:', data);
    return `Ride created from ${data.pickup} to ${data.destination}!`;
  }
}
