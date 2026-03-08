import { Controller } from '@nestjs/common';
import { LoggingServiceService } from './logging-service.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class LoggingServiceController {
  constructor(private readonly loggingServiceService: LoggingServiceService) {}

  @EventPattern('log_message')
  handleLogMessage(@Payload() data: any) {
    console.log('Logging message:', data.message);
    // In a real app, you would write this to a file, database, or external logging service
  }
}
