import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sensor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  value: number;

  @Column()
  timestamp: Date;
}
