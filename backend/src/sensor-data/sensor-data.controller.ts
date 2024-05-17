import { Controller, Get } from '@nestjs/common';
import { ApiResult } from 'src/dtos/api-result';

@Controller('sensor-data')
export class SensorDataController {
  @Get()
  async findAll(): Promise<ApiResult<string>> {
    return { value: 'All data found!' };
  }
}
