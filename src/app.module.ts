import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { EmployeeModule } from './employee/employee.module';
import { ApolloDriver } from '@nestjs/apollo';
import { ProjectModule } from './project/project.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true
    }),
    TypeOrmModule.forRoot({
      keepConnectionAlive: true,
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'employee',
      autoLoadEntities: true,
      synchronize: true,
    })
    ,
    EmployeeModule,
    ProjectModule
  ],
  providers: [],
})
export class AppModule { }
