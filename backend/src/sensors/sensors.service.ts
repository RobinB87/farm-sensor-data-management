import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SensorCreateDto } from './dtos/sensor.create.dto';
import { Sensor } from './entities/sensor.entity';

@Injectable()
export class SensorsService {
  constructor(
    @InjectRepository(Sensor) private readonly repo: Repository<Sensor>,
  ) {}

  async create(input: SensorCreateDto): Promise<Sensor> {
    const entity = { ...input, timestamp: new Date() };
    this.repo.create(entity);
    return this.repo.save(entity);
  }
}
