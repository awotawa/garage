import { Injectable } from '@nestjs/common';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  async create(createCarInput: CreateCarInput) {
    return await this.prisma.car.create({
      data: {
        manufacturer: createCarInput.manufacturer,
        model: createCarInput.model,
      },
    });
  }

  findAll() {
    return this.prisma.car.findMany();
  }

  findOne(id: number) {
    return this.prisma.car.findUnique({ where: { id } });
  }

  update(id: number, updateCarInput: UpdateCarInput) {
    return this.prisma.car.update({
      where: { id },
      data: {
        manufacturer: updateCarInput.manufacturer,
        model: updateCarInput.model,
      },
    });
  }

  remove(id: number) {
    return this.prisma.car.delete({ where: { id } });
  }
}
