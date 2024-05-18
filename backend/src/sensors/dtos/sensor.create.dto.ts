import { IsNumber, IsString } from 'class-validator';

export class SensorCreateDto {
  @IsString()
  type: string;

  @IsNumber()
  value: number;
}
