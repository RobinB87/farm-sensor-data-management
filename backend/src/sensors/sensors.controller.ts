import { Body, Controller, Get, Post } from '@nestjs/common';

import { ApiResult } from '../core/models/api-result';
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
  async findAll(): Promise<ApiResult<string>> {
    return { value: 'All data found!' };
  }
}
