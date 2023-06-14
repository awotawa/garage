import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarResolver } from './car.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [CarResolver, CarService, PrismaService],
})
export class CarModule {}
