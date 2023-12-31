import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CarModule } from './car/car.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false, //remove this if you want to use the playground
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), //will be creating a schema file
      sortSchema: true, //enables the sorting of the schema
    }),
    CarModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
