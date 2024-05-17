import { Controller, Get } from '@nestjs/common';
import { ApiResult } from 'src/dtos/api-result';

@Controller('sensors')
export class SensorDataController {
  @Get('data')
  async findAll(): Promise<ApiResult<string>> {
    return { value: 'All data found!' };
  }
}
