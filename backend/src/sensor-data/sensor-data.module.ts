import { Module } from '@nestjs/common';
import { SensorDataController } from './sensor-data.controller';

@Module({
  controllers: [SensorDataController]
})
export class SensorDataModule {}
