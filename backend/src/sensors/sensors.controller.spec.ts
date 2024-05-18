import { Test, TestingModule } from '@nestjs/testing';

import { SensorsController } from './sensors.controller';
import { SensorsService } from './sensors.service';
import { SensorCreateDto } from './dtos/sensor.create.dto';
import { BadRequestException } from '@nestjs/common';

describe('SensorsController', () => {
  let controller: SensorsController;
  let mockSensorService: Partial<SensorsService>;

  beforeEach(async () => {
    mockSensorService = {
      create: (input: SensorCreateDto) =>
        Promise.resolve({
          ...input,
          id: 1,
          timestamp: new Date(),
        }),
      findAll: () =>
        Promise.resolve([
          { id: 1, type: 'a', value: 150, timestamp: new Date() },
        ]),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [SensorsController],
      providers: [{ provide: SensorsService, useValue: mockSensorService }],
    }).compile();

    controller = module.get<SensorsController>(SensorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('post', () => {
    it('should throw when input is not correct', async () => {
      jest
        .spyOn(mockSensorService, 'create')
        .mockRejectedValue(new Error('type must be a string'));

      expect(
        controller.create({ value: 50 } as SensorCreateDto),
      ).rejects.toThrow();
    });

    it('should throw BadRequestException when save fails', async () => {
      jest
        .spyOn(mockSensorService, 'create')
        .mockRejectedValue(new BadRequestException());

      expect(controller.create({} as SensorCreateDto)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should return a valid sensor', async () => {
      const input = { type: 'foo', value: 100 };

      const sensor = await controller.create(input);

      expect(sensor).toBeDefined();
      expect(sensor.id).toBeDefined();
      expect(sensor.type).toEqual('foo');
    });
  });

  describe('get', () => {
    it('should return all sensors', async () => {
      const sensor = await controller.findAll();

      expect(sensor).toBeDefined();
      expect(sensor.length).toBe(1);
      expect(sensor[0].value).toBe(150);
    });
  });
});
