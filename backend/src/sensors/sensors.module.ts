import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Sensor } from './entities/sensor.entity';
import { SensorsController } from './sensors.controller';
import { SensorsService } from './sensors.service';

@Module({
  controllers: [SensorsController],
  providers: [SensorsService],
  imports: [TypeOrmModule.forFeature([Sensor])],
})
export class SensorsModule {}
