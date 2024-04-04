/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host:configService.get("DB_HOST"),
        port: configService.get("DB_PORT"),
        username: configService.get("DB_NAME"),
        password: configService.get("DB_PASS"),
        database: configService.get('backTusk'),
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        synchronize:true
      }),
    }),
    FeedbackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
