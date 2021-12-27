import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { hostname } from 'os';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';
import { Photo } from './photos/entity/photo.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.gql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      
    }),
    TypeOrmModule.forRoot({
      type:"mysql",
       host:"localhost",
       port:3306,
       username:"root",
       password:"",
       database:"type_orm",
       autoLoadEntities: true,
       synchronize:true
    }),
    UsersModule,
    PhotosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
