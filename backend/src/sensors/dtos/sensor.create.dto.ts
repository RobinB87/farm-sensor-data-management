import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SensorCreateDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNumber()
  @Transform(({ value }) => +value)
  @IsNotEmpty()
  value: number;
}
