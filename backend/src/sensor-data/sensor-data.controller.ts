import { Controller, Get } from '@nestjs/common';

@Controller('sensor-data')
export class SensorDataController {
  @Get()
  findAll() {
    return 'all sensor data here!';
  }
}
