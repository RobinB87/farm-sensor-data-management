import { Body, Controller, Get, Post } from '@nestjs/common';

import { SensorCreateDto } from './dtos/sensor.create.dto';
import { Sensor } from './entities/sensor.entity';
import { SensorsService } from './sensors.service';

@Controller('sensors')
export class SensorsController {
  constructor(private readonly sensorService: SensorsService) {}

  @Post('data')
  async create(@Body() input: SensorCreateDto): Promise<Sensor> {
    return this.sensorService.create(input);
  }

  @Get('data')
  async findAll(): Promise<Sensor[]> {
    return await this.sensorService.findAll();
  }
}
