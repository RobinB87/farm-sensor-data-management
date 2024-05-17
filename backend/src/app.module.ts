import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SensorsModule } from './sensors/sensors.module';

@Module({
  imports: [
    SensorsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db/db.sqlite.dev',
      entities: ['**/*.entity.js'],
      migrationsRun: true, // run migrations when running app
      synchronize: true, // automatically loaded models will be synchronized
    }),
  ],
})
export class AppModule {}
